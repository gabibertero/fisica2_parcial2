# Física II · Fórmulas para los ejercicios seleccionados

Esta hoja incluye solo las relaciones necesarias para resolver los ejercicios indicados de la guía práctica.

## U8 · Capacitores

| Situación | Fórmulas necesarias |
|---|---|
| Capacitores en **serie** | `1/Ceq = Σ(1/Ci)` · comparten carga: `Q1 = Q2 = …` · `ΔVtotal = ΣΔVi` |
| Capacitores en **paralelo** | `Ceq = ΣCi` · comparten tensión: `ΔV1 = ΔV2 = …` · `Qtotal = ΣQi` |
| Carga y tensión | `Q = CΔV` |
| Reparto de carga con la fuente desconectada | Se conserva la carga total: `Qinicial = ΣQfinal` · la red equivalente final cumple `ΔVf = Qinicial/Ceq` · cada capacitor en paralelo tiene `Qi = CiΔVf` |
| Energía almacenada y cambio de energía | `U = ½C(ΔV)²` · red equivalente: `U = ½Ceq(ΔV)²` · `ΔU = U_f − U_i` |

## U9 · Corriente eléctrica

| Situación | Fórmulas necesarias |
|---|---|
| Ley de Ohm | `ΔV = IR` |
| Resistencias en **serie** | `Req = ΣRi` · comparten corriente |
| Resistencias en **paralelo** | `1/Req = Σ(1/Ri)` · comparten tensión |
| Ley de mallas de Kirchhoff | En una malla cerrada: `ΣΔV = 0` |
| Variación de resistencia con temperatura | `R(T) = R₀[1 + α(T − T₀)]` · `R₀ = R(T)/[1 + α(T − T₀)]` |

## U10 · Circuitos de corriente continua

| Situación | Fórmulas necesarias |
|---|---|
| Resistencias en **serie** | `Req = ΣRi` · misma corriente en todos los elementos |
| Resistencias en **paralelo** | `1/Req = Σ(1/Ri)` · misma tensión en cada rama |
| Ley de Ohm | `ΔV = IR` |
| Ley de nodos | `ΣIentrantes = ΣIsalientes` |
| Ley de mallas | `ΣΔV = 0` |
| Medidores ideales (ej. 10.3) | Amperímetro: `RA≈0`, se conecta en serie · voltímetro: `RV→∞`, se conecta en paralelo |

## U11 · Campo magnético

| Situación | Fórmulas necesarias |
|---|---|
| Hilo recto largo | `B = μ₀I/(2πr)` |
| Superposición de campos | `\vec B_{total} = \sum_i\vec B_i` · sumá vectorialmente los aportes y determiná el sentido con la regla de la mano derecha |
| Espira circular, sobre su eje | `B_z = \dfrac{μ₀Ia²}{2(a² + z²)^{\frac{3}{2}}}` |
| Espira circular, en el centro (`z = 0`) | `B = μ₀I/(2a)` |
| Ley de Biot–Savart, para obtener el campo de la espira | `d\vec B = \dfrac{μ₀I}{4π}\dfrac{d\vec\ell × \hat r}{r²}` |

## Símbolos y unidades SI

`C, Ceq` capacidad [F] · `Q` carga [C] · `ΔV` tensión [V] · `U` energía [J] · `R, Req, Ri, R₀` resistencia [Ω] · `I` corriente [A] · `T, T₀, ΔT` temperatura [°C o K] · `α` coeficiente térmico [°C⁻¹ o K⁻¹] · `B` campo magnético [T] · `μ₀ = 4π×10⁻⁷` [T·m/A] · `r, a, z, ℓ` distancia o longitud [m].

**Ejercicios incluidos:** U8: 11, 14, 15, 18 y 22 · U9: 10, 11, 23, 26 y 27 · U10: 1, 2, 3, 6 y 7 · U11: 2, 6 y 8.
