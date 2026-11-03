(() => {
  const startButton = document.querySelector("#start-quiz");
  const app = document.querySelector("#quiz-app");
  const bank = window.PREGUNTAS_QUIZ;
  if (!startButton || !app || !Array.isArray(bank)) return;

  const shuffle = (items) => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  let questions = [];
  let index = 0;
  let selected = -1;
  let phase = "answer";
  let score = 0;
  let wrong = [];

  function start(items = bank) {
    questions = shuffle(items).map((item) => ({
      ...item,
      options: shuffle(item.o.map((text) => ({ text, correct: text === item.a })))
    }));
    index = 0;
    selected = -1;
    phase = "answer";
    score = 0;
    wrong = [];
    app.hidden = false;
    startButton.textContent = "Reiniciar práctica";
    render();
    app.scrollIntoView({ behavior: "smooth", block: "start" });
    requestAnimationFrame(() => app.querySelector("[data-option='0']")?.focus());
  }

  function render() {
    if (phase === "result") {
      app.innerHTML = `<div class="quiz-panel quiz-result"><p class="eyebrow">PRÁCTICA TERMINADA</p><h3>Obtuviste ${score} de ${questions.length}</h3><p class="quiz-result-copy">${score === questions.length ? "¡Perfecto!" : "Revisá las respuestas incorrectas y volvé a intentarlo."}</p><div class="quiz-actions"><button class="button primary" type="button" data-action="restart">Repetir todas</button>${wrong.length ? '<button class="button secondary" type="button" data-action="retry-wrong">Practicar incorrectas</button>' : ""}<button class="text-link" type="button" data-action="close">Volver a las preguntas</button></div></div>`;
      typeset();
      return;
    }
    const item = questions[index];
    const answered = phase === "feedback";
    const selectedOption = item.options[selected];
    const message = answered
      ? selectedOption.correct
        ? `<strong>Correcto.</strong> ${escapeHtml(item.a)}`
        : `<strong>Incorrecto.</strong> La respuesta correcta es: ${escapeHtml(item.a)}`
      : "Elegí una opción con los botones o con las teclas 1–4. Enter confirma la respuesta.";
    const options = item.options.map((option, optionIndex) => {
      const state = answered && option.correct ? " is-correct" : answered && optionIndex === selected ? " is-incorrect" : "";
      return `<button type="button" class="quiz-option${state}${selected === optionIndex ? " is-selected" : ""}" data-option="${optionIndex}" aria-pressed="${selected === optionIndex}" ${answered ? "disabled" : ""}><span class="quiz-number">${optionIndex + 1}</span><span>${escapeHtml(option.text)}</span></button>`;
    }).join("");
    app.innerHTML = `<div class="quiz-panel"><div class="quiz-topline"><span class="quiz-tag">${escapeHtml(item.u)}</span><span>Pregunta ${index + 1} de ${questions.length}</span><span>Puntaje: ${score}</span></div><div class="quiz-progress" role="progressbar" aria-label="Progreso de la práctica" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${index + (answered ? 1 : 0)}"><span style="width:${((index + (answered ? 1 : 0)) / questions.length) * 100}%"></span></div><fieldset class="quiz-fieldset"><legend>${escapeHtml(item.q)}</legend><div class="quiz-options">${options}</div></fieldset><div class="quiz-feedback${answered ? (selectedOption.correct ? " good" : " bad") : ""}" role="status" aria-live="polite">${message}</div><div class="quiz-actions">${answered ? '<button class="button primary" type="button" data-action="advance">Siguiente <span aria-hidden="true">→</span> <kbd>Enter</kbd></button>' : `<button class="button primary" type="button" data-action="confirm" ${selected < 0 ? "disabled" : ""}>Confirmar <kbd>Enter</kbd></button>`}<button class="text-link" type="button" data-action="close">Volver a las preguntas</button></div></div>`;
    typeset();
  }

  function typeset() {
    window.MathJax?.typesetPromise?.([app]);
  }

  function choose(optionIndex) {
    if (phase !== "answer" || optionIndex < 0 || optionIndex > 3) return;
    selected = optionIndex;
    render();
    requestAnimationFrame(() => app.querySelector(`[data-option="${optionIndex}"]`)?.focus());
  }

  function confirm() {
    if (phase !== "answer" || selected < 0) return;
    if (questions[index].options[selected].correct) score += 1;
    else wrong.push(questions[index]);
    phase = "feedback";
    render();
    app.querySelector("[data-action='advance']")?.focus();
  }

  function advance() {
    if (phase !== "feedback") return;
    index += 1;
    selected = -1;
    phase = index >= questions.length ? "result" : "answer";
    render();
    if (phase === "answer") requestAnimationFrame(() => app.querySelector("[data-option='0']")?.focus());
    else app.querySelector("[data-action='restart']")?.focus();
  }

  app.addEventListener("click", (event) => {
    const option = event.target.closest("[data-option]");
    if (option) return choose(Number(option.dataset.option));
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "confirm") confirm();
    if (action === "advance") advance();
    if (action === "restart") start();
    if (action === "retry-wrong") start(wrong);
    if (action === "close") {
      app.hidden = true;
      startButton.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (app.hidden || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target;
    if (!app.contains(target)) return;
    if (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
    if (target.closest("[data-action='close']")) return;
    if (/^[1-4]$/.test(event.key) && phase === "answer") {
      event.preventDefault();
      choose(Number(event.key) - 1);
    } else if (event.key === "Enter" && phase === "answer" && selected >= 0) {
      event.preventDefault();
      confirm();
    } else if (event.key === "Enter" && phase === "feedback") {
      event.preventDefault();
      advance();
    }
  });

  startButton.addEventListener("click", () => start());
})();
