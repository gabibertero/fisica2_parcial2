/* Diagramas esquemáticos, indexados por el orden de los 12 desarrollos. */
(() => {
  const style = `<style>
    .w{stroke:#27364b;stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round}
    .f{stroke:#315cbd;stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round}
    .g{stroke:#168a88;stroke-width:2;fill:none;stroke-dasharray:6 5}
    .d{stroke:#8897aa;stroke-width:1.5;fill:none;stroke-dasharray:4 4}
    .p{fill:#315cbd}.q{fill:#fff;stroke:#315cbd;stroke-width:2.5}.t{font:14px system-ui,sans-serif;fill:#26354a}
    .s{font:12px system-ui,sans-serif;fill:#617187}.e{font:italic 15px Georgia,serif;fill:#315cbd}
  </style>`;
  const svg = (label, body) => `<svg viewBox="0 0 360 160" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${style}${body}</svg>`;
  const arrow = (x1, y1, x2, y2, cls = "f") => `<path class="${cls}" d="M${x1} ${y1}L${x2} ${y2}" marker-end="url(#${cls === "w" ? "arrdark" : "arr"})"/>`;
  const defs = `<defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#315cbd"/></marker><marker id="arrdark" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#27364b"/></marker></defs>`;
  const cap = (x, y, label) => `<path class="w" d="M${x-12} ${y-17}V${y+17}M${x+2} ${y-17}V${y+17}"/><text class="s" x="${x-8}" y="${y-25}">${label}</text>`;

  window.DIAGRAMAS = {
    1: svg("Trayectoria desde i hasta f en un campo eléctrico uniforme; diferencial de recorrido tangente a la trayectoria", `${defs}<path class="w" d="M45 112C105 35 210 35 300 105"/><circle class="p" cx="45" cy="112" r="4"/><circle class="p" cx="300" cy="105" r="4"/><text class="t" x="31" y="137">i</text><text class="t" x="301" y="128">f</text>${arrow(141,78,195,78)}<text class="e" x="161" y="66">E</text>${arrow(142,53,181,52)}<text class="s" x="167" y="43">dℓ</text><text class="s" x="111" y="27">recorrido</text>`),
    2: svg("Carga puntual positiva y distancia radial hasta el punto de observación", `${defs}<circle class="q" cx="95" cy="82" r="19"/><text class="t" x="87" y="88">+q</text><circle class="p" cx="292" cy="82" r="4"/><text class="t" x="300" y="87">P</text><path class="d" d="M114 82H286"/>${arrow(178,82,239,82)}<text class="e" x="207" y="69">r</text><text class="s" x="153" y="110">radial; E apunta hacia afuera</text>`),
    3: svg("Carga encerrada por una superficie gaussiana esférica", `${defs}<circle class="g" cx="176" cy="82" r="52"/><circle class="q" cx="176" cy="82" r="15"/><text class="t" x="171" y="88">Q</text><path class="d" d="M176 82H228"/><text class="e" x="198" y="74">r</text>${arrow(226,82,255,82)}<text class="s" x="252" y="76">dS</text><text class="s" x="112" y="151">superficie cerrada</text>`),
    4: svg("Plano infinito con densidad superficial positiva y campo eléctrico saliente a ambos lados", `${defs}<path class="w" d="M92 26V136"/><text class="t" x="43" y="34">plano +σ</text><path class="d" d="M92 81H321"/><text class="e" x="304" y="71">z</text><circle class="p" cx="155" cy="81" r="4"/><circle class="p" cx="268" cy="81" r="4"/><text class="s" x="140" y="108">i</text><text class="s" x="263" y="108">f</text>${arrow(84,55,42,55)}${arrow(106,55,149,55)}<text class="e" x="119" y="44">E</text><text class="s" x="200" y="103">dℓ ∥ z</text>`),
    5: svg("Dipolo eléctrico en un campo uniforme: fuerzas iguales y opuestas forman un par que produce torque", `${defs}${arrow(35,80,325,80)}<text class="e" x="309" y="66">E</text><path class="w" d="M117 112L242 48"/><circle cx="117" cy="112" r="18" fill="#eaf0fc" stroke="#315cbd" stroke-width="2"/><circle cx="242" cy="48" r="18" fill="#eaf0fc" stroke="#315cbd" stroke-width="2"/><text class="t" x="108" y="118">+q</text><text class="t" x="233" y="54">−q</text><path class="d" d="M117 112L242 48"/><text class="s" x="167" y="100">d</text>${arrow(137,124,174,124)}<text class="s" x="144" y="143">F₊</text>${arrow(222,36,185,36)}<text class="s" x="194" y="23">F₋</text><text class="s" x="165" y="154">par de fuerzas → τ</text>`),
    6: svg("Capacitor de dos conductores con cargas opuestas", `${defs}<path class="w" d="M131 30V130M229 30V130"/><text class="t" x="106" y="25">+Q</text><text class="t" x="232" y="25">−Q</text>${arrow(149,80,211,80)}<text class="e" x="176" y="68">E</text><path class="d" d="M131 145H229"/><path class="d" d="M131 139V150M229 139V150"/><text class="s" x="166" y="157">ΔV</text><text class="s" x="141" y="47">placas conductoras</text>`),
    7: svg("Capacitor plano, área A y separación d", `${defs}<path class="w" d="M103 26V134M251 26V134"/><text class="t" x="69" y="33">+Q</text><text class="t" x="255" y="33">−Q</text>${arrow(125,80,229,80)}<text class="e" x="174" y="68">E</text><path class="d" d="M103 144H251M103 137V151M251 137V151"/><text class="s" x="174" y="159">d</text><path class="d" d="M103 42H251"/><text class="s" x="169" y="37">A</text><text class="s" x="129" y="111">C = ε₀A/d</text>`),
    8: svg("Dos capacitores conectados en paralelo entre los mismos nodos a y b", `${defs}<path class="w" d="M76 30V132M284 30V132M76 53H164M190 53H284M76 109H164M190 109H284"/><circle class="p" cx="76" cy="53" r="4"/><circle class="p" cx="284" cy="53" r="4"/><circle class="p" cx="76" cy="109" r="4"/><circle class="p" cx="284" cy="109" r="4"/><text class="t" x="60" y="25">a</text><text class="t" x="291" y="25">b</text>${cap(177,53,"C₁")}${cap(177,109,"C₂")}<text class="s" x="123" y="148">ΔV₁ = ΔV₂</text>`),
    9: svg("Dos capacitores conectados en serie en una rama: misma magnitud de carga y suma de tensiones", `${defs}<path class="w" d="M42 82H123M151 82H211M239 82H318"/>${cap(137,82,"C₁")}${cap(225,82,"C₂")}<text class="s" x="74" y="125">|Q₁| = |Q₂| = Q</text><text class="s" x="130" y="148">ΔVtotal = ΔV₁ + ΔV₂</text>`),
    10: svg("Conductor óhmico de longitud L y sección S con corriente", `${defs}<path class="w" d="M74 53H286V107H74Z"/><path class="d" d="M74 80H286"/>${arrow(25,80,67,80,"w")}<text class="t" x="28" y="65">I</text>${arrow(117,80,177,80)}<text class="e" x="145" y="67">J, E</text><path class="d" d="M74 125H286M74 119V131M286 119V131"/><text class="s" x="171" y="147">L</text><text class="s" x="299" y="85">S</text><text class="s" x="118" y="43">conductor</text>`),
    11: svg("Fuerza magnética sobre una carga positiva: v a la derecha, B entra en la hoja, F hacia arriba", `${defs}<circle class="q" cx="174" cy="83" r="15"/><text class="t" x="168" y="89">+q</text>${arrow(194,83,282,83)}<text class="e" x="230" y="70">v</text>${arrow(174,64,174,25)}<text class="e" x="185" y="37">F</text><circle cx="116" cy="83" r="14" fill="none" stroke="#168a88" stroke-width="2"/><path d="M106 73L126 93M126 73L106 93" stroke="#168a88" stroke-width="2"/><text class="e" x="83" y="119">B entra (⊗)</text><text class="s" x="202" y="112">F = q(v × B)</text>`),
    12: svg("Ley de Biot–Savart: elemento de corriente, punto A y vector r", `${defs}<path class="w" d="M34 48H326"/>${arrow(75,48,132,48,"w")}<text class="t" x="94" y="35">I</text><path class="f" d="M203 48H235"/><text class="e" x="209" y="34">dℓ</text><circle class="p" cx="171" cy="127" r="5"/><text class="t" x="153" y="151">A</text>${arrow(171,120,223,57)}<text class="e" x="190" y="91">r</text><circle cx="254" cy="112" r="13" fill="none" stroke="#315cbd" stroke-width="2"/><path d="M245 103L263 121M263 103L245 121" stroke="#315cbd" stroke-width="2"/><text class="e" x="272" y="117">dB</text><text class="s" x="185" y="144">r va de A al elemento</text>`)
  };

  const questionSvg = (label, body) => `<svg viewBox="0 0 520 190" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg"><defs><marker id="q-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#315cbd"/></marker><marker id="q-dark-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#168a88"/></marker></defs><style>.qt{font:18px system-ui,sans-serif;fill:#26354a}.qs{font:16px system-ui,sans-serif;fill:#617187}.qw{stroke:#27364b;stroke-width:3;fill:none;stroke-linecap:round;stroke-linejoin:round}.qf{stroke:#315cbd;stroke-width:2.5;fill:none;stroke-linecap:round;marker-end:url(#q-arrow)}.qg{stroke:#168a88;stroke-width:2.5;fill:none;stroke-dasharray:6 5;marker-end:url(#q-dark-arrow)}.qp{fill:#fff;stroke:#315cbd;stroke-width:2.5}</style>${body}</svg>`;
  window.GRAFICOS_PREGUNTAS = {
    conductor: questionSvg("Conductor en equilibrio electrostático: las cargas se redistribuyen en la superficie y el campo resultante dentro es nulo", `<path d="M160 38Q260 18 360 38V152Q260 172 160 152Z" fill="#f1f5fb" stroke="#27364b" stroke-width="3"/><text class="qt" x="207" y="102">E interior = 0</text><path class="qf" d="M28 64H126M28 94H126M28 124H126"/><text class="qs" x="34" y="48">campo aplicado</text><text class="qt" x="151" y="102">−</text><text class="qt" x="151" y="122">−</text><text class="qt" x="360" y="102">+</text><text class="qt" x="360" y="122">+</text><text class="qs" x="379" y="82">cargas en la</text><text class="qs" x="379" y="100">superficie</text>`),
    dipolo: questionSvg("Dipolo eléctrico en un campo uniforme: fuerzas opuestas sobre sus cargas forman un torque que lo alinea con el campo", `<path class="qf" d="M35 95H475"/><text class="qt" x="451" y="78">E</text><path class="qw" d="M230 123L322 67"/><circle class="qp" cx="230" cy="123" r="20"/><circle class="qp" cx="322" cy="67" r="20"/><text class="qt" x="221" y="129">−q</text><text class="qt" x="313" y="73">+q</text><path class="qg" d="M238 111L314 65"/><text class="qt" x="267" y="84">p</text><path class="qf" d="M204 123H145"/><text class="qs" x="157" y="113">F₋</text><path class="qf" d="M348 67H407"/><text class="qs" x="370" y="57">F₊</text><text class="qs" x="181" y="164">el par de fuerzas produce el torque τ</text>`),
    polarizacion: questionSvg("Dieléctrico polarizado: las cargas ligadas se desplazan ligeramente en sentidos opuestos; los dipolos inducidos apuntan contra el campo aplicado", `<path d="M93 44H425V148H93Z" fill="#f3f7fc" stroke="#27364b" stroke-width="2"/><path class="qf" d="M25 96H84"/><text class="qt" x="26" y="78">E aplicado</text><g>${[140,220,300,380].map(x=>`<text class="qt" x="${x}" y="103">−</text><text class="qt" x="${x+28}" y="103">+</text><path class="qg" d="M${x+25} 122H${x+4}"/>`).join("")}</g><text class="qs" x="158" y="35">material aislante</text><text class="qs" x="126" y="141">dipolos inducidos</text><text class="qs" x="438" y="87">sin flujo</text><text class="qs" x="438" y="104">libre de carga</text>`),
    "capacitor-dielectrico": questionSvg("Capacitor con dieléctrico polarizado: la batería mantiene la tensión y permite acumular más carga; el campo inducido se opone parcialmente al campo entre placas", `<path class="qw" d="M150 40V150M365 40V150"/><text class="qt" x="117" y="34">placa +Q</text><text class="qt" x="365" y="34">placa −Q</text><path class="qf" d="M175 57H338M175 95H338M175 133H338"/><text class="qs" x="232" y="50">E placas</text><rect x="204" y="58" width="108" height="73" rx="7" fill="#eef5f4" stroke="#168a88" stroke-width="2"/><g>${[220,252,284].map(x=>`<text class="qt" x="${x}" y="101">−</text><text class="qt" x="${x+20}" y="101">+</text>`).join("")}</g><path class="qg" d="M289 116H224"/><text class="qs" x="219" y="126">E inducido</text><text class="qs" x="25" y="78">batería fija ΔV</text><path class="qf" d="M83 84H136"/><text class="qs" x="393" y="78">entra más carga</text><text class="qs" x="393" y="96">si sigue conectada</text>`),
    voltimetro: questionSvg("Voltímetro conectado en paralelo con el componente cuya diferencia de potencial se mide", `<path class="qw" d="M150 57V145M370 57V145"/><path class="qw" d="M150 135H180M340 135H370"/><rect x="180" y="115" width="160" height="40" rx="7" fill="#f3f7fc" stroke="#27364b" stroke-width="3"/><text class="qt" x="207" y="141">componente</text><path class="qw" d="M150 72H226M274 72H370"/><circle cx="250" cy="72" r="24" fill="#fff" stroke="#315cbd" stroke-width="2.5"/><text class="qt" x="241" y="79">V</text><text class="qs" x="186" y="38">voltímetro en paralelo</text><path class="qf" d="M190 135H236"/><text class="qs" x="190" y="177">mismos dos nodos</text>`),
    amperimetro: questionSvg("Amperímetro intercalado en serie con el componente para que la corriente atraviese el instrumento", `<path class="qw" d="M70 95H147M213 95H285M351 95H450"/><circle cx="180" cy="95" r="33" fill="#fff" stroke="#315cbd" stroke-width="2.5"/><text class="qt" x="170" y="102">A</text><rect x="285" y="68" width="66" height="54" rx="5" fill="#f3f7fc" stroke="#27364b" stroke-width="3"/><text class="qs" x="293" y="100">carga</text><path class="qf" d="M85 95H134M226 95H271M363 95H430"/><text class="qs" x="140" y="43">amperímetro en serie</text><text class="qs" x="29" y="128">misma corriente</text>`)
  };

  // RC curve: show the correct value at one time constant, V_C(τ)=0.63 ε.
  const rcPlot = document.querySelector(".rc-plot");
  if (rcPlot) {
    rcPlot.querySelector(".guide")?.setAttribute("d", "M52 22H395 M52 80H130 M130 80V180");
    rcPlot.querySelector(".curve")?.setAttribute("d", "M52 180 C76 118 99 87 130 80 C186 54 240 25 395 22");
    const epsilon = [...rcPlot.querySelectorAll("text")].find((node) => node.textContent.trim() === "ε");
    if (epsilon) {
      epsilon.setAttribute("x", "57");
      epsilon.setAttribute("y", "27");
    }
    if (!rcPlot.querySelector(".tau-level")) {
      const level = document.createElementNS("http://www.w3.org/2000/svg", "text");
      level.setAttribute("class", "tau-level");
      level.setAttribute("x", "0");
      level.setAttribute("y", "84");
      level.textContent = "0,63ε";
      rcPlot.append(level);
    }
  }

  // In the Biot–Savart sketch, r points from the current element to the observation point.
  const biotSvg = document.querySelector(".biot-card > svg");
  if (biotSvg) {
    biotSvg.setAttribute("aria-label", "Elemento de corriente dℓ, punto de observación A y vector r dirigido desde el elemento hacia A; dB entra en el plano");
    const geom = biotSvg.querySelector(".geom");
    if (geom) {
      geom.setAttribute("d", "M230 42L171 136");
      geom.setAttribute("marker-end", "url(#biot-r-arrow)");
      if (!biotSvg.querySelector("#biot-r-arrow")) {
        const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        defs.innerHTML = '<marker id="biot-r-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#168a88"/></marker>';
        biotSvg.prepend(defs);
      }
    }
  }
})();
