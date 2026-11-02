// Desarrollos que aparecen en la carpeta de Andrade (curso 2019) y no estaban en los apuntes de clase.
// Se insertan en window.DESARROLLOS después del desarrollo indicado en "despues".
(function(){
const R = String.raw;

window.BLOQUES.splice(window.BLOQUES.findIndex(b => b.id === "bs") + 1, 0, {id:"fm", nombre:"Fuerzas magnéticas"});

const EXTRA = [
// ---------- POTENCIAL ----------
{despues:"D02", id:"D02b", bloque:"pot", prio:"alta", dif:1,
 titulo:"Potencial de un plano infinito cargado (simetría plana)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Plano cargado con campo perpendicular a ambos lados, un camino de i a f y gráfico de la diferencia de potencial en función de z">
  <line x1="74" y1="20" x2="74" y2="196" class="s-th"/>
  <g class="t" style="font-size:13px"><text x="60" y="44">+</text><text x="60" y="84">+</text><text x="60" y="124">+</text><text x="60" y="164">+</text></g>
  <text x="80" y="30" class="t-i">σ</text>
  <line x1="78" y1="56" x2="152" y2="56" class="s-e" marker-end="url(#aE)"/>
  <line x1="78" y1="176" x2="152" y2="176" class="s-e" marker-end="url(#aE)"/>
  <line x1="70" y1="56" x2="22" y2="56" class="s-e" marker-end="url(#aE)"/>
  <line x1="70" y1="176" x2="22" y2="176" class="s-e" marker-end="url(#aE)"/>
  <text x="134" y="48" class="t-e">E</text>
  <circle cx="98" cy="140" r="3.5" class="f-fg"/><text x="90" y="158" class="t">i</text>
  <path d="M98,140 C118,100 128,124 146,96" class="s-g" marker-end="url(#aG)"/>
  <circle cx="148" cy="94" r="3.5" class="f-fg"/><text x="152" y="92" class="t">f</text>
  <text x="122" y="134" class="t-g" style="font-size:12px">dl</text>
  <line x1="74" y1="214" x2="160" y2="214" class="s-ln" style="stroke-width:1" marker-end="url(#aF)"/><text x="150" y="232" class="t-i">z</text>
  <text x="66" y="232" class="t-s">0</text>
  <line x1="186" y1="184" x2="306" y2="184" class="s-ln" style="stroke-width:1" marker-end="url(#aF)"/>
  <line x1="246" y1="184" x2="246" y2="60" class="s-ln" style="stroke-width:1" marker-end="url(#aF)"/>
  <path d="M192,180 L246,92 L300,180" class="s-e"/>
  <text x="302" y="200" class="t-i" style="font-size:13px">z</text><text x="252" y="70" class="t-i" style="font-size:13px">V</text>
  <text x="246" y="216" class="t-s" text-anchor="middle">V baja lineal</text><text x="246" y="230" class="t-s" text-anchor="middle">a los dos lados</text>
 </svg>`,
 math:[
  R`E=\frac{\sigma}{2\varepsilon_0}\quad(\perp\ \text{al plano})`,
  R`\begin{aligned}\Delta V&=-\int_i^f\vec E\cdot d\vec l=-\int_{z_i}^{z_f}\frac{\sigma}{2\varepsilon_0}\,dz\\&=-\frac{\sigma}{2\varepsilon_0}\,(z_f-z_i)\end{aligned}`,
  R`V(z)=-\frac{\sigma}{2\varepsilon_0}\,|z|+C`
 ], res:[2],
 why:[
  "<b>E sale del desarrollo de Gauss del plano</b> (D07): uniforme y perpendicular.",
  "<b>Solo aporta el desplazamiento en z:</b> E·dl = E·dz, porque E es perpendicular al plano. Cualquier camino de i a f da lo mismo.",
  "<b>V varía linealmente</b> con la distancia al plano, y baja hacia los dos lados (el gráfico es un triángulo).",
  "<b>No se puede tomar V = 0 en el infinito:</b> V crecería sin límite. Por eso queda una constante arbitraria C."
 ],
 trap:"Esto es lo que la carpeta llama \"algo de potencial\": potencial de configuraciones simétricas. Es corto y tiene dibujo."},

{despues:"D02b", id:"D02c", bloque:"pot", prio:"alta", dif:2,
 titulo:"Diferencia de potencial de un hilo infinito cargado (simetría cilíndrica)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Hilo cargado visto de frente con campo radial y un camino entre dos distancias rho i y rho f">
  <circle cx="120" cy="120" r="56" class="s-dash"/>
  <circle cx="120" cy="120" r="104" class="s-dash"/>
  <line x1="134" y1="120" x2="226" y2="120" class="s-e" marker-end="url(#aE)"/>
  <line x1="110" y1="110" x2="54" y2="54" class="s-e" marker-end="url(#aE)"/>
  <line x1="106" y1="120" x2="22" y2="120" class="s-e" marker-end="url(#aE)"/>
  <line x1="120" y1="134" x2="120" y2="222" class="s-e" marker-end="url(#aE)"/>
  <text x="126" y="210" class="t-e">E</text>
  <circle cx="120" cy="120" r="12" class="f-soft"/><circle cx="120" cy="120" r="12" class="s-ln"/><text x="114" y="125" class="t" style="font-weight:700">+</text>
  <text x="128" y="148" class="t-i">λ</text>
  <circle cx="160" cy="80" r="3.5" class="f-fg"/><text x="164" y="76" class="t">i</text>
  <circle cx="216" cy="148" r="3.5" class="f-fg"/><text x="222" y="152" class="t">f</text>
  <path d="M160,80 C214,70 228,104 216,144" class="s-g" marker-end="url(#aG)"/>
  <text x="224" y="86" class="t-g" style="font-size:12px">dl</text>
  <line x1="120" y1="120" x2="160" y2="80" class="s-ln" style="stroke-width:1"/>
  <text x="128" y="94" class="t-i" style="font-size:12px">ρ<tspan dy="3" style="font-size:9px">i</tspan></text>
  <line x1="120" y1="120" x2="216" y2="148" class="s-ln" style="stroke-width:1"/>
  <text x="176" y="154" class="t-i" style="font-size:12px">ρ<tspan dy="3" style="font-size:9px">f</tspan></text>
  <text x="236" y="40" class="t-s">vista de frente:</text><text x="236" y="54" class="t-s">el hilo sale</text><text x="236" y="68" class="t-s">de la hoja</text>
 </svg>`,
 math:[
  R`E=\frac{\lambda}{2\pi\varepsilon_0\,\rho}\quad(\text{radial})`,
  R`\vec E\cdot d\vec l=E\,d\rho`,
  R`\Delta V=-\int_{\rho_i}^{\rho_f}\frac{\lambda}{2\pi\varepsilon_0\,\rho}\,d\rho`,
  R`\Delta V=-\frac{\lambda}{2\pi\varepsilon_0}\,\ln\frac{\rho_f}{\rho_i}`
 ], res:[3],
 why:[
  "<b>E sale de Gauss del hilo</b> (D06): radial y cae como 1/ρ.",
  "<b>Solo hace aporte el corrimiento radial dρ:</b> la parte del camino que gira alrededor del hilo es perpendicular a E.",
  "<b>La integral de 1/ρ es ln ρ.</b> Si te alejás (ρf > ρi) y λ > 0, el potencial baja.",
  "<b>Tampoco se puede tomar V = 0 en el infinito:</b> el logaritmo diverge."
 ]},

// ---------- CAPACITORES ----------
{despues:"D11", id:"D11b", bloque:"cap", prio:"alta", dif:2,
 titulo:"Capacidad de un capacitor cilíndrico",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Capacitor cilíndrico en corte: cilindro interior positivo, cilindro exterior negativo y campo radial entre ellos">
  <circle cx="120" cy="120" r="96" class="s-th"/>
  <circle cx="120" cy="120" r="34" class="f-soft"/><circle cx="120" cy="120" r="34" class="s-th"/>
  <g class="t" style="font-size:12px"><text x="114" y="98">+</text><text x="136" y="110">+</text><text x="114" y="150">+</text><text x="92" y="124">+</text>
  <text x="114" y="38">−</text><text x="200" y="124">−</text><text x="114" y="212">−</text><text x="32" y="124">−</text></g>
  <line x1="154" y1="120" x2="210" y2="120" class="s-e" marker-end="url(#aE)"/>
  <line x1="144" y1="96" x2="180" y2="60" class="s-e" marker-end="url(#aE)"/>
  <line x1="96" y1="144" x2="60" y2="180" class="s-e" marker-end="url(#aE)"/>
  <line x1="144" y1="144" x2="180" y2="180" class="s-e" marker-end="url(#aE)"/>
  <text x="172" y="100" class="t-e">E</text>
  <line x1="120" y1="120" x2="144" y2="144" class="s-ln" style="stroke-width:1"/><text x="139" y="131" class="t-i" style="font-size:12px">rᵢ</text>
  <line x1="120" y1="120" x2="52" y2="52" class="s-ln" style="stroke-width:1"/><text x="64" y="80" class="t-i" style="font-size:12px">rₑ</text>
  <text x="228" y="56" class="t-s">corte de dos</text><text x="228" y="70" class="t-s">cilindros</text><text x="228" y="84" class="t-s">coaxiales</text>
  <text x="228" y="104" class="t-s">largo L ≫ rₑ</text>
  <text x="228" y="138" class="t" style="font-size:12px">+Q adentro</text><text x="228" y="156" class="t" style="font-size:12px">−Q afuera</text>
 </svg>`,
 math:[
  R`E=\frac{\lambda}{2\pi\varepsilon_0\,r} \qquad \lambda=\frac{Q}{L}`,
  R`\begin{aligned}V&=\int_{r_i}^{r_e}\vec E\cdot d\vec l=\int_{r_i}^{r_e}\frac{\lambda}{2\pi\varepsilon_0\,r}\,dr\\&=\frac{\lambda}{2\pi\varepsilon_0}\,\ln\frac{r_e}{r_i}\end{aligned}`,
  R`C=\frac{Q}{V}=\frac{\lambda L}{\dfrac{\lambda}{2\pi\varepsilon_0}\ln\dfrac{r_e}{r_i}}`,
  R`C=\frac{2\pi\varepsilon_0\,L}{\ln\dfrac{r_e}{r_i}}`
 ], res:[3],
 why:[
  "<b>Entre los cilindros el campo es el del hilo</b> (Gauss con un cilindro coaxial): tener la carga distribuida en el cilindro interior es lo mismo que tenerla en el eje.",
  "<b>V es la circulación</b> del cilindro interior al exterior.",
  "<b>λ se cancela:</b> C depende solo de la geometría (L, rᵢ, rₑ), como siempre."
 ]},

{despues:"D11b", id:"D11c", bloque:"cap", prio:"alta", dif:2,
 titulo:"Capacidad de un capacitor esférico y de una esfera aislada",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Capacitor esférico: esfera interior positiva, cáscara exterior negativa y campo radial entre ellas">
  <circle cx="120" cy="120" r="96" class="s-th"/>
  <circle cx="120" cy="120" r="38" class="f-soft"/><circle cx="120" cy="120" r="38" class="s-th"/>
  <g class="t" style="font-size:12px"><text x="114" y="92">+</text><text x="140" y="110">+</text><text x="114" y="154">+</text><text x="86" y="124">+</text>
  <text x="114" y="38">−</text><text x="200" y="124">−</text><text x="114" y="212">−</text><text x="32" y="124">−</text></g>
  <line x1="158" y1="120" x2="210" y2="120" class="s-e" marker-end="url(#aE)"/>
  <line x1="147" y1="93" x2="180" y2="60" class="s-e" marker-end="url(#aE)"/>
  <line x1="93" y1="147" x2="60" y2="180" class="s-e" marker-end="url(#aE)"/>
  <text x="172" y="100" class="t-e">E</text>
  <line x1="120" y1="120" x2="146.9" y2="146.9" class="s-ln" style="stroke-width:1"/><text x="137" y="133" class="t-i" style="font-size:12px">rᵢ</text>
  <line x1="120" y1="120" x2="52" y2="52" class="s-ln" style="stroke-width:1"/><text x="64" y="80" class="t-i" style="font-size:12px">rₑ</text>
  <text x="228" y="44" class="t-s">esfera de</text><text x="228" y="58" class="t-s">radio rᵢ dentro</text><text x="228" y="72" class="t-s">de una cáscara</text><text x="228" y="86" class="t-s">de radio rₑ</text>
  <text x="228" y="132" class="t" style="font-size:12px">+Q adentro</text><text x="228" y="150" class="t" style="font-size:12px">−Q afuera</text>
  <text x="228" y="186" class="t-s">rₑ → ∞:</text><text x="228" y="200" class="t-s">esfera aislada</text>
 </svg>`,
 math:[
  R`E=\frac{kQ}{r^2}\qquad(r_i<r<r_e)`,
  R`V=\int_{r_i}^{r_e}\frac{kQ}{r^2}\,dr=kQ\left(\frac{1}{r_i}-\frac{1}{r_e}\right)`,
  R`\begin{aligned}C&=\frac{Q}{V}=\frac{1}{k}\left(\frac{1}{r_i}-\frac{1}{r_e}\right)^{-1}\\&=4\pi\varepsilon_0\,\frac{r_i\,r_e}{r_e-r_i}\end{aligned}`,
  R`r_e\to\infty:\quad C=4\pi\varepsilon_0\,R`
 ], res:[2,3],
 why:[
  "<b>Entre las esferas el campo es el de una carga puntual</b> Q en el centro (Gauss con una esfera concéntrica).",
  "<b>V es la circulación</b> de la esfera interior a la exterior.",
  "<b>Esfera aislada:</b> la cáscara exterior se aleja al infinito y queda C = 4πε₀R, con R el radio de la esfera."
 ],
 trap:"En la carpeta de 2019 dice \"rₑ → 0\" para la esfera aislada: es un error de copia. Es rₑ → ∞ (si rₑ → 0 la fórmula no tiene sentido)."},

// ---------- FUERZAS MAGNÉTICAS ----------
{despues:"Dcruz", id:"D29", bloque:"fm", prio:"alta", dif:1,
 titulo:"Fuerza magnética sobre un conductor con corriente en un campo uniforme",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Segmento horizontal de largo l con corriente, campo magnético uniforme hacia abajo y fuerza entrante">
  <line x1="60" y1="20" x2="60" y2="210" class="s-b" marker-end="url(#aB)"/>
  <line x1="120" y1="20" x2="120" y2="210" class="s-b" marker-end="url(#aB)"/>
  <line x1="180" y1="20" x2="180" y2="210" class="s-b" marker-end="url(#aB)"/>
  <line x1="240" y1="20" x2="240" y2="210" class="s-b" marker-end="url(#aB)"/>
  <text x="250" y="40" class="t-b">B</text><text x="264" y="40" class="t-s">uniforme</text>
  <line x1="36" y1="110" x2="284" y2="110" class="s-th"/>
  <line x1="70" y1="94" x2="110" y2="94" class="s-ln" marker-end="url(#aF)"/><text x="84" y="86" class="t-i halo">I</text>
  <line x1="132" y1="124" x2="164" y2="124" class="s-g" marker-end="url(#aG)" style="stroke-width:3"/><text x="140" y="144" class="t-g" style="font-size:13px">dl</text>
  <path d="M36,166 V180 M284,166 V180" class="s-ln" style="stroke-width:1"/><line x1="36" y1="173" x2="284" y2="173" class="s-ln" style="stroke-width:1" marker-start="url(#aF)" marker-end="url(#aF)"/><text x="150" y="168" class="t-i halo">l</text>
  <circle cx="150" cy="64" r="9" class="f-soft"/><circle cx="150" cy="64" r="9" class="s-ln"/><path d="M143.6,57.6 L156.4,70.4 M156.4,57.6 L143.6,70.4" class="s-ln"/>
  <text x="150" y="92" class="t-i halo" text-anchor="middle">F entra</text>
 </svg>`,
 math:[
  R`\begin{aligned}d\vec F&=dq\,\frac{d\vec l}{dt}\times\vec B\\&=\frac{dq}{dt}\,d\vec l\times\vec B=I\,d\vec l\times\vec B\end{aligned}`,
  R`\vec F=I\int_i^f d\vec l\times\vec B`,
  R`\begin{aligned}&\vec B\ \text{uniforme}:\\&\vec F=I\left(\int_i^f d\vec l\right)\times\vec B=I\,\vec l\times\vec B\end{aligned}`,
  R`\vec l\perp\vec B:\ F=I\,l\,B \qquad \vec l\parallel\vec B:\ F=0`
 ], res:[2,3],
 why:[
  "<b>Parte de Lorentz</b> para cada carga dq que avanza dl en un dt: v = dl/dt.",
  "<b>dq/dt es la corriente I.</b> Así la fuerza sobre un tramito es I·dl × B.",
  "<b>Solo con B uniforme</b> se puede sacar B de la integral; la suma de los dl es el vector l de i a f.",
  "<b>Sentido:</b> I hacia la derecha y B hacia abajo ⇒ F entra a la hoja (producto vectorial)."
 ]},

{despues:"D29", id:"D30", bloque:"fm", prio:"alta", dif:2,
 titulo:"Fuerza entre dos conductores rectos paralelos con corriente",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Dos conductores verticales paralelos con corrientes hacia arriba, el campo del primero en el segundo y fuerzas de atracción">
  <line x1="100" y1="16" x2="100" y2="224" class="s-th"/>
  <line x1="220" y1="16" x2="220" y2="224" class="s-th"/>
  <line x1="88" y1="70" x2="88" y2="36" class="s-ln" marker-end="url(#aF)"/><text x="66" y="50" class="t-i">I₁</text>
  <line x1="232" y1="70" x2="232" y2="36" class="s-ln" marker-end="url(#aF)"/><text x="240" y="50" class="t-i">I₂</text>
  <line x1="100" y1="200" x2="220" y2="200" class="s-dash"/><text x="154" y="194" class="t-i">r</text>
  <circle cx="220" cy="120" r="9" class="f-soft"/><circle cx="220" cy="120" r="9" class="s-b"/><path d="M213.6,113.6 L226.4,126.4 M226.4,113.6 L213.6,126.4" class="s-b"/>
  <text x="236" y="112" class="t-b">B₁</text><text x="236" y="126" class="t-s">(entra)</text>
  <line x1="214" y1="150" x2="164" y2="150" class="s-ln" marker-end="url(#aF)" style="stroke-width:2.2"/><text x="176" y="138" class="t-i">F₂</text>
  <line x1="106" y1="150" x2="156" y2="150" class="s-ln" marker-end="url(#aF)" style="stroke-width:2.2"/><text x="122" y="138" class="t-i">F₁</text>
  <text x="160" y="232" class="t-s halo" text-anchor="middle">mismo sentido de I ⇒ se atraen</text>
 </svg>`,
 math:[
  R`B_1=\frac{\mu_0 I_1}{2\pi r}\quad(\text{en el conductor 2})`,
  R`\vec F_2=I_2\,\vec l_2\times\vec B_1\ \Rightarrow\ F_2=I_2\,l_2\,\frac{\mu_0 I_1}{2\pi r}`,
  R`\frac{F}{l}=\frac{\mu_0\,I_1\,I_2}{2\pi r}`,
  R`\vec F_1=-\vec F_2\quad(\text{acción y reacción})`
 ], res:[2],
 why:[
  "<b>B₁ es el campo del hilo infinito</b> (D22) a la distancia r, donde está el conductor 2.",
  "<b>La fuerza sobre el conductor 2</b> es la de D29 con ese campo: B₁ es perpendicular a l₂.",
  "<b>Sentido:</b> I₁ hacia arriba ⇒ en el conductor 2 (a la derecha) B₁ entra a la hoja; I₂ hacia arriba × B₁ entrante da una fuerza hacia la izquierda: se atraen.",
  "<b>Corrientes del mismo sentido se atraen; de sentido contrario se repelen.</b>"
 ],
 trap:"La carpeta de 2019 dice que las corrientes del mismo sentido se rechazan. Está mal: se atraen. Si lo dibujás así en el parcial, te lo marcan."},

// ---------- AMPÈRE ----------
{despues:"Dcruz", id:"D31", bloque:"amp", prio:"alta", dif:2,
 titulo:"Ley de Ampère a partir del campo del hilo infinito (corriente concatenada)",
 fig:R`<svg viewBox="0 0 320 240" role="img" aria-label="Hilo con corriente saliente rodeado por una curva cerrada cualquiera; en un punto, B tangente a la circunferencia, dl a lo largo de la curva y el ángulo d phi">
  <circle cx="150" cy="122" r="95.4" class="s-dash" style="opacity:.7"/>
  <path d="M272,150 C272,110 258.7,78.8 230,70 C196.5,59.8 180,34 140,34 C90,34 46,74 46,124 C46,174 96,214 150,214 C204,214 272,190 272,150 Z" class="s-ln"/>
  <line x1="140" y1="214" x2="164" y2="214" class="s-ln" marker-end="url(#aF)"/>
  <text x="280" y="196" class="t-i">ℓ</text>
  <circle cx="150" cy="122" r="9" class="s-ln"/><circle cx="150" cy="122" r="2.5" class="f-fg"/>
  <text x="122" y="152" class="t-i halo" style="font-size:12px">I (sale)</text>
  <line x1="150" y1="122" x2="250" y2="122" class="s-ln" style="stroke-width:1;stroke-dasharray:3 3"/>
  <line x1="150" y1="122" x2="230" y2="70" class="s-ln" style="stroke-width:1"/><text x="180" y="90" class="t-i" style="font-size:13px">r</text>
  <path d="M188,122 A38,38 0 0 0 181.9,101.3" class="s-ln" style="stroke-width:1.2"/><text x="194" y="117" class="t-i" style="font-size:13px">φ</text>
  <circle cx="230" cy="70" r="3.5" class="f-fg"/>
  <line x1="230" y1="70" x2="208.2" y2="36.4" class="s-b" marker-end="url(#aB)"/><text x="214" y="32" class="t-b">B</text>
  <line x1="230" y1="70" x2="191.8" y2="58.3" class="s-g" marker-end="url(#aG)" style="stroke-width:2.6"/><text x="176" y="72" class="t-g" style="font-size:13px">dl</text>
  <path d="M207.1,63 A24,24 0 0 1 216.9,49.9" class="s-ln" style="stroke-width:1.2"/><text x="199" y="55" class="t-i" style="font-size:13px">θ</text>
  <text x="160" y="234" class="t-s" text-anchor="middle">B tangente a la circunferencia de radio r</text>
 </svg>`,
 math:[
  R`B=\frac{\mu_0 I}{2\pi r}\quad(\text{tangente})`,
  R`\vec B\cdot d\vec l=B\,dl\cos\theta=B\,r\,d\varphi`,
  R`\begin{aligned}\oint_\ell\vec B\cdot d\vec l&=\int_0^{2\pi}\frac{\mu_0 I}{2\pi r}\,r\,d\varphi\\&=\frac{\mu_0 I}{2\pi}\int_0^{2\pi}d\varphi=\mu_0 I\end{aligned}`,
  R`\begin{aligned}&\text{corriente no concatenada:}\\&\text{los aportes se anulan}\ \Rightarrow\ \oint_\ell\vec B\cdot d\vec l=0\end{aligned}`,
  R`\oint_\ell\vec B\cdot d\vec l=\mu_0\sum I`
 ], res:[2,4],
 why:[
  "<b>Parte del campo del hilo</b> (D22): B tangente a las circunferencias, de módulo μ₀I/(2πr).",
  "<b>dl cos θ = r dφ:</b> la componente de dl en la dirección de B es lo que avanza girando alrededor del hilo.",
  "<b>El r se cancela:</b> el resultado no depende de la forma de la curva, solo de que dé una vuelta completa alrededor de la corriente (concatenada).",
  "<b>Si la curva no rodea la corriente,</b> lo que suma en un tramo se resta en el otro: circulación cero.",
  "<b>Por superposición</b> vale para cualquier cantidad de corrientes: ∮B·dl = μ₀ΣI."
 ]}
];

EXTRA.forEach(d => {
  const at = window.DESARROLLOS.findIndex(x => x.id === d.despues);
  const item = Object.assign({}, d); delete item.despues;
  window.DESARROLLOS.splice(at + 1, 0, item);
});

// Leyendas de los desarrollos nuevos
Object.assign(window.LEYENDAS = window.LEYENDAS || {}, {
D02b:{ s:[["σ","densidad superficial de carga del plano","C/m²"],["E","campo eléctrico, perpendicular al plano","V/m"],["z","distancia al plano (eje perpendicular)","m"],["dl","desplazamiento de i a f","m"],["ΔV","diferencia de potencial, V_f − V_i","V"],["C","constante arbitraria (no se puede poner V = 0 en el ∞)","V"],["ε₀","permitividad del vacío","F/m"]],
 l:"La línea gruesa vertical es el plano cargado visto de canto, con el eje z perpendicular a él. E sale perpendicular hacia los dos lados. La curva violeta es un camino cualquiera de i a f: solo importa cuánto cambia z. A la derecha, el gráfico V–z: un triángulo con el vértice en el plano." },
D02c:{ s:[["λ","densidad lineal de carga del hilo","C/m"],["ρ","distancia al hilo","m"],["ρi, ρf","distancias de i y f al hilo","m"],["E","campo eléctrico (radial)","V/m"],["dl","desplazamiento de i a f","m"],["ΔV","diferencia de potencial, V_f − V_i","V"],["ln","logaritmo natural","—"]],
 l:"El hilo se ve de frente (sale de la hoja) en el centro. E sale radial en todas direcciones. Las circunferencias punteadas son de radio constante. La curva violeta va de i (a distancia ρi) hasta f (a distancia ρf): solo cuenta cuánto se aleja del hilo." },
D11b:{ s:[["Q","carga de cada cilindro (+Q adentro, −Q afuera)","C"],["λ","carga por unidad de largo, λ = Q/L","C/m"],["L","largo de los cilindros","m"],["rᵢ, rₑ","radio del cilindro interior y del exterior","m"],["r","distancia al eje, entre rᵢ y rₑ","m"],["E","campo eléctrico entre los cilindros","V/m"],["V","diferencia de potencial entre cilindros","V"],["C","capacidad","F"]],
 l:"Es un corte transversal: el círculo chico relleno es el cilindro interior (+Q) y el grande, el exterior (−Q). E sale radial del interior hacia el exterior. rᵢ y rₑ son los dos radios; el largo L es perpendicular a la hoja." },
D11c:{ s:[["Q","carga de cada conductor (+Q adentro, −Q afuera)","C"],["rᵢ","radio de la esfera interior","m"],["rₑ","radio de la cáscara exterior","m"],["r","distancia al centro, entre rᵢ y rₑ","m"],["E","campo eléctrico entre las esferas","V/m"],["V","diferencia de potencial","V"],["k","constante de Coulomb, 1/(4πε₀)","N·m²/C²"],["R","radio de la esfera aislada","m"],["C","capacidad","F"]],
 l:"El círculo relleno es la esfera interior (+Q) y el círculo grande, la cáscara exterior (−Q). E sale radial entre las dos, como el de una carga puntual en el centro. Si la cáscara se aleja al infinito, queda una esfera aislada." },
D29:{ s:[["I","corriente del conductor","A"],["dl","tramito de conductor, en el sentido de I","m"],["l","vector de largo del segmento, de i a f","m"],["B","campo magnético uniforme","T"],["dq","carga que avanza dl en un tiempo dt","C"],["F","fuerza magnética sobre el conductor","N"]],
 l:"Las líneas azules verticales son el campo B uniforme, hacia abajo. El segmento horizontal de largo l lleva la corriente I hacia la derecha. La fuerza es perpendicular a los dos, por eso entra a la hoja (⊗). Si el segmento fuera paralelo a las líneas azules, F = 0." },
D30:{ s:[["I₁, I₂","corrientes de cada conductor","A"],["r","distancia entre los conductores","m"],["B₁","campo del conductor 1 en el lugar del conductor 2","T"],["l₂","largo del conductor 2","m"],["F₁, F₂","fuerza sobre cada conductor","N"],["F/l","fuerza por unidad de largo","N/m"],["μ₀","permeabilidad del vacío","T·m/A"]],
 l:"Dos conductores verticales a distancia r, los dos con la corriente hacia arriba. El campo del 1 en el lugar del 2 entra a la hoja (⊗). Las flechas F₁ y F₂ apuntan una hacia la otra: con corrientes del mismo sentido se atraen." },
D31:{ s:[["I","corriente del hilo (sale de la hoja)","A"],["ℓ","curva cerrada cualquiera que rodea al hilo","—"],["r","distancia del hilo a un punto de la curva","m"],["φ","ángulo alrededor del hilo","rad"],["dl","tramito de la curva","m"],["θ","ángulo entre B y dl","rad"],["B","campo del hilo, tangente a la circunferencia de radio r","T"],["μ₀","permeabilidad del vacío","T·m/A"]],
 l:"El hilo sale de la hoja (⊙) y la curva ℓ lo rodea con una forma cualquiera. En un punto de la curva, B es tangente a la circunferencia punteada que pasa por ahí, y dl sigue la curva. Lo que cuenta es la parte de dl que gira alrededor del hilo: r·dφ." }
});
})();
