# Borrador de desarrollos · Física II

## Criterio de alcance y fuentes

- La lista principal sigue los 12 apartados manuscritos de **2 Parcial Teórico.pdf**, páginas 1–5, en el mismo orden. Los títulos se transcriben de esos apartados; no se usan los rótulos D01–D28 del PDF auxiliar como nombres del profesor.
- El PDF auxiliar **Desarrollos-2do-parcial-Fisica2.pdf** y `Explicacion-desarrollos-2do-parcial.md` sirven para aclarar pasos algebraicos y dibujos; no son fuente para agregar demostraciones fuera de la lista manuscrita.
- `Teórico.pdf` de Downloads contiene vectores, rectas, planos y cónicas, no Física II; queda fuera de esta sección.
- En U11 se incluye Fuerza de Lorentz y Biot–Savart porque aparecen antes y hasta el límite indicado. Se excluyen los desarrollos posteriores (alambre grueso, espira axial, toroide y solenoide) cuando exceden el recorte acordado.
- El orden teórico del apunte (Lorentz antes de Biot–Savart) no coincide con el de la guía práctica: allí la serie de ejercicios llega a Biot–Savart antes de incluir fuerzas magnéticas en ejercicios posteriores. Por eso Lorentz queda en esta sección de desarrollos teóricos; el agente de fórmulas debe respetar el corte de ejercicios acordado por página/ejercicio, sin arrastrar los ejercicios posteriores.
- Las explicaciones debajo de cada paso son breves (una oración). En la hoja final los pasos deben conservar las ecuaciones y dibujos; las explicaciones son para estudio, no para copiar en el examen.

## Orden de los 12 desarrollos del apunte

### 1. U7 · Diferencia de potencial y campo electrostático
**Fuente:** 2 Parcial Teórico, p. 1. **Dibujo:** el campo uniforme \(\vec E\) ejerce sobre una carga positiva \(q_p\) una fuerza \(\vec F_e=q_p\vec E\); para moverla lentamente, la fuerza aplicada \(\vec F_a=-\vec F_e\) apunta en sentido contrario. El desplazamiento diferencial \(d\vec\ell\) es tangente al camino de \(i\) a \(f\).

1. \(\vec F_a=-\vec F_e=-q_p\vec E\)  
   La fuerza aplicada compensa la fuerza eléctrica.
2. \(W_a=\displaystyle\int_i^f\vec F_a\cdot d\vec\ell\)  
   El trabajo integra la fuerza en el desplazamiento.
3. \(W_a=-q_p\displaystyle\int_i^f\vec E\cdot d\vec\ell\)  
   Se reemplaza la fuerza aplicada y se extrae (q_p).
4. \(\Delta V=V_f-V_i=\dfrac{W_a}{q_p}=-\displaystyle\int_i^f\vec E\cdot d\vec\ell\)  
   La diferencia de potencial es trabajo por carga.

### 2. U7 · Potencial eléctrico de una carga puntual
**Fuente:** 2 Parcial Teórico, p. 1. **Dibujo:** carga puntual, radio (r), punto de observación y desplazamiento radial.

1. \(\vec E(r)=k\dfrac{q}{r^2}\hat r\)  
   El campo de una carga puntual es radial.
2. \(\Delta V=-\displaystyle\int_i^f\vec E\cdot d\vec\ell\)  
   Se parte de la relación entre potencial y campo.
3. \(\Delta V=-kq\displaystyle\int_{r_i}^{r_f}\dfrac{dr}{r^2}\)  
   En radial, \(\vec E\cdot d\vec\ell=E\,dr\).
4. \(\Delta V=kq\left(\dfrac1{r_f}-\dfrac1{r_i}\right)\)  
   La integración deja el resultado según los extremos.
5. Si \(V(\infty)=0\): \(V(r)=k\dfrac{q}{r}\)  
   Se elige el infinito como referencia de potencial nulo.

### 3. U7 · Ley de Gauss / superficie gaussiana
**Fuente:** 2 Parcial Teórico, p. 1. **Dibujo:** carga puntual dentro de una esfera gaussiana centrada en ella.

1. \(\Phi_E=\vec E\cdot\vec S=ES\cos\theta\)  
   Para campo uniforme, el flujo es un producto escalar.
2. \(d\Phi_E=\vec E\cdot d\vec S\)  
   En una superficie curva se integra cada elemento de flujo.
3. \(\Phi_E=\displaystyle\oint_S\vec E\cdot d\vec S\)  
   El flujo total se integra sobre una superficie cerrada.
4. \(\Phi_E=\dfrac{Q_{\mathrm{enc}}}{\varepsilon_0}\)  
   Gauss relaciona flujo neto y carga encerrada.
5. \(Q_{\mathrm{enc}}=\sum_i q_i\Rightarrow\Phi_E=\dfrac{\sum_i q_i}{\varepsilon_0}\)  
   Se suman algebraicamente las cargas encerradas.

### 4. U7 · Potencial en un plano infinito (simetría plana)
**Fuente:** 2 Parcial Teórico, p. 2. **Dibujo:** plano cargado, eje normal (z), puntos inicial y final.

1. En el semiespacio elegido, \(\vec E=\dfrac{\sigma}{2\varepsilon_0}\hat z\).  
   Por simetría, \(\vec E\) invierte sentido al otro lado.
2. \(\Delta V=-\displaystyle\int_i^f\vec E\cdot d\vec\ell\)  
   El recorrido relevante es normal al plano.
3. \(\Delta V=-\dfrac{\sigma}{2\varepsilon_0}\displaystyle\int_{z_i}^{z_f}dz\)  
   Sobre cada lado, el campo tiene módulo constante.
4. \(\Delta V=-\dfrac{\sigma}{2\varepsilon_0}(z_f-z_i)\)  
   La integración da la variación lineal con la coordenada.

### 5. U8 · Dipolo en un campo uniforme
**Fuente:** 2 Parcial Teórico, p. 2. **Dibujo:** cargas \(+q\) y \(-q\) separadas por \(d\), campo \(\vec E\) y brazos de torque.

1. \(\vec F_+=q\vec E\), \(\vec F_-=-q\vec E\), \(|q_+|=|q_-|=q\).  
   Las fuerzas tienen igual módulo y sentidos opuestos.
2. \(F_\mathrm{net}=0\), pero los torques tienen igual sentido.  
   La fuerza neta se anula, aunque queda un par de fuerzas.
3. \(\tau=F\dfrac d2\sin\alpha+F\dfrac d2\sin\alpha\)  
   Cada carga tiene brazo perpendicular \((d/2)\sin\alpha\).
4. \(\tau=qEd\sin\alpha\)  
   Al sustituir \(F=qE\), queda el torque del dipolo.

### 6. U8 · Capacitores
**Fuente:** 2 Parcial Teórico, p. 3. **Dibujo:** dos conductores, cargas opuestas, campo entre placas y superficie gaussiana que encierra un conductor.

1. \(\Delta V=V_2-V_1=-V=-\displaystyle\int_1^2\vec E\cdot d\vec\ell\)  
   El recorrido sigue el campo entre las placas.
2. \(Q=\varepsilon_0\displaystyle\oint_S\vec E\cdot d\vec S\)  
   Gauss vincula la carga del conductor con \(\vec E\).
3. \(Q=CV\)  
   La capacidad es carga sobre tensión entre placas.
4. \(C=\dfrac QV\) depende de la geometría de los conductores y su disposición.  
   Con geometría fija, \(Q\) y \(V\) son proporcionales.

**Nota de signo, p. 3 del apunte:** allí aparece \(V_2-V_1=+\int_1^2\vec E\cdot d\vec\ell\), pero el dibujo lleva el campo de la placa positiva 1 a la negativa 2. La convención definida en p. 1 exige \(\Delta V=V_2-V_1=-\int_1^2\vec E\cdot d\vec\ell\); por eso se conserva la forma físicamente coherente y se toma \(V=|\Delta V|\) en \(Q=CV\).

### 7. U8 · Capacitor plano infinito
**Fuente:** 2 Parcial Teórico, p. 3. **Dibujo:** placas paralelas, área (A), distancia (d), campo uniforme y pastilla gaussiana.

1. Hipótesis \(A\gg d^2\): entre placas \(E=\sigma/\varepsilon_0=Q/(\varepsilon_0A)\), fuera \(E\simeq0\).  
   Sin bordes, se suman los campos de ambas placas.
2. \(Q=\varepsilon_0\displaystyle\oint_S\vec E\cdot d\vec S=\varepsilon_0EA\)  
   Solo fluye por la cara dentro del campo.
3. Para la tensión positiva \(V=V_+-V_-\): \(V=Ed\).  
   Con campo uniforme, \(V=Ed\).
4. \(Q=CV\Rightarrow\varepsilon_0EA=CEd\)  
   Se igualan Gauss y la definición de capacidad.
5. \(C=\varepsilon_0\dfrac A d\)  
   Se simplifica el campo común a ambos miembros.

### 8. U8 · Circuito en paralelo (capacitores)
**Fuente:** 2 Parcial Teórico, p. 4. **Dibujo:** ramas entre los mismos nodos (a,b).

1. \(V_1=V_2=V_3=V_{ab}=\varepsilon\)  
   Cada capacitor queda conectado a los mismos dos nodos.
2. \(Q=Q_1+Q_2+Q_3\)  
   La carga total se reparte entre las ramas.
3. \(C_{eq}=\dfrac QV=\dfrac{Q_1}{V}+\dfrac{Q_2}{V}+\dfrac{Q_3}{V}\)  
   Se usa la misma tensión para todos los capacitores.
4. \(C_{eq}=C_1+C_2+C_3\)  
   Con \(C_i=Q_i/V\), las capacidades se suman.

### 9. U8 · Circuito en serie (capacitores)
**Fuente:** 2 Parcial Teórico, p. 4. **Dibujo:** capacitores en una sola rama y tensiones parciales.

1. \(\varepsilon=V_1+V_2+V_3\), \(\displaystyle\oint\vec E\cdot d\vec\ell=0\)  
   Las caídas de potencial suman la tensión del lazo.
2. \(Q=Q_1=Q_2=Q_3\)  
   En serie, cada capacitor adquiere la misma carga.
3. \(C_{eq}=\dfrac QV=\dfrac{Q}{V_1+V_2+V_3}\)  
   Se aplica la definición de capacidad equivalente.
4. \(\dfrac1{C_{eq}}=\dfrac VQ=\dfrac{V_1}{Q}+\dfrac{V_2}{Q}+\dfrac{V_3}{Q}\)  
   Se divide la suma de tensiones por la carga común.
5. \(\dfrac1{C_{eq}}=\dfrac1{C_1}+\dfrac1{C_2}+\dfrac1{C_3}\)  
   Se reemplaza \(V_i/Q=1/C_i\).

### 10. U9 · Ley de Ohm
**Fuente:** 2 Parcial Teórico, p. 4. **Dibujo:** conductor de longitud \(\ell\), sección (S), \(\vec J\) y \(\vec E\) uniformes.

1. \(\vec J=\sigma\vec E\)  
   En un óhmico, \(\vec J\) es proporcional a \(\vec E\).
2. \(I=\displaystyle\int_S\vec J\cdot d\vec S=JS=\sigma ES\)  
   Con \(J\) uniforme, se integra sobre la sección.
3. \(V=\displaystyle\int_\ell\vec E\cdot d\vec\ell=E\ell\)  
   Con \(E\) uniforme y paralelo, \(V=E\ell\).
4. \(\dfrac VI=\dfrac{E\ell}{\sigma ES}=\dfrac{\ell}{\sigma S}\)  
   Se dividen las expresiones de tensión y corriente.
5. \(V=IR,\quad R=\rho\dfrac{\ell}{S},\quad\rho=\dfrac1\sigma\)  
   Se identifican \(R\) y la resistividad \(\rho\).

### 11. U11 · Fuerza de Lorentz
**Fuente:** 2 Parcial Teórico, p. 5. **Dibujo:** \(\vec v\), \(\vec B\) y \(\vec F\) perpendiculares según la regla de la mano derecha.

1. \(\vec F=q\,\vec v\times\vec B\)  
   Mano derecha para \(q>0\); sentido opuesto si \(q<0\).
2. \([F]=[q][v][B]\)  
   Se igualan las dimensiones de ambos miembros.
3. \(\mathrm N=\mathrm C\,\dfrac{\mathrm m}{\mathrm s}\,\mathrm T\Rightarrow1\,\mathrm T=\dfrac{\mathrm N}{\mathrm A\,\mathrm m}\)  
   Con \(\mathrm A=\mathrm C/\mathrm s\), resulta \(1\,\mathrm T=1\,\mathrm N/(\mathrm A\,\mathrm m)\).

**Nota del apunte:** enumera como fuentes del campo magnético el magnetismo terrestre, los imanes naturales y artificiales, los electroimanes y las corrientes eléctricas; es una lista conceptual, no un paso de la demostración.

### 12. U11 · Ley de Biot–Savart
**Fuente:** 2 Parcial Teórico, p. 5. **Dibujo:** elemento \(d\vec\ell\), punto de observación (A), vector \(\vec r\) desde (A) al elemento, y contribución \(d\vec B_A\).

1. \(\vec B_A=-\dfrac{\mu_0I}{4\pi}\displaystyle\int_i^f\dfrac{d\vec\ell\times\hat r}{r^2}\)  
   El campo total suma los aportes de cada elemento.
2. \(d\vec B_A=-\dfrac{\mu_0I}{4\pi}\dfrac{d\vec\ell\times\hat r}{r^2}\)  
   Es el aporte diferencial según la convención del dibujo.

**Convención de signo:** el apunte dibuja \(\vec r\) desde el punto de observación (A) hacia el elemento de corriente y por eso escribe signo menos. Si \(\vec r\) se define al revés, la fórmula equivalente lleva signo más; el dibujo debe acompañar la convención elegida.

## Dibujos y símbolos a conservar

- Mantener dibujos simples, redibujados desde las figuras de las páginas citadas: recorrido y fuerzas (1), campo radial (2), esfera gaussiana (3), hoja cargada (4), dipolo (5), conductores y capacitor plano (6–7), ramas de capacitores (8–9), conductor uniforme (10), triada \(\vec v,\vec B,\vec F\) (11), y geometría de \(d\vec\ell,\vec r,A\) (12).
- Variables y unidades comunes: \(q,Q\,[\mathrm C]\), \(V,\Delta V\,[\mathrm V]\), \(E\,[\mathrm{N/C}]\), \(d\ell, r, \ell, d\,[\mathrm m]\), \(C\,[\mathrm F]\), \(A,S\,[\mathrm{m^2}]\), \(\sigma\,[\mathrm{C/m^2}]\), \(\tau\,[\mathrm{N\,m}]\), \(I\,[\mathrm A]\), \(J\,[\mathrm{A/m^2}]\), \(R\,[\Omega]\), \(\rho\,[\Omega\,\mathrm m]\), \(\sigma_{cond}\,[\mathrm{S/m}]\), \(B\,[\mathrm T]\), \(\mu_0\,[\mathrm{T\,m/A}]\).

## Separación respecto de la hoja de fórmulas prácticas

Las resoluciones de redes mixtas, redistribución de carga, batería conectada/desconectada, energía en capacitores, circuitos resistivos, Kirchhoff, instrumentos de medida, Wheatstone y problemas de campo magnético por tramos se desarrollan en la **hoja de fórmulas prácticas**, no se presentan como demostraciones del profesor salvo que su consigna aparezca en estos 12 apartados.

## Verificaciones pendientes antes de maquetar

1. La secuencia del apunte U8-capacitores p. 3 coloca primero la relación \(\Delta V\), pero contiene la errata de signo descrita arriba; mantener la corrección con la nota discreta.
2. En la fórmula de U11, revisar que el vector unitario \(\hat r\) y el signo se dibujen exactamente con la convención de la p. 5.
3. En el conductor plano, llamar \(V\) a la magnitud positiva entre placas y usar \(\Delta V\) solo si se especifican orden y extremos.
