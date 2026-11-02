// Desarrollos · formato de la hoja de Andrade: consigna + dibujo esquemático + solo la lógica matemática.
// math: líneas en TeX (MathJax). res: índices de las líneas de resultado (van recuadradas).
// prio: "max" (lo nombró el profe o es lo último que dio) | "alta" | "media"
// Las flechas usan los marcadores #aF (negro), #aE (campo E), #aB (campo B), #aG (geometría) definidos en index.html.

const R = String.raw;

window.BLOQUES = [
  {id:"bs",  nombre:"Biot–Savart"},
  {id:"amp", nombre:"Ley de Ampère"},
  {id:"cap", nombre:"Capacitores"},
  {id:"pot", nombre:"Potencial electrostático"},
  {id:"gau", nombre:"Ley de Gauss"},
  {id:"ohm", nombre:"Ley de Ohm"}
];

window.DESARROLLOS = [
// ======================= BIOT–SAVART =======================
{id:"D21", bloque:"bs", prio:"max", dif:2,
 titulo:"Campo magnético de un segmento de corriente rectilíneo finito (ley de Biot–Savart)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Segmento de i a f, punto A abajo, perpendicular rho, elemento dl, vector r y ángulos">
  <line x1="40" y1="60" x2="290" y2="60" class="s-th"/>
  <line x1="50" y1="42" x2="90" y2="42" class="s-ln" marker-end="url(#aF)"/><text x="62" y="34" class="t-i">I</text>
  <circle cx="40" cy="60" r="3.5" class="f-fg"/><text x="34" y="82" class="t">i</text>
  <circle cx="290" cy="60" r="3.5" class="f-fg"/><text x="286" y="82" class="t">f</text>
  <line x1="40" y1="60" x2="120" y2="190" class="s-dash"/>
  <line x1="290" y1="60" x2="120" y2="190" class="s-dash"/>
  <line x1="120" y1="60" x2="120" y2="190" class="s-ln" style="stroke-dasharray:2 3"/>
  <path d="M120,72 H132 V60" class="s-ln" style="stroke-width:1"/>
  <text x="104" y="118" class="t-i">ρ</text>
  <line x1="232" y1="60" x2="123" y2="186" class="s-g" marker-end="url(#aG)"/>
  <text x="190" y="126" class="t-g">r</text>
  <line x1="218" y1="60" x2="250" y2="60" class="s-g" marker-end="url(#aG)" style="stroke-width:3.2"/>
  <text x="240" y="52" class="t-g">dl</text>
  <path d="M120,56 V26 M232,56 V26" class="s-ln" style="stroke-width:1;stroke-dasharray:2 2"/>
  <line x1="120" y1="30" x2="232" y2="30" class="s-ln" style="stroke-width:1" marker-start="url(#aF)" marker-end="url(#aF)"/><text x="172" y="24" class="t-i" style="font-size:13px">l</text>
  <path d="M120,154 A36,36 0 0 1 143.5,162.7" class="s-ln"/>
  <text x="128" y="148" class="t-i" style="font-size:13px">θ</text>
  <path d="M120,130 A60,60 0 0 0 88.4,139" class="s-ln" style="stroke-dasharray:3 2"/>
  <text x="70" y="134" class="t-i" style="font-size:13px">θ<tspan dy="3" style="font-size:9px">i</tspan></text>
  <path d="M120,116 A74,74 0 0 1 176.5,142.1" class="s-ln" style="stroke-dasharray:3 2"/>
  <text x="180" y="150" class="t-i" style="font-size:13px">θ<tspan dy="3" style="font-size:9px">f</tspan></text>
  <circle cx="120" cy="194" r="4" class="f-fg"/><text x="104" y="212" class="t">A</text>
  <circle cx="158" cy="210" r="9" class="s-b"/><path d="M151.6,203.6 L164.4,216.4 M164.4,203.6 L151.6,216.4" class="s-b"/>
  <text x="172" y="215" class="t-b">B</text><text x="186" y="215" class="t-s">entra (⊗)</text>
 </svg>`,
 math:[
  R`d\vec B=\frac{\mu_0 I}{4\pi}\,\frac{d\vec l\times\hat r}{r^2}`,
  R`|d\vec l\times\hat r| = dl\,\operatorname{sen}(90^\circ+\theta)=dl\,\cos\theta`,
  R`\cos\theta=\frac{\rho}{r}\ \Rightarrow\ \frac{1}{r^2}=\frac{\cos^2\theta}{\rho^2}`,
  R`l=\rho\tan\theta\ \Rightarrow\ dl=\frac{\rho\,d\theta}{\cos^2\theta}`,
  R`\begin{aligned}dB&=\frac{\mu_0 I}{4\pi}\,\frac{\rho\,d\theta}{\cos^2\theta}\,\cos\theta\,\frac{\cos^2\theta}{\rho^2}\\&=\frac{\mu_0 I}{4\pi\rho}\cos\theta\,d\theta\end{aligned}`,
  R`\begin{aligned}B_A&=\frac{\mu_0 I}{4\pi\rho}\int_{\theta_i}^{\theta_f}\cos\theta\,d\theta\\&=\frac{\mu_0 I}{4\pi\rho}\,\big|\operatorname{sen}\theta_f-\operatorname{sen}\theta_i\big|\end{aligned}`
 ], res:[5],
 why:[
  "<b>Símbolos:</b> dB aporte de un tramito dl al campo en A [T]; I corriente [A]; r̂ versor del tramito hacia A; r distancia [m]; μ₀ = 4π·10⁻⁷ T·m/A; ρ distancia perpendicular de A al conductor [m].",
  "<b>Todo se pasa a θ</b>, medido desde la perpendicular ρ: así la integral queda en una variable.",
  "<b>Producto vectorial:</b> el ángulo entre dl y r̂ es 90° ± θ, y sen(90° ± θ) = cos θ.",
  "<b>Triángulo rectángulo</b> de catetos ρ y l: da r y dl en función de θ.",
  "<b>Al reemplazar</b> se cancelan los cos²θ; sobreviven un cos θ y un ρ. La integral de cos θ es sen θ.",
  "<b>Sentido:</b> mano derecha. Con I hacia la derecha y A abajo, B entra a la hoja."
 ],
 trap:"En tu apunte aparece un signo menos adelante: ahí r va de A al conductor. Es equivalente. Usá una sola convención y que el dibujo coincida con la fórmula. En la hoja del profe y en la carpeta de 2019 la distancia perpendicular se llama a (no ρ): B = μ₀I/(4πa)·|sen θf − sen θi|. Es lo mismo; usá una sola letra y que coincida con tu dibujo."},

{id:"D22", bloque:"bs", prio:"max", dif:1,
 titulo:"Campo magnético de una corriente rectilínea infinita",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Hilo vertical con corriente hacia arriba y líneas de campo circulares">
  <path d="M70,82 A90,22 0 0 1 250,82" class="s-b" style="opacity:.45"/>
  <path d="M100,152 A60,15 0 0 1 220,152" class="s-b" style="opacity:.45"/>
  <line x1="160" y1="14" x2="160" y2="226" class="s-th"/>
  <path d="M70,82 A90,22 0 0 0 250,82" class="s-b"/>
  <path d="M100,152 A60,15 0 0 0 220,152" class="s-b"/>
  <line x1="148" y1="104" x2="170" y2="104" class="s-b" marker-end="url(#aB)"/>
  <line x1="150" y1="167" x2="170" y2="167" class="s-b" marker-end="url(#aB)"/>
  <line x1="178" y1="60" x2="178" y2="26" class="s-ln" marker-end="url(#aF)"/><text x="184" y="40" class="t-i">I</text>
  <line x1="160" y1="152" x2="220" y2="152" class="s-dash"/><text x="182" y="146" class="t-i">ρ</text>
  <text x="228" y="174" class="t-b">B</text><text x="242" y="174" class="t-s">tangente</text>
  <text x="226" y="52" class="t-s">líneas cerradas</text>
 </svg>`,
 math:[
  R`B=\frac{\mu_0 I}{4\pi\rho}\,\big|\operatorname{sen}\theta_f-\operatorname{sen}\theta_i\big|`,
  R`\theta_i\to-90^\circ \qquad \theta_f\to+90^\circ`,
  R`\operatorname{sen}90^\circ-\operatorname{sen}(-90^\circ)=1-(-1)=2`,
  R`B=\frac{\mu_0 I}{4\pi\rho}\cdot 2=\frac{\mu_0 I}{2\pi\rho}`
 ], res:[3],
 why:[
  "<b>Caso límite de D21:</b> si los extremos se van al infinito, desde A se ven a ±90° de la perpendicular.",
  "<b>Dibujo:</b> las líneas de B son circunferencias concéntricas al hilo, en planos perpendiculares a él. B es tangente. Sentido: pulgar en I, los dedos dan el giro.",
  "<b>Dependencia:</b> B ∝ I y B ∝ 1/ρ (no 1/ρ²). Es el ejemplo de desarrollo corto que dio el profe."
 ]},

{id:"D23", bloque:"bs", prio:"max", dif:1,
 titulo:"Punto sobre la mediatriz del segmento: θi y θf iguales en módulo",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Segmento con el punto A sobre la mediatriz y ángulos simétricos">
  <line x1="160" y1="22" x2="160" y2="196" class="s-dash"/>
  <text x="166" y="32" class="t-s">mediatriz</text>
  <line x1="60" y1="60" x2="260" y2="60" class="s-th"/>
  <line x1="76" y1="40" x2="116" y2="40" class="s-ln" marker-end="url(#aF)"/><text x="88" y="32" class="t-i">I</text>
  <circle cx="60" cy="60" r="3.5" class="f-fg"/><circle cx="260" cy="60" r="3.5" class="f-fg"/>
  <line x1="160" y1="180" x2="60" y2="60" class="s-g"/>
  <line x1="160" y1="180" x2="260" y2="60" class="s-g"/>
  <path d="M160,140 A40,40 0 0 0 134.4,149.3" class="s-ln"/>
  <path d="M160,140 A40,40 0 0 1 185.6,149.3" class="s-ln"/>
  <text x="154" y="132" class="t-i" style="font-size:13px" text-anchor="end">−θ</text>
  <text x="166" y="132" class="t-i" style="font-size:13px">+θ</text>
  <text x="144" y="104" class="t-i">ρ</text>
  <circle cx="160" cy="184" r="4" class="f-fg"/><text x="170" y="198" class="t">A</text>
  <text x="160" y="218" class="t-s" text-anchor="middle">cada mitad aporta lo mismo:</text><text x="160" y="232" class="t-s" text-anchor="middle">calculo una y duplico</text>
 </svg>`,
 math:[
  R`\theta_i=-\theta \qquad \theta_f=+\theta`,
  R`\operatorname{sen}\theta-\operatorname{sen}(-\theta)=2\operatorname{sen}\theta`,
  R`B=\frac{\mu_0 I}{4\pi\rho}\,2\operatorname{sen}\theta=\frac{\mu_0 I}{2\pi\rho}\operatorname{sen}\theta`
 ], res:[2],
 why:[
  "<b>Es la pregunta que dijo el profe.</b> En dos renglones: \"el punto está sobre la mediatriz: simetría respecto de la perpendicular ρ. Se calcula una mitad y se duplica\".",
  "<b>Repreguntas:</b> si A está sobre la prolongación del conductor, dl ∥ r̂ y B = 0. Si θ → 90°, vuelve al hilo infinito."
 ],
 trap:"La nota del profe es escueta; esta es la interpretación de tu apunte. Confirmala con un compañero si podés."},

{id:"D26", bloque:"bs", prio:"alta", dif:2,
 titulo:"Campo magnético en el eje de una espira circular",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Espira circular de radio R vista en perspectiva, punto P sobre el eje a distancia z, vector r, ángulo alfa en P entre el eje y r, y componentes de dB">
  <line x1="16" y1="120" x2="304" y2="120" class="s-dash"/><text x="18" y="112" class="t-s">eje</text>
  <ellipse cx="90" cy="120" rx="22" ry="70" class="s-th"/>
  <path d="M112,128 L112.6,140" class="s-ln" marker-end="url(#aF)"/><text x="118" y="146" class="t-i">I</text>
  <circle cx="90" cy="120" r="2.5" class="f-fg"/>
  <line x1="90" y1="120" x2="90" y2="57" class="s-ln" style="stroke-width:1"/><text x="76" y="94" class="t-i">R</text>
  <circle cx="90" cy="50" r="7" class="s-g"/><circle cx="90" cy="50" r="2.2" class="f-g"/><text x="56" y="44" class="t-g">dl</text><text x="50" y="28" class="t-s">(sale)</text>
  <line x1="96.3" y1="52.9" x2="235" y2="117.5" class="s-g" marker-end="url(#aG)"/><text x="158" y="74" class="t-g">r</text>
  <circle cx="240" cy="120" r="4" class="f-fg"/><text x="230" y="142" class="t">P</text>
  <path d="M206,120 A34,34 0 0 1 209.2,105.6" class="s-ln" style="stroke-width:1.3"/>
  <text x="190" y="116" class="t-i" style="font-size:13px">α</text>
  <line x1="240" y1="120" x2="261" y2="75" class="s-b" marker-end="url(#aB)"/><text x="264" y="72" class="t-b">dB</text>
  <line x1="240" y1="120" x2="261" y2="120" class="s-b" marker-end="url(#aB)" style="opacity:.7"/>
  <line x1="261" y1="75" x2="261" y2="118" class="s-dash"/>
  <text x="250" y="142" class="t-s">dB sen α</text>
  <path d="M90,196 V212 M240,196 V212" class="s-ln" style="stroke-width:1;stroke-dasharray:2 2"/>
  <line x1="90" y1="204" x2="240" y2="204" class="s-ln" style="stroke-width:1" marker-start="url(#aF)" marker-end="url(#aF)"/><text x="160" y="200" class="t-i">z</text>
  <text x="160" y="230" class="t-s" text-anchor="middle">las componentes ⊥ al eje se anulan de a pares</text>
 </svg>`,
 math:[
  R`dB=\frac{\mu_0 I}{4\pi}\,\frac{dl\,\operatorname{sen}90^\circ}{r^2}=\frac{\mu_0 I}{4\pi}\,\frac{dl}{r^2}`,
  R`\begin{aligned}&dB_\perp\ \text{se anulan de a pares}\\&dB_z=dB\,\operatorname{sen}\alpha,\quad \operatorname{sen}\alpha=\frac{R}{r}\end{aligned}`,
  R`\begin{aligned}B&=\oint dB_z=\frac{\mu_0 I}{4\pi}\,\frac{R}{r^3}\oint dl\\&=\frac{\mu_0 I}{4\pi}\,\frac{R}{r^3}\,2\pi R\end{aligned}`,
  R`B=\frac{\mu_0 I\,R^2}{2\,(R^2+z^2)^{3/2}}`,
  R`z=0\ \Rightarrow\ B_{centro}=\frac{\mu_0 I}{2R}`
 ], res:[3,4],
 why:[
  "<b>Símbolos (notación de Andrade):</b> R radio de la espira [m]; z distancia del centro a P sobre el eje [m]; r = √(R² + z²) distancia de cada dl a P; α ángulo en P entre el eje y r.",
  "<b>dl ⊥ r</b> en todos los puntos de la espira: sen 90° = 1, y todos los dl están a la misma distancia r.",
  "<b>Simetría:</b> el dl diametralmente opuesto da una componente perpendicular al eje igual y opuesta. Solo sobrevive la axial.",
  "<b>dB_z = dB sen α</b>: dB es perpendicular a r, así que forma con el eje el ángulo 90° − α; su proyección sobre el eje es dB·cos(90° − α) = dB·sen α, con sen α = R/r (cateto opuesto R, hipotenusa r).",
  "<b>Lejos</b> (z ≫ R): B ≈ μ₀IR²/(2z³), cae como un dipolo."
 ]},

{id:"Dcruz", bloque:"bs", prio:"media", dif:3,
 titulo:"Planteo: campo en el centro de una espira formada por segmentos (espira en cruz)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Espira en forma de cruz de cinco cuadrados de lado a, con el centro O y las distancias a los lados">
  <path d="M140,40 H180 V80 H220 V120 H180 V160 H140 V120 H100 V80 H140 Z" class="s-th"/>
  <line x1="150" y1="40" x2="172" y2="40" class="s-ln" marker-end="url(#aF)"/><text x="150" y="32" class="t-i">I</text>
  <line x1="220" y1="90" x2="220" y2="112" class="s-ln" marker-end="url(#aF)"/>
  <circle cx="160" cy="100" r="3.5" class="f-fg"/><text x="146" y="118" class="t">O</text>
  <line x1="160" y1="100" x2="160" y2="40" class="s-dash"/><text x="160" y="66" class="t-i halo" style="font-size:12px" text-anchor="middle">3a/2</text>
  <line x1="160" y1="100" x2="180" y2="100" class="s-dash"/>
  <text x="186" y="104" class="t-i" style="font-size:12px">a/2</text>
  <path d="M140,166 V174 M180,166 V174" class="s-ln" style="stroke-width:1"/><line x1="140" y1="170" x2="180" y2="170" class="s-ln" style="stroke-width:1"/><text x="156" y="187" class="t-i">a</text>
  <circle cx="262" cy="140" r="9" class="s-b"/><path d="M255.6,133.6 L268.4,146.4 M268.4,133.6 L255.6,146.4" class="s-b"/>
  <text x="262" y="166" class="t-s" text-anchor="middle"><tspan class="t-b" style="font-size:13px">B</tspan> en O entra</text><text x="262" y="180" class="t-s" text-anchor="middle">(todos suman)</text>
  <text x="18" y="214" class="t-s">4 lados de punta (ρ = 3a/2, simétricos)</text>
  <text x="18" y="230" class="t-s">8 lados de costado (ρ = a/2, no simétricos)</text>
 </svg>`,
 math:[
  R`\begin{aligned}&\vec B_O=\sum_{lados}\vec B_{segmento}\\&(\text{todos en el mismo sentido})\end{aligned}`,
  R`\begin{aligned}&\text{punta: } \rho=\tfrac{3a}{2},\ \operatorname{sen}\theta=\tfrac{1}{\sqrt{10}}\\&\Rightarrow\ B_1=\frac{\mu_0 I}{2\pi\rho}\operatorname{sen}\theta\end{aligned}`,
  R`\begin{aligned}&\text{costado: } \rho=\tfrac{a}{2},\ \theta_i=45^\circ,\ \operatorname{sen}\theta_f=\tfrac{3}{\sqrt{10}}\\&\Rightarrow\ B_2=\frac{\mu_0 I}{4\pi\rho}\big|\operatorname{sen}\theta_f-\operatorname{sen}\theta_i\big|\end{aligned}`,
  R`B_O=4\,B_1+8\,B_2\approx1{,}39\,\frac{\mu_0 I}{\pi a}`
 ], res:[3],
 why:[
  "<b>Superposición:</b> el campo en O es la suma del campo de cada segmento, cada uno con la fórmula de D21.",
  "<b>Mismo sentido:</b> O queda del mismo lado de todos los lados recorridos, así que todos los aportes salen igual por la mano derecha y se suman en módulo.",
  "<b>Simetría para agrupar:</b> los 4 lados de punta son iguales entre sí (O sobre su mediatriz), y los 8 de costado también.",
  "Es probable que no pida la cuenta completa (\"no van los complejos\"): lo que importa es el planteo."
 ],
 trap:"Este planteo sale del dibujo que estaba en tu apunte junto a la nota de θi = θf. El profe no lo nombró como desarrollo."},

// ======================= AMPÈRE =======================
{id:"D25", bloque:"amp", prio:"alta", dif:2,
 titulo:"Campo magnético de un alambre largo de radio R (ley de Ampère)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Corte de un alambre de radio R con corriente saliente y dos curvas amperianas, una adentro y otra afuera">
  <circle cx="130" cy="120" r="60" class="f-soft"/><circle cx="130" cy="120" r="60" class="s-ln"/>
  <circle cx="130" cy="120" r="34" class="s-dash"/>
  <circle cx="130" cy="120" r="96" class="s-dash"/>
  <circle cx="130" cy="120" r="7" class="s-ln"/><circle cx="130" cy="120" r="2" class="f-fg"/>
  <text x="140" y="114" class="t-i halo" style="font-size:12px">i (sale)</text>
  <line x1="130" y1="120" x2="172" y2="162" class="s-ln" style="stroke-width:1"/><text x="160" y="146" class="t-i">R</text>
  <line x1="130" y1="120" x2="106" y2="96" class="s-ln" style="stroke-width:1"/><text x="104" y="114" class="t-i" style="font-size:12px">r</text>
  <line x1="130" y1="86" x2="112" y2="87" class="s-b" marker-end="url(#aB)"/>
  <line x1="130" y1="24" x2="104" y2="26" class="s-b" marker-end="url(#aB)"/>
  <text x="96" y="20" class="t-b">B</text>
  <text x="236" y="70" class="t-s">r &lt; R: encierra</text><text x="236" y="84" class="t-s">parte de i</text>
  <text x="236" y="190" class="t-s">r ≥ R: encierra</text><text x="236" y="204" class="t-s">toda la i</text>
 </svg>`,
 math:[
  R`\oint\vec B\cdot d\vec l=B\,2\pi r=\mu_0\,i_{enc}`,
  R`r\ge R:\quad i_{enc}=i\ \Rightarrow\ B=\frac{\mu_0 i}{2\pi r}`,
  R`r<R:\quad i_{enc}=i\,\frac{\pi r^2}{\pi R^2}`,
  R`B\,2\pi r=\mu_0\,i\,\frac{r^2}{R^2}\ \Rightarrow\ B=\frac{\mu_0 i}{2\pi R^2}\,r`
 ], res:[1,3],
 why:[
  "<b>Ley de Ampère:</b> la circulación de B sobre una curva cerrada es μ₀ por la corriente que la atraviesa.",
  "<b>Simetría cilíndrica:</b> las líneas de B son circunferencias concéntricas y |B| depende solo de r. Curva amperiana: circunferencia de radio r.",
  "<b>Afuera</b> el alambre se ve como un hilo: misma fórmula que D22.",
  "<b>Adentro</b>, con corriente uniforme, la encerrada es proporcional al área: B crece lineal desde 0 en el centro.",
  "Es el análogo exacto de la esfera con ρ uniforme en Gauss (D08)."
 ]},

{id:"D27", bloque:"amp", prio:"alta", dif:1,
 titulo:"Campo magnético de un toroide (ley de Ampère)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Toroide visto desde arriba con su bobinado y una curva amperiana dentro del núcleo">
  <circle cx="160" cy="120" r="92" class="s-ln"/>
  <circle cx="160" cy="120" r="52" class="s-ln"/>
  <g class="s-ln" style="stroke-width:1.2">
   <line x1="212" y1="120" x2="252" y2="120"/><line x1="205" y1="146" x2="240" y2="166"/><line x1="186" y1="165" x2="206" y2="200"/>
   <line x1="160" y1="172" x2="160" y2="212"/><line x1="134" y1="165" x2="114" y2="200"/><line x1="115" y1="146" x2="80" y2="166"/>
   <line x1="108" y1="120" x2="68" y2="120"/><line x1="115" y1="94" x2="80" y2="74"/><line x1="134" y1="75" x2="114" y2="40"/>
   <line x1="160" y1="68" x2="160" y2="28"/><line x1="186" y1="75" x2="206" y2="40"/><line x1="205" y1="94" x2="240" y2="74"/>
  </g>
  <circle cx="160" cy="120" r="72" class="s-dash" style="stroke:var(--b)"/>
  <line x1="160" y1="120" x2="211" y2="69" class="s-ln" style="stroke-width:1"/><text x="186" y="104" class="t-i" style="font-size:13px">r</text>
  <line x1="150" y1="48" x2="172" y2="48" class="s-b" marker-end="url(#aB)"/><text x="176" y="44" class="t-b">B</text>
  <text x="306" y="22" class="t-s" text-anchor="end">N vueltas,</text><text x="306" y="36" class="t-s" text-anchor="end">corriente i</text>
  <text x="160" y="146" class="t-s" text-anchor="middle">B = 0</text>
  <text x="306" y="226" class="t-s" text-anchor="end">B = 0 afuera</text>
 </svg>`,
 math:[
  R`\oint\vec B\cdot d\vec l=B\,2\pi r=\mu_0\,i_{enc}`,
  R`i_{enc}=N\,i`,
  R`B=\frac{\mu_0 N i}{2\pi r}\qquad(\text{dentro del núcleo})`,
  R`\text{afuera: } i_{enc}=Ni-Ni=0\ \Rightarrow\ B=0`
 ], res:[2,3],
 why:[
  "<b>Curva amperiana:</b> circunferencia de radio r dentro del núcleo. Por simetría B es tangente y constante sobre ella.",
  "<b>La curva la atraviesan las N vueltas</b>, cada una con corriente i.",
  "<b>Afuera:</b> por el hueco central no se encierra corriente; por fuera de todo se encierra Ni hacia un lado y Ni hacia el otro.",
  "<b>No es uniforme:</b> B ∝ 1/r dentro del núcleo."
 ],
 trap:"En tu hoja falta la N. Sin ella sería el campo de un solo hilo."},

{id:"D28", bloque:"amp", prio:"alta", dif:1,
 titulo:"Campo magnético de un solenoide largo (ley de Ampère)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Solenoide largo con campo uniforme adentro y curva amperiana rectangular">
  <g class="s-ln">
   <ellipse cx="50" cy="100" rx="8" ry="44"/><ellipse cx="78" cy="100" rx="8" ry="44"/><ellipse cx="106" cy="100" rx="8" ry="44"/><ellipse cx="134" cy="100" rx="8" ry="44"/>
   <ellipse cx="162" cy="100" rx="8" ry="44"/><ellipse cx="190" cy="100" rx="8" ry="44"/><ellipse cx="218" cy="100" rx="8" ry="44"/><ellipse cx="246" cy="100" rx="8" ry="44"/><ellipse cx="274" cy="100" rx="8" ry="44"/>
  </g>
  <line x1="40" y1="88" x2="292" y2="88" class="s-b" marker-end="url(#aB)"/>
  <line x1="40" y1="112" x2="292" y2="112" class="s-b" marker-end="url(#aB)"/>
  <text x="296" y="104" class="t-b">B</text>
  <rect x="120" y="100" width="100" height="94" class="s-dash" style="stroke:var(--g)"/>
  <line x1="140" y1="100" x2="196" y2="100" class="s-g" marker-end="url(#aG)"/>
  <path d="M120,204 V210 M220,204 V210" class="s-ln" style="stroke-width:1"/><line x1="120" y1="207" x2="220" y2="207" class="s-ln" style="stroke-width:1"/><text x="166" y="224" class="t-i">l</text>
  <text x="226" y="186" class="t-s">B ≈ 0 afuera</text>
  <text x="18" y="168" class="t-s">n = N/l vueltas</text><text x="18" y="182" class="t-s">por metro</text>
 </svg>`,
 math:[
  R`\begin{aligned}\oint\vec B\cdot d\vec l&=\underbrace{B\,l}_{adentro}+\underbrace{0}_{laterales}+\underbrace{0}_{afuera}\\&=\mu_0\,i_{enc}\end{aligned}`,
  R`i_{enc}=N\,i`,
  R`B\,l=\mu_0 N i\ \Rightarrow\ B=\mu_0\,\frac{N}{l}\,i=\mu_0\,n\,i`
 ], res:[2],
 why:[
  "<b>Solenoide largo</b> (largo ≫ radio): adentro B uniforme y paralelo al eje; afuera B ≈ 0.",
  "<b>Curva amperiana:</b> rectángulo con un lado de largo l adentro. Los laterales son ⊥ a B (no aportan) y el de afuera tiene B = 0.",
  "<b>n = N/l</b>: vueltas por unidad de longitud [1/m]."
 ],
 trap:"En tu hoja la primera línea dice B = μ₀iN: le falta dividir por una longitud (las unidades no cierran). Ojo con la notación: en la carpeta de Andrade N es vueltas por unidad de longitud y n el número total, al revés que acá (B = μ₀NI = μ₀(n/l)I). Definí siempre tu letra en la hoja."},

// ======================= CAPACITORES =======================
{id:"D10", bloque:"cap", prio:"alta", dif:2,
 titulo:"Capacidad: por qué depende solo de la geometría",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Dos conductores con cargas opuestas, superficie gaussiana alrededor de uno y camino de uno a otro">
  <ellipse cx="88" cy="120" rx="64" ry="82" class="s-dash"/>
  <ellipse cx="88" cy="120" rx="42" ry="58" class="f-soft"/><ellipse cx="88" cy="120" rx="42" ry="58" class="s-ln"/>
  <path d="M232,72 C276,70 284,116 270,150 C258,180 214,182 204,150 C194,118 200,74 232,72 Z" class="f-soft"/>
  <path d="M232,72 C276,70 284,116 270,150 C258,180 214,182 204,150 C194,118 200,74 232,72 Z" class="s-ln"/>
  <text x="80" y="124" class="t" style="font-weight:700">+Q</text><text x="226" y="128" class="t" style="font-weight:700">−Q</text>
  <text x="86" y="78" class="t-s">1</text><text x="236" y="96" class="t-s">2</text>
  <line x1="132" y1="98" x2="196" y2="98" class="s-e" marker-end="url(#aE)"/>
  <line x1="132" y1="142" x2="196" y2="142" class="s-e" marker-end="url(#aE)"/>
  <text x="158" y="90" class="t-e">E</text>
  <path d="M130,120 Q164,112 198,120" class="s-g" marker-end="url(#aG)"/><text x="154" y="134" class="t-g" style="font-size:12px">dl</text>
  <text x="34" y="222" class="t-s">sup. gaussiana</text>
 </svg>`,
 math:[
  R`\frac{Q}{\varepsilon_0}=\oint\vec E\cdot d\vec S`,
  R`V=\int_1^2\vec E\cdot d\vec l`,
  R`Q\to 2Q\ \Rightarrow\ \vec E\to2\vec E\ \Rightarrow\ V\to2V`,
  R`\begin{aligned}&C=\frac{Q}{V}=\text{cte}\quad(\text{solo geometría y medio})\\&[F]=\frac{C}{V}\end{aligned}`
 ], res:[3],
 why:[
  "<b>Q sale de Gauss</b> sobre una superficie que encierra un conductor; <b>V sale de la circulación</b> de uno a otro.",
  "<b>Argumento del profe:</b> en las dos integrales E aparece en forma lineal. Si se duplica Q, se duplican E y V: el cociente no cambia.",
  "<b>Conclusión:</b> C depende solo de la forma de los conductores, la separación y el material entre ellos."
 ]},

{id:"D11", bloque:"cap", prio:"max", dif:1,
 titulo:"Capacidad de un capacitor de placas planas paralelas",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Dos placas paralelas con cargas opuestas, campo uniforme y superficie gaussiana alrededor de la placa positiva">
  <rect x="96" y="34" width="10" height="160" class="f-fg"/>
  <rect x="216" y="34" width="10" height="160" class="f-fg"/>
  <g class="t" style="font-size:14px"><text x="110" y="56">+</text><text x="110" y="96">+</text><text x="110" y="136">+</text><text x="110" y="176">+</text>
  <text x="204" y="56">−</text><text x="204" y="96">−</text><text x="204" y="136">−</text><text x="204" y="176">−</text></g>
  <line x1="124" y1="66" x2="198" y2="66" class="s-e" marker-end="url(#aE)"/>
  <line x1="124" y1="106" x2="198" y2="106" class="s-e" marker-end="url(#aE)"/>
  <line x1="124" y1="146" x2="198" y2="146" class="s-e" marker-end="url(#aE)"/>
  <text x="156" y="98" class="t-e">E</text>
  <rect x="80" y="40" width="66" height="144" rx="4" class="s-dash"/>
  <text x="40" y="38" class="t-s">Gauss</text>
  <line x1="128" y1="172" x2="196" y2="172" class="s-g" marker-end="url(#aG)"/><text x="154" y="167" class="t-g" style="font-size:12px">dl</text>
  <text x="84" y="26" class="t">+Q</text><text x="212" y="26" class="t">−Q</text>
  <line x1="101" y1="210" x2="221" y2="210" class="s-ln" style="stroke-width:1" marker-start="url(#aF)" marker-end="url(#aF)"/><text x="156" y="228" class="t-i">d</text>
  <text x="236" y="114" class="t-s">área A</text>
 </svg>`,
 math:[
  R`\frac{Q}{\varepsilon_0}=\oint\vec E\cdot d\vec S=E\,A\ \Rightarrow\ Q=\varepsilon_0 E A`,
  R`V=\int_{+}^{-}\vec E\cdot d\vec l=E\int_0^d dl=E\,d`,
  R`C=\frac{Q}{V}=\frac{\varepsilon_0 E A}{E\,d}`,
  R`C=\frac{\varepsilon_0 A}{d}`
 ], res:[3],
 why:[
  "<b>Hipótesis:</b> A mucho mayor que d. Afuera E = 0 y adentro E es uniforme.",
  "<b>Q sale de Gauss</b> con una superficie que encierra una placa: solo hay flujo por la cara de adentro.",
  "<b>V sale de la circulación</b> de una placa a la otra: E ∥ dl y E constante sale de la integral.",
  "<b>E se cancela:</b> C depende solo de A y d. Más área, más C; más separación, menos C.",
  "<b>Símbolos:</b> ε₀ = 8,85·10⁻¹² F/m; A área de una placa [m²]; d separación [m]."
 ]},

{id:"D12", bloque:"cap", prio:"max", dif:1,
 titulo:"Capacidad equivalente de capacitores en paralelo y en serie",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Tres capacitores en paralelo y tres en serie">
  <text x="14" y="22" class="t" style="font-weight:700">Paralelo</text>
  <line x1="24" y1="44" x2="150" y2="44" class="s-ln"/><line x1="24" y1="128" x2="150" y2="128" class="s-ln"/>
  <circle cx="24" cy="44" r="3" class="f-fg"/><circle cx="24" cy="128" r="3" class="f-fg"/>
  <text x="10" y="40" class="t">a</text><text x="10" y="142" class="t">b</text>
  <g class="s-ln"><path d="M52,44 V80 M40,80 H64 M40,90 H64 M52,90 V128"/><path d="M92,44 V80 M80,80 H104 M80,90 H104 M92,90 V128"/><path d="M132,44 V80 M120,80 H144 M120,90 H144 M132,90 V128"/></g>
  <text x="64" y="74" class="t-s">C₁</text><text x="104" y="74" class="t-s">C₂</text><text x="144" y="74" class="t-s">C₃</text>
  <text x="26" y="160" class="t-s">misma V, se suman Q</text>
  <text x="178" y="22" class="t" style="font-weight:700">Serie</text>
  <path d="M180,92 H198 M198,76 V108 M206,76 V108 M206,92 H230 M230,76 V108 M238,76 V108 M238,92 H262 M262,76 V108 M270,76 V108 M270,92 H300" class="s-ln"/>
  <circle cx="180" cy="92" r="3" class="f-fg"/><circle cx="300" cy="92" r="3" class="f-fg"/>
  <text x="174" y="118" class="t">a</text><text x="296" y="118" class="t">b</text>
  <text x="194" y="70" class="t-s">C₁</text><text x="226" y="70" class="t-s">C₂</text><text x="258" y="70" class="t-s">C₃</text>
  <text x="194" y="126" class="t-s">V₁</text><text x="226" y="126" class="t-s">V₂</text><text x="258" y="126" class="t-s">V₃</text>
  <text x="182" y="160" class="t-s">misma Q, se suman V</text>
  <text x="24" y="206" class="t-s">Paralelo ≈ sumar área · Serie ≈ sumar separación</text>
 </svg>`,
 math:[
  R`\begin{aligned}&\textbf{Paralelo:}\\&V_1=V_2=V_3=V,\quad Q=Q_1+Q_2+Q_3\end{aligned}`,
  R`\begin{aligned}&C_{eq}=\frac{Q}{V}=\frac{C_1V+C_2V+C_3V}{V}\\&\Rightarrow\ C_{eq}=C_1+C_2+C_3\end{aligned}`,
  R`\begin{aligned}&\textbf{Serie:}\\&Q_1=Q_2=Q_3=Q,\quad V=V_1+V_2+V_3\end{aligned}`,
  R`\begin{aligned}&\frac{1}{C_{eq}}=\frac{V}{Q}=\frac{V_1}{Q}+\frac{V_2}{Q}+\frac{V_3}{Q}\\&\Rightarrow\ \frac{1}{C_{eq}}=\frac{1}{C_1}+\frac{1}{C_2}+\frac{1}{C_3}\end{aligned}`
 ], res:[1,3],
 why:[
  "<b>Paralelo:</b> todos comparten los nodos a y b, así que tienen la misma V. La carga total es la suma. C_eq es mayor que la mayor.",
  "<b>Serie:</b> las placas intermedias están aisladas y neutras: la carga que se va de una aparece en la otra, por eso todas tienen la misma Q. Las tensiones se suman porque ∮E·dl = 0.",
  "<b>Paso clave de serie:</b> invertir C = Q/(V₁+V₂+V₃); cada Vᵢ/Q = 1/Cᵢ."
 ],
 trap:"No lo cruces con resistencias: ahí es al revés."},

{id:"D14", bloque:"cap", prio:"alta", dif:2,
 titulo:"Energía almacenada en un capacitor y densidad de energía",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Gráfico de tensión en función de la carga: recta desde el origen y área triangular sombreada">
  <path d="M50,196 L262,60 L262,196 Z" class="f-soft"/>
  <line x1="50" y1="196" x2="292" y2="196" class="s-ln" marker-end="url(#aF)"/><text x="280" y="216" class="t-i">q</text>
  <line x1="50" y1="196" x2="50" y2="24" class="s-ln" marker-end="url(#aF)"/><text x="32" y="34" class="t-i">v</text>
  <line x1="50" y1="196" x2="262" y2="60" class="s-e"/>
  <text x="72" y="124" class="t-e" style="font-size:13px">v = q/C</text>
  <rect x="166" y="121" width="12" height="75" class="s-g" style="fill:none"/>
  <text x="164" y="214" class="t-g" style="font-size:12px">dq</text>
  <line x1="262" y1="60" x2="262" y2="196" class="s-dash"/><line x1="50" y1="60" x2="262" y2="60" class="s-dash"/>
  <text x="256" y="214" class="t-i">Q</text><text x="32" y="64" class="t-i">V</text>
  <text x="186" y="180" class="t-s">área = ½QV</text>
 </svg>`,
 math:[
  R`dW=v\,dq=\frac{q}{C}\,dq`,
  R`\begin{aligned}U&=\int_0^Q\frac{q}{C}\,dq=\frac{Q^2}{2C}\\&=\frac12\,C\,V^2=\frac12\,Q\,V\end{aligned}`,
  R`\begin{aligned}\text{plano: } U&=\frac12\,\frac{\varepsilon_0 A}{d}\,(E d)^2\\&=\frac12\,\varepsilon_0E^2\,(A\,d)\end{aligned}`,
  R`u=\frac{U}{A\,d}=\frac12\,\varepsilon_0E^2\quad[\mathrm{J/m^3}]`
 ], res:[1,3],
 why:[
  "<b>La tensión no es constante</b> mientras cargás: crece de 0 a V. Llevar un dq cuando ya hay q cuesta v·dq = (q/C)dq.",
  "<b>El ½</b> es el área del triángulo en el gráfico v–q.",
  "<b>A·d es el volumen</b> entre placas: la energía está en el campo, con densidad u = ½ε₀E²."
 ]},

// ======================= POTENCIAL =======================
{id:"D01", bloque:"pot", prio:"max", dif:2,
 titulo:"Diferencia de potencial a partir del trabajo. El campo electrostático es conservativo",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Carga q, camino curvo de i a f, y en un punto el campo radial E y el desplazamiento dl formando un ángulo alfa">
  <line x1="50" y1="152" x2="108" y2="176" class="s-dash"/>
  <text x="66" y="182" class="t-s">r<tspan dy="3" style="font-size:9px">i</tspan></text>
  <line x1="50" y1="152" x2="278" y2="58" class="s-dash"/>
  <text x="148" y="102" class="t-s">r<tspan dy="3" style="font-size:9px">f</tspan></text>
  <circle cx="50" cy="152" r="13" class="f-soft"/><circle cx="50" cy="152" r="13" class="s-ln"/><text x="44" y="157" class="t" style="font-weight:700">+</text>
  <text x="38" y="186" class="t-i">q</text>
  <path d="M108,176 C188,196 218,126 278,58" class="s-ln"/>
  <circle cx="108" cy="176" r="3.5" class="f-fg"/><text x="100" y="198" class="t">i</text>
  <circle cx="278" cy="58" r="3.5" class="f-fg"/><text x="284" y="56" class="t">f</text>
  <circle cx="200" cy="150" r="3.5" class="f-fg"/>
  <line x1="200" y1="150" x2="254" y2="148" class="s-e" marker-end="url(#aE)"/><text x="258" y="154" class="t-e">E</text>
  <line x1="200" y1="150" x2="230" y2="121" class="s-g" marker-end="url(#aG)"/><text x="216" y="114" class="t-g">dl</text>
  <path d="M224,149 A24,24 0 0 0 217.3,133.3" class="s-ln"/><text x="226" y="138" class="t-i" style="font-size:12px">α</text>
  <text x="184" y="172" class="t-s">q<tspan dy="3" style="font-size:9px">p</tspan></text>
 </svg>`,
 math:[
  R`\vec F_a=-q_p\vec E`,
  R`W_{i\to f}=\int_i^f\vec F_a\cdot d\vec l=-q_p\int_i^f\vec E\cdot d\vec l`,
  R`\Delta V=V_f-V_i=\frac{W_{i\to f}}{q_p}=-\int_i^f\vec E\cdot d\vec l`,
  R`\vec E\cdot d\vec l=E\,dl\cos\alpha=\frac{kq}{r^2}\,dr`,
  R`\Delta V=-kq\int_{r_i}^{r_f}\frac{dr}{r^2}=\frac{kq}{r_f}-\frac{kq}{r_i}`,
  R`r_f=r_i\ \Rightarrow\ \oint\vec E\cdot d\vec l=0`
 ], res:[2,5],
 why:[
  "<b>F_a = −q_p E:</b> para mover la carga de prueba sin acelerarla hay que aplicar una fuerza igual y opuesta a la eléctrica.",
  "<b>Dividir por q_p:</b> ΔV no depende de la carga de prueba. Unidad: J/C = volt.",
  "<b>dl cos α = dr:</b> es la parte del desplazamiento que te aleja de la carga, porque E es radial.",
  "<b>Conclusión:</b> depende solo de r_i y r_f. Camino cerrado ⇒ circulación nula ⇒ conservativo. Por superposición vale para cualquier distribución."
 ],
 trap:"Error típico: escribir el trabajo de la fuerza eléctrica en vez del de la fuerza aplicada, o perder el signo menos."},

{id:"D02", bloque:"pot", prio:"alta", dif:1,
 titulo:"Potencial de una carga puntual y de un sistema de cargas puntuales",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Tres cargas puntuales y un punto P con sus distancias">
  <line x1="60" y1="60" x2="250" y2="104" class="s-dash"/><line x1="70" y1="178" x2="250" y2="104" class="s-dash"/><line x1="178" y1="200" x2="250" y2="104" class="s-dash"/>
  <circle cx="60" cy="60" r="12" class="f-soft"/><circle cx="60" cy="60" r="12" class="s-ln"/><text x="54" y="65" class="t" style="font-weight:700">+</text><text x="38" y="44" class="t-i">q₁</text>
  <circle cx="70" cy="178" r="12" class="f-soft"/><circle cx="70" cy="178" r="12" class="s-ln"/><text x="65" y="183" class="t" style="font-weight:700">−</text><text x="42" y="206" class="t-i">q₂</text>
  <circle cx="178" cy="200" r="12" class="f-soft"/><circle cx="178" cy="200" r="12" class="s-ln"/><text x="172" y="205" class="t" style="font-weight:700">+</text><text x="154" y="228" class="t-i">q₃</text>
  <circle cx="250" cy="104" r="4" class="f-fg"/><text x="258" y="108" class="t">P</text>
  <text x="150" y="74" class="t-i" style="font-size:13px">r₁</text><text x="150" y="136" class="t-i" style="font-size:13px">r₂</text><text x="220" y="162" class="t-i" style="font-size:13px">r₃</text>
  <text x="200" y="32" class="t-s">V = 0 en el ∞</text>
 </svg>`,
 math:[
  R`\begin{aligned}&V_f-V_i=\frac{kq}{r_f}-\frac{kq}{r_i}\\&r_i\to\infty,\ V_\infty=0\end{aligned}`,
  R`V(r)=\frac{kq}{r}=\frac{1}{4\pi\varepsilon_0}\,\frac{q}{r}`,
  R`V_P=k\sum_{i}\frac{q_i}{r_i}=k\left(\frac{q_1}{r_1}+\frac{q_2}{r_2}+\frac{q_3}{r_3}\right)`
 ], res:[1,2],
 why:[
  "<b>Cero en el infinito:</b> solo la diferencia de potencial tiene sentido físico; se elige un cero donde la carga ya no influye.",
  "<b>Varias cargas:</b> el potencial es escalar, se suma con el signo de cada carga.",
  "<b>Distribución continua:</b> cada dq es puntual, dV = k·dq/r, y se integra."
 ],
 trap:"Errores típicos: poner r² (eso es el campo), sumar como vectores, olvidar el signo de q₂."},

{id:"D03", bloque:"pot", prio:"alta", dif:2,
 titulo:"Campo a partir del potencial: E = −∇V",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Carga positiva con tres equipotenciales en arco, el campo radial perpendicular a ellas y un desplazamiento sobre una equipotencial">
  <circle cx="40" cy="120" r="12" class="f-soft"/><circle cx="40" cy="120" r="12" class="s-ln"/><text x="34" y="125" class="t" style="font-weight:700">+</text>
  <path d="M85,66.4 A70,70 0 0 1 85,173.6" class="s-dash" style="stroke:var(--g)"/>
  <path d="M123.6,20.4 A130,130 0 0 1 123.6,219.6" class="s-dash" style="stroke:var(--g)"/>
  <path d="M190.1,28.5 A190,190 0 0 1 190.1,211.5" class="s-dash" style="stroke:var(--g)"/>
  <text x="74" y="58" class="t-g" style="font-size:12px">V₁</text><text x="128" y="16" class="t-g" style="font-size:12px">V₂</text><text x="196" y="24" class="t-g" style="font-size:12px">V₃</text>
  <line x1="56" y1="120" x2="290" y2="120" class="s-e" marker-end="url(#aE)"/><text x="278" y="112" class="t-e">E</text>
  <circle cx="157.8" cy="65.1" r="3.5" class="f-fg"/>
  <line x1="157.8" y1="65.1" x2="143.9" y2="35.2" class="s-g" marker-end="url(#aG)"/>
  <text x="120" y="44" class="t-g" style="font-size:13px">dl</text>
  <text x="14" y="200" class="t-s">dl sobre V₂ ⇒ dV = 0</text>
  <text x="214" y="160" class="t-s">V₁ &gt; V₂ &gt; V₃</text>
 </svg>`,
 math:[
  R`dV=-\vec E\cdot d\vec l=-E\,dl\cos\alpha`,
  R`\begin{aligned}&\alpha=180^\circ\ (\text{contra }\vec E):\ \left|\frac{dV}{dl}\right|\ \text{máximo}\\&\Rightarrow\ \vec E=-\nabla V\end{aligned}`,
  R`\begin{aligned}&\alpha=90^\circ:\ dV=0\\&\Rightarrow\ \text{equipotenciales}\perp\text{líneas de }\vec E\end{aligned}`,
  R`V=\frac{kq}{r}\ \Rightarrow\ E=-\frac{dV}{dr}=\frac{kq}{r^2}`
 ], res:[1,2],
 why:[
  "<b>Mapa topográfico:</b> las equipotenciales son curvas de nivel y E es la pendiente hacia abajo más empinada.",
  "<b>El menos</b> dice que E apunta hacia donde V baja.",
  "<b>Verificación:</b> con V = kq/r se recupera Coulomb. Si te da con signo cambiado, perdiste el menos."
 ]},

{id:"D04", bloque:"pot", prio:"max", dif:1,
 titulo:"Conductor en equilibrio electrostático: superficie equipotencial",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Conductor en un campo externo con cargas inducidas, campo nulo adentro y campo perpendicular a la superficie">
  <line x1="46" y1="52" x2="79" y2="82" class="s-e" marker-end="url(#aE)"/><line x1="10" y1="120" x2="64" y2="120" class="s-e" marker-end="url(#aE)"/><line x1="46" y1="188" x2="79" y2="158" class="s-e" marker-end="url(#aE)"/>
  <text x="12" y="104" class="t-e">E₀</text>
  <ellipse cx="160" cy="120" rx="95" ry="68" class="f-soft"/><ellipse cx="160" cy="120" rx="95" ry="68" class="s-ln"/>
  <g class="t" style="font-size:14px"><text x="76" y="98">−</text><text x="70" y="125">−</text><text x="76" y="152">−</text><text x="236" y="98">+</text><text x="242" y="125">+</text><text x="236" y="152">+</text></g>
  <line x1="255" y1="120" x2="305" y2="120" class="s-e" marker-end="url(#aE)"/>
  <line x1="241" y1="82" x2="274" y2="52" class="s-e" marker-end="url(#aE)"/>
  <line x1="241" y1="158" x2="274" y2="188" class="s-e" marker-end="url(#aE)"/>
  <line x1="120" y1="110" x2="166" y2="110" class="s-e" marker-end="url(#aE)"/><text x="124" y="102" class="t-e" style="font-size:13px">E₀</text>
  <line x1="200" y1="128" x2="154" y2="128" class="s-e" marker-end="url(#aE)" style="stroke-dasharray:4 3"/><text x="184" y="146" class="t-e" style="font-size:13px">Eᵢ</text>
  <text x="122" y="168" class="t" style="font-weight:600">E = 0 · V = cte</text>
  <circle cx="160" cy="52" r="3.5" class="f-fg"/><text x="154" y="44" class="t">A</text>
  <circle cx="222" cy="71" r="3.5" class="f-fg"/><text x="214" y="62" class="t">B</text>
  <path d="M166,52 Q196,55 216,67" class="s-g" marker-end="url(#aG)"/>
 </svg>`,
 math:[
  R`\vec E_{int}=\vec E_0+\vec E_i=0`,
  R`\vec E\perp\text{superficie}\ \Rightarrow\ \vec E\perp d\vec l`,
  R`\begin{aligned}V_B-V_A&=-\int_A^B\vec E\cdot d\vec l\\&=-\int_A^B E\,dl\cos 90^\circ=0\end{aligned}`,
  R`V_A=V_B\ \Rightarrow\ \text{superficie equipotencial}`,
  R`\begin{aligned}&\vec E_{int}=0\ \Rightarrow\ \Delta V=0\\&\Rightarrow\ V=\text{cte en todo el volumen}\end{aligned}`
 ], res:[3,4],
 why:[
  "<b>Equilibrio:</b> los electrones libres se redistribuyen hasta generar un campo Eᵢ que anula al externo. Si no, seguirían moviéndose.",
  "<b>E ⊥ superficie:</b> una componente tangencial movería las cargas a lo largo de la superficie.",
  "<b>Frase de tu apunte:</b> \"Como las líneas del campo resultante son perpendiculares, la superficie es equipotencial. Como el campo es 0 dentro del conductor, ese potencial es constante en todo el volumen.\""
 ],
 trap:"E = 0 adentro no significa V = 0: significa que V no cambia."},

{id:"D09", bloque:"pot", prio:"media", dif:2,
 titulo:"Dipolo eléctrico en un campo uniforme: fuerza neta y torque",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Dipolo inclinado un ángulo alfa en un campo uniforme, con fuerzas opuestas sobre cada carga">
  <line x1="12" y1="40" x2="300" y2="40" class="s-e" marker-end="url(#aE)" style="opacity:.55"/>
  <line x1="12" y1="200" x2="300" y2="200" class="s-e" marker-end="url(#aE)" style="opacity:.55"/>
  <text x="284" y="32" class="t-e">E</text>
  <line x1="123" y1="146" x2="197" y2="94" class="s-ln"/>
  <line x1="160" y1="120" x2="230" y2="120" class="s-dash"/>
  <path d="M190,120 A30,30 0 0 0 184.6,102.8" class="s-ln"/><text x="194" y="112" class="t-i" style="font-size:12px">α</text>
  <circle cx="197" cy="94" r="11" class="f-soft"/><circle cx="197" cy="94" r="11" class="s-ln"/><text x="192" y="99" class="t" style="font-weight:700">+</text>
  <circle cx="123" cy="146" r="11" class="f-soft"/><circle cx="123" cy="146" r="11" class="s-ln"/><text x="119" y="151" class="t" style="font-weight:700">−</text>
  <line x1="208" y1="94" x2="262" y2="94" class="s-e" marker-end="url(#aE)"/><text x="244" y="86" class="t-i" style="font-size:13px">F = qE</text>
  <line x1="112" y1="146" x2="58" y2="146" class="s-e" marker-end="url(#aE)"/><text x="44" y="166" class="t-i" style="font-size:13px">F = −qE</text>
  <line x1="138" y1="124" x2="170" y2="102" class="s-g" marker-end="url(#aG)"/><text x="134" y="104" class="t-g">p</text>
  <text x="168" y="148" class="t-i" style="font-size:13px">d</text>
 </svg>`,
 math:[
  R`\vec F_+=q\vec E \qquad \vec F_-=-q\vec E\ \Rightarrow\ \sum\vec F=0`,
  R`\tau=2\,qE\,\frac{d}{2}\operatorname{sen}\alpha=qEd\operatorname{sen}\alpha`,
  R`\vec p=q\,\vec d\ (\text{de }-q\text{ a }+q)\ \Rightarrow\ \vec\tau=\vec p\times\vec E`,
  R`\vec\tau=0\ \text{si}\ \vec p\parallel\vec E`
 ], res:[2,3],
 why:[
  "<b>Fuerza neta cero:</b> las fuerzas son iguales y opuestas, así que no se traslada.",
  "<b>Par:</b> no están sobre la misma recta. El brazo de cada una respecto del centro es (d/2)·sen α.",
  "<b>Se alinea con E:</b> el torque es cero cuando p y E son paralelos (frase de tu apunte del 13-10). Es la base de la polarización de los dieléctricos."
 ]},

// ======================= GAUSS =======================
{id:"D05", bloque:"gau", prio:"max", dif:1,
 titulo:"Ley de Gauss a partir del campo de una carga puntual",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Carga puntual en el centro de una esfera gaussiana con campo y vector área radiales">
  <circle cx="160" cy="120" r="80" class="s-dash"/>
  <circle cx="160" cy="120" r="11" class="f-soft"/><circle cx="160" cy="120" r="11" class="s-ln"/><text x="154" y="125" class="t" style="font-weight:700">+</text>
  <text x="146" y="148" class="t-i">q</text>
  <line x1="160" y1="120" x2="216.6" y2="63.4" class="s-ln" style="stroke-width:1"/><text x="180" y="86" class="t-i">r</text>
  <line x1="240" y1="120" x2="284" y2="120" class="s-e" marker-end="url(#aE)"/><text x="288" y="116" class="t-e">E</text>
  <line x1="240" y1="131" x2="276" y2="131" class="s-g" marker-end="url(#aG)"/><text x="280" y="146" class="t-g" style="font-size:12px">dA</text>
  <line x1="160" y1="40" x2="160" y2="10" class="s-e" marker-end="url(#aE)"/>
  <line x1="80" y1="120" x2="36" y2="120" class="s-e" marker-end="url(#aE)"/>
  <line x1="160" y1="200" x2="160" y2="230" class="s-e" marker-end="url(#aE)"/>
  <line x1="103.4" y1="63.4" x2="80" y2="40" class="s-e" marker-end="url(#aE)"/>
  <line x1="103.4" y1="176.6" x2="80" y2="200" class="s-e" marker-end="url(#aE)"/>
  <line x1="216.6" y1="176.6" x2="240" y2="200" class="s-e" marker-end="url(#aE)"/>
  <text x="232" y="44" class="t-s">sup. gaussiana</text>
 </svg>`,
 math:[
  R`\begin{aligned}\Phi&=\oint\vec E\cdot d\vec A=\oint E\,dA\cos 0^\circ\\&=E\oint dA=E\,4\pi r^2\end{aligned}`,
  R`\Phi=\frac{1}{4\pi\varepsilon_0}\,\frac{q}{r^2}\,4\pi r^2=\frac{q}{\varepsilon_0}`,
  R`\oint\vec E\cdot d\vec A=\frac{q_{enc}}{\varepsilon_0}`
 ], res:[2],
 why:[
  "<b>Esfera centrada en q:</b> E ∥ dA y |E| igual en todos los puntos, así que E sale de la integral.",
  "<b>El r se cancela:</b> el área crece como r² y el campo cae como 1/r².",
  "<b>Generalización:</b> por superposición, varias cargas adentro suman flujo; una carga de afuera aporta flujo neto cero.",
  "<b>Receta:</b> simetría → hacia dónde apunta E → superficie con E ∥ dA (o ⊥) → flujo = q_enc/ε₀ → despejo."
 ],
 trap:"Ya lo tomó: en una superficie abierta sí hay flujo, pero Gauss solo vale para superficies cerradas."},

{id:"D06", bloque:"gau", prio:"max", dif:1,
 titulo:"Campo eléctrico de un hilo infinito cargado (ley de Gauss)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Hilo cargado con cilindro gaussiano coaxial; campo radial por la cara lateral">
  <ellipse cx="160" cy="58" rx="70" ry="16" class="s-dash"/>
  <path d="M90,180 A70,16 0 0 0 230,180" class="s-dash"/>
  <path d="M90,180 A70,16 0 0 1 230,180" class="s-dash" style="opacity:.35"/>
  <line x1="90" y1="58" x2="90" y2="180" class="s-dash"/><line x1="230" y1="58" x2="230" y2="180" class="s-dash"/>
  <line x1="160" y1="12" x2="160" y2="228" class="s-th"/><text x="166" y="24" class="t-i">λ</text>
  <line x1="160" y1="120" x2="278" y2="120" class="s-e" marker-end="url(#aE)"/><text x="282" y="116" class="t-e">E</text>
  <line x1="160" y1="120" x2="42" y2="120" class="s-e" marker-end="url(#aE)"/>
  <line x1="230" y1="140" x2="268" y2="140" class="s-g" marker-end="url(#aG)"/><text x="272" y="156" class="t-g" style="font-size:12px">dA</text>
  <line x1="200" y1="55" x2="200" y2="24" class="s-g" marker-end="url(#aG)"/><text x="206" y="32" class="t-g" style="font-size:12px">dA</text>
  <line x1="200" y1="184" x2="200" y2="214" class="s-g" marker-end="url(#aG)"/>
  <text x="188" y="112" class="t-i" style="font-size:13px">r</text>
  <line x1="78" y1="58" x2="78" y2="180" class="s-ln" style="stroke-width:1" marker-start="url(#aF)" marker-end="url(#aF)"/>
  <text x="64" y="104" class="t-i" style="font-size:13px">l</text>
 </svg>`,
 math:[
  R`\begin{aligned}\oint\vec E\cdot d\vec A&=\underbrace{\int_{tapas}E\,dA\cos 90^\circ}_{0}\\&\quad+\int_{lat}E\,dA\cos 0^\circ=E\,2\pi r\,l\end{aligned}`,
  R`q_{enc}=\lambda\,l`,
  R`E\,2\pi r\,l=\frac{\lambda\,l}{\varepsilon_0}`,
  R`E=\frac{\lambda}{2\pi\varepsilon_0\,r}`
 ], res:[3],
 why:[
  "<b>Simetría cilíndrica:</b> E es radial y su módulo depende solo de r. Por eso el cilindro coaxial.",
  "<b>Tapas:</b> E ⊥ dA, flujo cero. <b>Lateral:</b> E ∥ dA, área 2πrl.",
  "<b>El l se cancela:</b> E cae como 1/r. λ: densidad lineal de carga [C/m]."
 ]},

{id:"D07", bloque:"gau", prio:"max", dif:1,
 titulo:"Campo eléctrico de un plano infinito cargado (ley de Gauss)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Plano cargado atravesado por un cilindro gaussiano; campo perpendicular saliendo por las dos bases">
  <path d="M140,22 L182,46 L182,216 L140,192 Z" class="f-soft"/><path d="M140,22 L182,46 L182,216 L140,192 Z" class="s-ln"/>
  <text x="155" y="56" class="t-i">σ</text>
  <line x1="90" y1="90" x2="250" y2="90" class="s-dash"/><line x1="90" y1="150" x2="250" y2="150" class="s-dash"/>
  <ellipse cx="90" cy="120" rx="12" ry="30" class="s-dash"/><ellipse cx="250" cy="120" rx="12" ry="30" class="s-dash"/>
  <line x1="262" y1="120" x2="306" y2="120" class="s-e" marker-end="url(#aE)"/><text x="290" y="112" class="t-e">E</text>
  <line x1="78" y1="120" x2="34" y2="120" class="s-e" marker-end="url(#aE)"/><text x="36" y="112" class="t-e">E</text>
  <line x1="262" y1="137" x2="296" y2="137" class="s-g" marker-end="url(#aG)"/><text x="280" y="156" class="t-g" style="font-size:12px">dA</text>
  <line x1="78" y1="137" x2="44" y2="137" class="s-g" marker-end="url(#aG)"/><text x="40" y="156" class="t-g" style="font-size:12px">dA</text>
  <text x="236" y="80" class="t-s">base S</text>
 </svg>`,
 math:[
  R`\oint\vec E\cdot d\vec A=\underbrace{E\,S+E\,S}_{bases}+\underbrace{0}_{lateral}=2\,E\,S`,
  R`q_{enc}=\sigma\,S`,
  R`2\,E\,S=\frac{\sigma\,S}{\varepsilon_0}`,
  R`E=\frac{\sigma}{2\varepsilon_0}`
 ], res:[3],
 why:[
  "<b>Simetría plana:</b> E es perpendicular al plano y sale hacia los dos lados.",
  "<b>Flujo por las dos bases;</b> por la cara lateral E ⊥ dA.",
  "<b>No depende de la distancia.</b> σ: densidad superficial [C/m²]."
 ],
 trap:"σ/2ε₀ es una placa sola. σ/ε₀ es junto a un conductor o entre las placas de un capacitor."},

{id:"D08", bloque:"gau", prio:"alta", dif:2,
 titulo:"Campo de una esfera con carga uniforme en volumen (ley de Gauss)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Esfera cargada de radio a con dos superficies gaussianas, una interior y otra exterior">
  <circle cx="150" cy="120" r="62" class="f-soft"/><circle cx="150" cy="120" r="62" class="s-ln"/>
  <circle cx="150" cy="120" r="38" class="s-dash"/>
  <circle cx="150" cy="120" r="98" class="s-dash"/>
  <text x="142" y="124" class="t-i">ρ</text>
  <line x1="150" y1="120" x2="194" y2="164" class="s-ln" style="stroke-width:1"/><text x="180" y="150" class="t-i">a</text>
  <line x1="150" y1="120" x2="176.9" y2="93.1" class="s-ln" style="stroke-width:1"/><text x="156" y="102" class="t-i" style="font-size:13px">r</text>
  <text x="150" y="148" class="t-s" text-anchor="middle">r &lt; a</text>
  <line x1="248" y1="120" x2="290" y2="120" class="s-e" marker-end="url(#aE)"/><text x="292" y="114" class="t-e">E</text>
  <line x1="188" y1="120" x2="208" y2="120" class="s-e" marker-end="url(#aE)"/>
  <text x="236" y="38" class="t-s">r &gt; a</text>
  <text x="312" y="214" class="t-s" text-anchor="end">ρ uniforme</text><text x="312" y="228" class="t-s" text-anchor="end">carga total Q</text>
 </svg>`,
 math:[
  R`\oint\vec E\cdot d\vec A=E\,4\pi r^2=\frac{q_{enc}}{\varepsilon_0}`,
  R`r>a:\ q_{enc}=Q\ \Rightarrow\ E=\frac{kQ}{r^2}`,
  R`r<a:\ q_{enc}=Q\,\frac{r^3}{a^3}\ \Rightarrow\ E\,4\pi r^2=\frac{Q\,r^3}{\varepsilon_0\,a^3}`,
  R`E=\frac{kQ}{a^3}\,r`
 ], res:[1,3],
 why:[
  "<b>Simetría esférica:</b> E radial, gaussiana esférica de radio r.",
  "<b>Afuera</b> encierra toda la Q: igual que una carga puntual.",
  "<b>Adentro</b> encierra la fracción de volumen r³/a³: E crece lineal con r.",
  "<b>Si fuera conductora,</b> la carga estaría en la superficie: para r < a, q_enc = 0 y E = 0."
 ]},

// ======================= OHM =======================
{id:"D17", bloque:"ohm", prio:"max", dif:1,
 titulo:"Ley de Ohm: de J = σE a V = R·I",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Conductor cilíndrico de largo L y sección A con campo E y corriente I">
  <line x1="16" y1="114" x2="48" y2="114" class="s-ln"/><line x1="16" y1="96" x2="44" y2="96" class="s-ln" marker-end="url(#aF)"/><text x="22" y="88" class="t-i">I</text>
  <line x1="272" y1="114" x2="306" y2="114" class="s-ln"/>
  <path d="M60,84 H260 M60,144 H260" class="s-ln"/>
  <ellipse cx="60" cy="114" rx="12" ry="30" class="f-soft"/><ellipse cx="60" cy="114" rx="12" ry="30" class="s-ln"/>
  <path d="M260,84 A12,30 0 0 1 260,144" class="s-ln"/>
  <text x="52" y="72" class="t-i">A</text>
  <line x1="94" y1="114" x2="232" y2="114" class="s-e" marker-end="url(#aE)"/><text x="150" y="106" class="t-e">E</text>
  <line x1="94" y1="132" x2="150" y2="132" class="s-ln" marker-end="url(#aF)"/><text x="158" y="137" class="t-i" style="font-size:13px">J</text>
  <text x="46" y="174" class="t">a · V<tspan dy="3" style="font-size:9px">a</tspan></text><text x="234" y="174" class="t">b · V<tspan dy="3" style="font-size:9px">b</tspan></text>
  <line x1="60" y1="196" x2="260" y2="196" class="s-ln" style="stroke-width:1" marker-start="url(#aF)" marker-end="url(#aF)"/><text x="156" y="214" class="t-i">L</text>
 </svg>`,
 math:[
  R`\vec J=\sigma\vec E`,
  R`V_a-V_b=\int_a^b\vec E\cdot d\vec l=E\,L \qquad I=J\,A`,
  R`I=\sigma E\,A=\frac{\sigma A}{L}\,V`,
  R`\begin{aligned}&V=\frac{L}{\sigma A}\,I=R\,I\\&R=\rho\,\frac{L}{A},\quad \rho=\frac{1}{\sigma}\end{aligned}`
 ], res:[3],
 why:[
  "<b>Con corriente hay campo adentro:</b> el conductor no está en equilibrio electrostático. Ohm local: más campo, más densidad de corriente.",
  "<b>Campo uniforme en el tramo L:</b> la integral da E·L. La corriente es J por el área.",
  "<b>ρ</b> es del material [Ω·m]; <b>R</b> depende del material y de la geometría [Ω]. J densidad de corriente [A/m²]; σ conductividad [S/m]."
 ],
 trap:"En Ohm, ρ es resistividad; en Gauss era densidad de carga; en Biot–Savart, distancia. Misma letra, tres cosas."},

{id:"D18", bloque:"ohm", prio:"alta", dif:1,
 titulo:"Ley de Joule: potencia disipada en una resistencia",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Resistencia entre los puntos a y b con corriente I y una carga dq que cae una diferencia de potencial">
  <line x1="30" y1="120" x2="110" y2="120" class="s-ln"/>
  <path d="M110,120 L120,100 L136,140 L152,100 L168,140 L184,100 L200,140 L210,120" class="s-ln"/>
  <line x1="210" y1="120" x2="290" y2="120" class="s-ln"/>
  <circle cx="30" cy="120" r="3.5" class="f-fg"/><circle cx="290" cy="120" r="3.5" class="f-fg"/>
  <text x="18" y="146" class="t">a · V<tspan dy="3" style="font-size:9px">a</tspan></text><text x="262" y="146" class="t">b · V<tspan dy="3" style="font-size:9px">b</tspan></text>
  <line x1="50" y1="100" x2="90" y2="100" class="s-ln" marker-end="url(#aF)"/><text x="64" y="92" class="t-i">I</text>
  <text x="152" y="88" class="t-i">R</text>
  <circle cx="74" cy="176" r="6" class="f-soft"/><circle cx="74" cy="176" r="6" class="s-ln"/>
  <line x1="84" y1="176" x2="232" y2="176" class="s-g" marker-end="url(#aG)"/>
  <text x="58" y="200" class="t-s">dq</text><text x="118" y="200" class="t-s">cae ΔV = V<tspan dy="3" style="font-size:8px">a</tspan><tspan dy="-3"> − V</tspan><tspan dy="3" style="font-size:8px">b</tspan></text>
 </svg>`,
 math:[
  R`dW=dq\,\Delta V`,
  R`P=\frac{dW}{dt}=\Delta V\,\frac{dq}{dt}=\Delta V\,I`,
  R`\Delta V=R\,I\ \Rightarrow\ P=I^2R=\frac{\Delta V^2}{R}`
 ], res:[1,2],
 why:[
  "<b>Una carga dq que cae ΔV</b> entrega energía dq·ΔV; en la resistencia se disipa como calor.",
  "<b>Dividir por dt</b> da la potencia; dq/dt es la corriente. Con Ohm salen las otras dos formas."
 ]}
];
