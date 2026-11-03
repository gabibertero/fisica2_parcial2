const typeset = (root) => window.MathJax?.typesetPromise?.([root]);

async function loadContent(target, path) {
  const host = document.querySelector(target);
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    host.innerHTML = await response.text();
    if (target === "#development-content") {
      host.querySelectorAll("[data-diagram]").forEach((figure) => {
        figure.innerHTML = window.DIAGRAMAS?.[figure.dataset.diagram] || "";
      });
    }
    await typeset(host);
  } catch (error) {
    host.innerHTML = '<p class="load-error">No se pudo cargar este contenido. Recargá la página para volver a intentarlo.</p>';
    console.error(`Error al cargar ${path}`, error);
  }
}

Promise.all([
  loadContent("#formula-content", "content/formulas.html"),
  loadContent("#question-content", "content/preguntas.html"),
  loadContent("#development-content", "content/desarrollos.html")
]);

document.querySelector("#question-content").addEventListener("toggle", (event) => {
  if (event.target.matches("details.question-card") && event.target.open) {
    typeset(event.target);
  }
}, true);

document.querySelector("#toggle-all").addEventListener("click", (event) => {
  const cards = [...document.querySelectorAll("#development-content details")];
  const openAll = cards.some((card) => !card.open);
  cards.forEach((card) => { card.open = openAll; });
  event.currentTarget.textContent = openAll ? "Cerrar todos" : "Abrir todos";
  if (openAll) typeset(document.querySelector("#development-content"));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener("click", () => {
  const target = document.querySelector(link.getAttribute("href"));
  if (target?.tagName === "DETAILS") {
    target.open = true;
    setTimeout(() => typeset(target), 0);
  }
}));
