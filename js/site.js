const typeset = (root) => window.MathJax?.typesetPromise?.([root]);

async function loadContent(target, path) {
  const host = document.querySelector(target);
  try {
    const response = await fetch(`${path}?v=7`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    host.innerHTML = await response.text();
    if (target === "#development-content") {
      host.querySelectorAll("[data-diagram]").forEach((figure) => {
        const diagram = window.DIAGRAMAS?.[figure.dataset.diagram];
        if (diagram) figure.insertAdjacentHTML("afterbegin", diagram);
      });
    }
    if (target === "#question-content") {
      host.querySelectorAll("[data-question-diagram]").forEach((figure) => {
        const key = figure.dataset.questionDiagram;
        figure.innerHTML = window.GRAFICOS_PREGUNTAS?.[key] || "";
        const captions = {
          conductor: "Las cargas se ubican en la superficie; el campo resultante dentro del conductor se anula.",
          dipolo: "Las fuerzas opuestas forman un par que tiende a alinear el dipolo con el campo.",
          polarizacion: "Las cargas ligadas se desplazan un poco: no atraviesan el aislante.",
          "capacitor-dielectrico": "Con batería conectada se conserva ΔV y puede entrar más carga; desconectado, Q permanece constante.",
          voltimetro: "El voltímetro se conecta en paralelo con el elemento.",
          amperimetro: "El amperímetro se intercala en serie para medir la corriente del circuito."
        };
        if (figure.innerHTML) figure.insertAdjacentHTML("beforeend", `<figcaption>${captions[key] || "Esquema conceptual."}</figcaption>`);
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

document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener("click", () => {
  const target = document.querySelector(link.getAttribute("href"));
  if (target?.tagName === "DETAILS") {
    target.open = true;
    setTimeout(() => typeset(target), 0);
  }
}));
