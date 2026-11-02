(function(){
"use strict";

// ---------- utilidades ----------
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]));
function shuffle(a){ a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const r = Math.floor(Math.random()*(i+1)); [a[i],a[r]] = [a[r],a[i]]; } return a; }
const store = {
  get(k, d){ try { const v = localStorage.getItem("fis2p2:" + k); return v ? JSON.parse(v) : d; } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem("fis2p2:" + k, JSON.stringify(v)); } catch(e){} }
};

// MathJax puede tardar en cargar (defer + CDN): encolamos hasta que esté listo.
const mjQueue = [];
function typeset(el){
  if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([el]).catch(()=>{});
  else mjQueue.push(el);
}
const mjTimer = setInterval(() => {
  if (window.MathJax && MathJax.typesetPromise){
    clearInterval(mjTimer);
    const els = mjQueue.splice(0);
    if (els.length) MathJax.typesetPromise(els).catch(()=>{});
  }
}, 150);
setTimeout(() => clearInterval(mjTimer), 30000);

// ---------- datos ----------
const TEMAS = window.TEMAS;
const DEVS = window.DESARROLLOS;
const TEMA_DE_BLOQUE = {bs:"bs", fm:"mag", amp:"amp", cap:"cap", pot:"pot", gau:"gau", ohm:"ohm"};
const STARS = window.ESTRELLAS || {};
const starN = id => STARS[id] || 3;
function starsHtml(n){ return `<span class="stars" role="img" aria-label="Prioridad ${n} de 5" title="Prioridad ${n} de 5">${"★".repeat(n)}<span class="off">${"★".repeat(5 - n)}</span></span>`; }
// Mezcla dentro de cada nivel de prioridad, pero siempre 5★ primero, después 4★, 3★…
function tierShuffle(list){
  const by = {};
  list.forEach(it => { const n = starN(it.id); (by[n] = by[n] || []).push(it); });
  return [5, 4, 3, 2, 1].flatMap(n => shuffle(by[n] || []));
}
const DEV_ITEMS = DEVS.map(d => ({
  id: d.id, tipo: "dev", tag: "teorico", tema: TEMA_DE_BLOQUE[d.bloque], dif: d.dif,
  prof: starN(d.id) === 5, dev: d
}));
const ALL = window.PREGUNTAS.concat(DEV_ITEMS);
const TIPO_TXT = {mc:"Opción múltiple", esc:"Dos renglones", dev:"Desarrollo"};
const DIF_TXT = {1:"●", 2:"●●", 3:"●●●"};

// ---------- errores guardados ----------
let errs = new Set(store.get("err", []));
function saveErrs(){ store.set("err", [...errs]); $("#n-err").textContent = errs.size; }

// ---------- navegación ----------
const VIEWS = ["practicar", "desarrollos", "como"];
function route(){
  const h = (location.hash || "#practicar").slice(1);
  const v = VIEWS.includes(h) ? h : (DEVS.some(d => d.id === h) ? "desarrollos" : "practicar");
  VIEWS.forEach(x => {
    $("#v-" + x).hidden = x !== v;
    $("#tab-" + x).setAttribute("aria-selected", String(x === v));
  });
  requestAnimationFrame(setHeaderVar);
  if (v === "desarrollos" && h !== v){
    const el = document.getElementById(h);
    if (el) requestAnimationFrame(() => el.scrollIntoView({block:"start"}));
  }
}
window.addEventListener("hashchange", route);
function setHeaderVar(){
  document.documentElement.style.setProperty("--hh", $(".top").offsetHeight + "px");
  const db = $(".dev-bar"); if (db && db.offsetHeight) document.documentElement.style.setProperty("--dbh", db.offsetHeight + "px");
}
window.addEventListener("resize", setHeaderVar);

// ---------- hoja de desarrollo (compartida) ----------
function sheetBody(d, veil){
  const math = d.math.map((m, i) => `<div class="ln${d.res.includes(i) ? " res" : ""}">\\[ ${m} \\]</div>`).join("");
  return `<div class="sheet-body">
    <div class="fig${veil ? " veil" : ""}" ${veil ? 'data-veil="Dibujalo vos primero. Tocá para ver."' : ""}>${d.fig}</div>
    <div class="math${veil ? " veil" : ""}" ${veil ? 'data-veil="Escribí la lógica matemática. Tocá para ver."' : ""}>${math}</div>
  </div>${legendBlock(d)}`;
}
function legendBlock(d){
  const L = (window.LEYENDAS || {})[d.id];
  if (!L) return "";
  const rows = L.s.map(([sym, txt, u]) => `<tr><th scope="row">${esc(sym)}</th><td>${esc(txt)}</td><td class="u">${esc(u)}</td></tr>`).join("");
  return `<div class="legend-block">
    <div class="lg-sym"><h3>Qué es cada letra</h3><div class="lg-tw"><table><tbody>${rows}</tbody></table></div></div>
    <div class="lg-read"><h3>Cómo leer el dibujo</h3><p>${esc(L.l)}</p></div>
  </div>`;
}
function whyBlock(d){
  return `<details><summary>Por qué cada paso</summary><div class="why">${d.why.map(w => `<p>${w}</p>`).join("")}${d.trap ? `<div class="trap">${d.trap}</div>` : ""}</div></details>`;
}

// =====================================================
// PRACTICAR
// =====================================================
const setup = $("#setup"), run = $("#run"), endV = $("#end"), card = $("#card");
let deck = [], idx = 0, state = "idle", cur = null, results = [];

function readFilters(){
  const tipos = $$('input[name="tipo"]:checked').map(i => i.value);
  const tags = $$('input[name="tag"]:checked').map(i => i.value);
  const difs = $$('input[name="dif"]:checked').map(i => +i.value);
  const prof = $("#f-prof").checked, onlyErr = $("#f-err").checked;
  const cant = +($('input[name="cant"]:checked') || {value:30}).value;
  return {tipos, tags, difs, prof, onlyErr, cant};
}
function pool(){
  const f = readFilters();
  return ALL.filter(it => f.tipos.includes(it.tipo) && f.tags.includes(it.tag) && f.difs.includes(it.dif)
    && (!f.prof || it.prof) && (!f.onlyErr || errs.has(it.id)));
}
function updatePoolN(){
  const n = pool().length;
  $("#pool-n").textContent = n ? `${n} disponibles con estos filtros` : "No hay preguntas con estos filtros";
  $("#start").disabled = !n;
}
setup.addEventListener("change", updatePoolN);

function start(list){
  const f = readFilters();
  let p = list || pool();
  if (!p.length) return;
  p = p.every(it => it.tipo === "dev") ? tierShuffle(p) : shuffle(p);
  if (!list && f.cant) p = p.slice(0, f.cant);
  deck = p; idx = 0; results = [];
  setup.hidden = true; endV.hidden = true; run.hidden = false;
  show();
  window.scrollTo({top:0});
}
$("#start").addEventListener("click", () => start());
$("#quit").addEventListener("click", finish);

function metaHtml(it){
  const parts = [
    `<span class="pill tipo">${TIPO_TXT[it.tipo]}</span>`,
    `<span class="pill${it.tag === "laboratorio" ? " lab" : ""}">${it.tag === "laboratorio" ? "Laboratorio" : "Teórico"}</span>`,
    `<span class="pill">${esc(TEMAS[it.tema] || "")}</span>`,
    `<span class="pill dif" title="Dificultad">${DIF_TXT[it.dif]}</span>`
  ];
  if (it.prof && it.tipo !== "dev") parts.push(`<span class="pill prof">La dijo el profe</span>`);
  if (it.tipo === "dev") parts.push(starsHtml(starN(it.id)));
  return `<div class="meta">${parts.join("")}</div>`;
}

function show(){
  cur = deck[idx];
  $("#prog-t").textContent = `${idx + 1} / ${deck.length}`;
  $("#prog-i").style.width = (idx / deck.length * 100) + "%";
  if (cur.tipo === "mc") showMC(cur);
  else if (cur.tipo === "esc") showEsc(cur);
  else showDev(cur);
  typeset(card);
  card.focus({preventScroll:true});
}

function showMC(it){
  state = "answer";
  const order = shuffle(it.o.map((t, j) => j));
  cur._order = order;
  card.innerHTML = `${metaHtml(it)}
    <p class="q">${esc(it.q)}</p>
    <div class="opts" role="group" aria-label="Opciones">
      ${order.map((j, k) => `<button type="button" class="opt" data-j="${j}"><span class="n">${k + 1}</span><span class="tx">${esc(it.o[j])}</span></button>`).join("")}
    </div>
    <div class="fb" hidden></div>`;
  card.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answerMC(+b.dataset.j)));
}
function answerMC(j){
  if (state !== "answer") return;
  const it = cur, good = j === it.c;
  card.querySelector(".opts").classList.add("locked");
  card.querySelectorAll(".opt").forEach(b => {
    const bj = +b.dataset.j;
    b.disabled = true;
    if (bj === it.c) b.classList.add("correct");
    else if (bj === j) b.classList.add("wrong");
    else b.classList.add("dim");
  });
  const fb = card.querySelector(".fb");
  fb.innerHTML = good
    ? `<div class="verdict ok">✓ Correcta</div><div class="key"><b>Idea clave:</b> ${esc(it.k)}</div>`
    : `<div class="verdict bad">✗ Incorrecta</div>
       <div class="box bad"><b class="lbl">Por qué la que marcaste está mal</b>${esc(it.w[j])}</div>
       <div class="box ok"><b class="lbl">La correcta</b>${esc(it.o[it.c])}. ${esc(it.w[it.c].replace(/^Correcto[.:]?\s*/,""))}</div>
       <div class="key"><b>Idea clave:</b> ${esc(it.k)}</div>`;
  fb.insertAdjacentHTML("beforeend", nextBtn());
  fb.hidden = false;
  record(it, good ? 1 : 0);
  state = "done";
  bindNext();
}

function showEsc(it){
  state = "reveal";
  card.innerHTML = `${metaHtml(it)}
    <p class="q">${esc(it.q)}</p>
    <p class="hint">Respondé en dos renglones (en papel o en voz alta) antes de mostrar la respuesta modelo.</p>
    <div class="actions"><button type="button" class="btn primary" id="rev">Mostrar respuesta <kbd>Enter</kbd></button></div>
    <div class="fb" hidden></div>`;
  $("#rev").addEventListener("click", revealEsc);
}
function revealEsc(){
  if (state !== "reveal") return;
  const it = cur;
  card.querySelector(".actions").remove();
  const fb = card.querySelector(".fb");
  fb.innerHTML = `<div class="model">${it.m}</div>
    <div><p class="hint" style="margin-bottom:6px">Palabras clave que tenían que estar:</p><div class="kwlist">${it.kw.map(k => `<span>${esc(k)}</span>`).join("")}</div></div>
    ${gradeBtns()}`;
  fb.hidden = false;
  state = "grade";
  bindGrade();
}

function showDev(it){
  state = "reveal";
  const d = it.dev;
  card.innerHTML = `${metaHtml(it)}
    <p class="q">${esc(d.titulo)}</p>
    <div class="reveal-cover">Escribí en papel el dibujo esquemático y la lógica matemática, como en la hoja del parcial.</div>
    <div class="actions"><button type="button" class="btn primary" id="rev">Mostrar desarrollo <kbd>Enter</kbd></button></div>
    <div class="fb" hidden></div>`;
  $("#rev").addEventListener("click", revealDev);
}
function revealDev(){
  if (state !== "reveal") return;
  const d = cur.dev;
  card.querySelector(".reveal-cover").remove();
  card.querySelector(".actions").remove();
  const fb = card.querySelector(".fb");
  fb.innerHTML = `${sheetBody(d, false)}${whyBlock(d)}${gradeBtns()}`;
  fb.hidden = false;
  typeset(fb);
  state = "grade";
  bindGrade();
}

function gradeBtns(){
  return `<div><p class="hint" style="margin-bottom:8px">¿Cómo te salió?</p>
    <div class="grade">
      <button type="button" class="btn ghost g-ok" data-g="1"><kbd>1</kbd> Bien, completo</button>
      <button type="button" class="btn ghost g-mid" data-g="0.5"><kbd>2</kbd> A medias</button>
      <button type="button" class="btn ghost g-bad" data-g="0"><kbd>3</kbd> No me salió</button>
    </div></div>`;
}
function bindGrade(){ card.querySelectorAll("[data-g]").forEach(b => b.addEventListener("click", () => grade(+b.dataset.g))); }
function grade(v){
  if (state !== "grade") return;
  const g = card.querySelector(".grade");
  g.querySelectorAll("button").forEach(b => { b.disabled = true; if (+b.dataset.g !== v) b.style.opacity = ".4"; });
  record(cur, v);
  g.parentElement.insertAdjacentHTML("afterend", nextBtn());
  state = "done";
  bindNext();
}
function nextBtn(){ return `<button type="button" class="btn primary next" id="next">${idx + 1 < deck.length ? "Siguiente" : "Ver resultado"} <kbd>Enter</kbd></button>`; }
function bindNext(){ const b = $("#next"); if (b){ b.addEventListener("click", next); } }
function record(it, v){
  results.push({it, v});
  if (v >= 1) errs.delete(it.id); else errs.add(it.id);
  saveErrs();
}
function next(){
  if (state !== "done") return;
  idx++;
  if (idx >= deck.length) finish(); else { show(); window.scrollTo({top:0}); }
}

function finish(){
  if (run.hidden) return;
  run.hidden = true;
  state = "idle";
  if (!results.length){ setup.hidden = false; updatePoolN(); return; }
  const total = results.reduce((s, r) => s + r.v, 0);
  const nota = (total / results.length * 10).toFixed(1).replace(".", ",");
  const per = {};
  results.forEach(r => { const t = r.it.tema; per[t] = per[t] || {s:0, n:0}; per[t].s += r.v; per[t].n++; });
  const rows = Object.keys(per).sort((a, b) => per[a].s / per[a].n - per[b].s / per[b].n).map(t => {
    const r = per[t].s / per[t].n;
    const pri = r < 0.6 ? "alta" : r < 0.9 ? "media" : "baja";
    const col = r < 0.6 ? "var(--bad)" : r < 0.9 ? "var(--warn)" : "var(--ok)";
    return `<span>${esc(TEMAS[t])}</span><span class="tab">${Math.round(r * 100)} %</span><span class="pri p-${pri}">${pri}</span><div class="bar"><i style="width:${r * 100}%;background:${col}"></i></div>`;
  }).join("");
  const missed = results.filter(r => r.v < 1).map(r => r.it);
  endV.innerHTML = `<div class="end-card">
      <div class="score"><span class="big">${nota}</span><span class="muted">/ 10 · ${results.length} respondidas</span></div>
      <p class="muted">Prioridad de repaso por tema (los de arriba primero):</p>
      <div class="bars">${rows}</div>
      ${missed.length ? `<p class="muted" style="margin-top:6px">Para repasar (${missed.length}):</p><ul class="misslist">${missed.map(m => `<li>${esc(m.tipo === "dev" ? m.dev.id + " · " + m.dev.titulo : m.q)}</li>`).join("")}</ul>` : `<p>Sin errores en esta tanda.</p>`}
      <div class="actions">
        ${missed.length ? `<button type="button" class="btn primary" id="again-miss">Repasar las falladas <kbd>Enter</kbd></button>` : ""}
        <button type="button" class="btn ghost" id="again-new">Nueva práctica</button>
      </div>
    </div>`;
  endV.hidden = false;
  state = "end";
  const am = $("#again-miss");
  if (am) am.addEventListener("click", () => start(missed));
  $("#again-new").addEventListener("click", () => { endV.hidden = true; setup.hidden = false; state = "idle"; updatePoolN(); });
  endV._missed = missed;
  window.scrollTo({top:0});
}

// ---------- teclado ----------
document.addEventListener("keydown", e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if ($("#v-practicar").hidden) return;
  const k = e.key;
  if (!run.hidden){
    if (k === "Escape"){ e.preventDefault(); finish(); return; }
    if (state === "answer" && /^[1-9]$/.test(k)){
      const n = +k - 1;
      if (cur._order && n < cur._order.length){ e.preventDefault(); answerMC(cur._order[n]); }
      return;
    }
    if (state === "reveal" && (k === "Enter" || k === " ")){ e.preventDefault(); cur.tipo === "esc" ? revealEsc() : revealDev(); return; }
    if (state === "grade" && /^[123]$/.test(k)){ e.preventDefault(); grade({1:1, 2:0.5, 3:0}[k]); return; }
    if (state === "done" && (k === "Enter" || k === " " || k === "ArrowRight")){ e.preventDefault(); next(); return; }
    return;
  }
  if (!endV.hidden && state === "end" && k === "Enter"){
    e.preventDefault();
    const am = $("#again-miss"); if (am) am.click(); else $("#again-new").click();
    return;
  }
  if (!setup.hidden && k === "Enter" && !$("#start").disabled){
    if (document.activeElement && document.activeElement.tagName === "BUTTON" && document.activeElement.id !== "start") return;
    e.preventDefault(); start();
  }
});

// =====================================================
// DESARROLLOS
// =====================================================
let done = store.get("dev", {});
let devOrder = store.get("devorder", "tema");
function sheetHtml(d){
  return `<article class="sheet" id="${d.id}">
        <div class="sheet-head"><div><span class="code">${d.id}</span><h2>${esc(d.titulo)}</h2></div>${starsHtml(starN(d.id))}</div>
        ${sheetBody(d, true)}
        <div class="sheet-foot">${whyBlock(d)}
          <label class="check"><input type="checkbox" data-done="${d.id}"> Lo escribí sin mirar</label>
        </div>
      </article>`;
}
const TIER_TXT = {5:"Prioridad máxima", 4:"Prioridad alta", 3:"Prioridad media", 2:"Prioridad baja", 1:"Prioridad mínima"};
function renderDevs(){
  const list = $("#devlist");
  let html = "", order = [];
  if (devOrder === "prio"){
    order = tierShuffle(DEVS);
    let last = 0;
    order.forEach(d => {
      const n = starN(d.id);
      if (n !== last){ html += `<div class="block-t">${starsHtml(n)} ${TIER_TXT[n]}</div>`; last = n; }
      html += sheetHtml(d);
    });
  } else {
    window.BLOQUES.forEach(b => {
      const ds = DEVS.filter(d => d.bloque === b.id);
      if (!ds.length) return;
      html += `<div class="block-t">${esc(b.nombre)}</div>`;
      ds.forEach(d => { html += sheetHtml(d); order.push(d); });
    });
  }
  list.innerHTML = html;
  $("#toc").innerHTML = order.map(d => `<a href="#${d.id}" data-t="${d.id}"><span class="toc-s">${starN(d.id)}★</span> ${esc(shortName(d))}</a>`).join("");
  $("#tot-n").textContent = DEVS.length;
  $("#o-tema").setAttribute("aria-pressed", String(devOrder === "tema"));
  $("#o-prio").setAttribute("aria-pressed", String(devOrder === "prio"));
  paintDone();
  typeset(list);
}
function shortName(d){
  const map = {D21:"Segmento finito",D22:"Hilo infinito",D23:"θi = θf",D26:"Espira circular",Dcruz:"Espira en cruz",D25:"Alambre grueso",D27:"Toroide",D28:"Solenoide",
    D10:"C y geometría",D11:"Capacitor plano",D12:"Serie y paralelo",D14:"Energía",D01:"ΔV y conservativo",D02:"V de cargas",D03:"Gradiente",D04:"Conductor",
    D09:"Dipolo",D02b:"V del plano",D02c:"V del hilo",D11b:"Cap. cilíndrico",D11c:"Cap. esférico",D29:"F sobre conductor",D30:"F entre conductores",D31:"Ampère desde el hilo",D05:"Gauss",D06:"Gauss: hilo",D07:"Gauss: plano",D08:"Gauss: esfera",D17:"Ohm",D18:"Joule"};
  return map[d.id] || d.id;
}
function paintDone(){
  let n = 0;
  DEVS.forEach(d => {
    const on = !!done[d.id]; if (on) n++;
    const cb = document.querySelector(`[data-done="${d.id}"]`); if (cb) cb.checked = on;
    const a = document.querySelector(`#toc [data-t="${d.id}"]`); if (a) a.classList.toggle("done", on);
  });
  $("#done-n").textContent = n;
}
$("#devlist").addEventListener("change", e => {
  const id = e.target.dataset && e.target.dataset.done; if (!id) return;
  done[id] = e.target.checked; store.set("dev", done); paintDone();
});
const devlist = $("#devlist");
function setMode(exam){
  devlist.classList.toggle("exam", exam);
  $("#m-study").setAttribute("aria-pressed", String(!exam));
  $("#m-exam").setAttribute("aria-pressed", String(exam));
  $("#exam-hint").hidden = !exam;
  devlist.querySelectorAll(".veil").forEach(v => v.classList.remove("shown"));
  devlist.querySelectorAll(".sheet").forEach(s => s.classList.remove("revealed"));
}
$("#o-tema").addEventListener("click", () => { devOrder = "tema"; store.set("devorder", devOrder); renderDevs(); });
$("#o-prio").addEventListener("click", () => { devOrder = "prio"; store.set("devorder", devOrder); renderDevs(); });
function startDevsByPrio(){
  $$('input[name="tipo"]').forEach(i => { i.checked = i.value === "dev"; });
  $$('input[name="tag"]').forEach(i => { i.checked = true; });
  $$('input[name="dif"]').forEach(i => { i.checked = true; });
  $("#f-prof").checked = false; $("#f-err").checked = false;
  const all = $('input[name="cant"][value="0"]'); if (all) all.checked = true;
  updatePoolN();
  if (location.hash !== "#practicar") location.hash = "#practicar";
  route();
  start();
}
$("#start-devs").addEventListener("click", startDevsByPrio);
$("#dev-practice").addEventListener("click", startDevsByPrio);
$("#m-study").addEventListener("click", () => setMode(false));
$("#m-exam").addEventListener("click", () => setMode(true));
devlist.addEventListener("click", e => {
  if (!devlist.classList.contains("exam")) return;
  const v = e.target.closest(".veil"); if (!v || v.classList.contains("shown")) return;
  v.classList.add("shown");
  const s = v.closest(".sheet");
  if ([...s.querySelectorAll(".veil")].every(x => x.classList.contains("shown"))) s.classList.add("revealed");
});

// ---------- inicio ----------
card.tabIndex = -1;
saveErrs();
updatePoolN();
renderDevs();
setHeaderVar();
route();
})();
