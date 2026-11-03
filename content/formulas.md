# Física II · Machete de fórmulas U8–U11

## U8 · Capacitores y carga

| Relación | Fórmula |
|---|---|
| Capacidad | `C = Q/ΔV` · `Q = CΔV` |
| Placas paralelas en vacío/aire | `C = ε₀A/d` |
| Capacitores en **serie** | `1/Ceq = Σ(1/Ci)` · **comparten Q** · `ΔVtotal = ΣΔVi` |
| Capacitores en **paralelo** | `Ceq = ΣCi` · **comparten ΔV** · `Qtotal = ΣQi` |
| Resistencia en **serie** | `Req = ΣRi` · **comparten I** · `Vtotal = ΣVi` |
| Resistencias en **paralelo** | `1/Req = Σ(1/Ri)` · **comparten V** · `Itotal = ΣIi` |
| Paralelo de dos | `Ceq = C1C2/(C1+C2)` · `Req = R1R2/(R1+R2)` |
| Carga/energía | `U = ½C(ΔV)² = Q²/(2C) = ½QΔV` |
| Reparto de carga aislada | `ΔVf = (ΣsiQi)/(ΣCi)` · `Qif = CiΔVf` (`si=±1`, según polaridad inicial) |
| Cambio con batería | conectada: `ΔV` cte, `Q=CΔV` · desconectada: `Q` cte, `ΔV=Q/C` |

## U9 · Corriente y resistividad

| Magnitud | Fórmula |
|---|---|
| Corriente y carga | `I = ΔQ/Δt` · `Q = It` |
| Densidad/deriva | `J = I/A` · `I = n|q|Avd` · `vd = I/(n|q|A)` |
| Campo/conductor | `E = ρJ` · `|ΔV| = EL` · `R = ρL/A` · `V = IR` |
| Sección circular | `A = πD²/4` · `m = δmAL` |
| Temperatura | `R(T)=R₀[1+α(T−T₀)]` |
| Potencia/energía/costo | `P=VI=I²R=V²/R` · `W=Pt` · Costo [moneda] = Energía [kWh] × tarifa [moneda/kWh] |
| Calor eléctrico | `Qcal=ηPt` · `Qcal=mcΔT` · `Qfase=mLf` o `mLv` |
| Fuente con resistencia interna | `I=ε/(R+rint)` · descargando: `Vt=ε−Irint=IR` · `Icc=ε/rint` |
| Resistor: límite de potencia | `Vmax=√(PmaxR)` · `Imax=√(Pmax/R)` |

### Circuito RC

`τ=RC`

| Proceso | Carga | Tensión | Corriente |
|---|---|---|---|
| Carga | `q=Cε(1−e^(−t/τ))` | `VC=ε(1−e^(−t/τ))` | `I=(ε/R)e^(−t/τ)` |
| Descarga | `q=q₀e^(−t/τ)` | `VC=V₀e^(−t/τ)` | `|I|=(V₀/R)e^(−t/τ)` |

`t_carga=−τ ln(1−q/Qf)` · `t_descarga=−τ ln(q/q₀)` · `90\%=2,30τ` · `99\%=4,61τ`  
`UC=½CVC²` · `WR=½Cε²(1−e^(−2t/τ))` · `Wfuente=Cε²(1−e^(−t/τ))` · `R_fuga=−t/[C ln(V/V₀)]`

## U10 · Circuitos de corriente continua

| Ley / instrumento | Fórmula |
|---|---|
| Nodo (Kirchhoff) | `ΣIentrantes = ΣIsalientes` |
| Malla (Kirchhoff) | `ΣΔV = 0` |
| Resistor | `ΔV = IR` |
| Corrientes de rama | serie: `I1=I2=…` · paralelo: `Ii=Vi/Ri` |
| Divisor de tensión en serie | `Vi = Vtotal Ri/ΣR` |
| Divisor de corriente, dos ramas | `I1=Itotal R2/(R1+R2)` · `I2=Itotal R1/(R1+R2)` |
| Amperímetro ideal | `RA≈0` · conexión en serie |
| Voltímetro ideal | `RV→∞` · conexión en paralelo |
| Galvanómetro → amperímetro (shunt) | `Rsh=IgRg/(Imax−Ig)` |
| Galvanómetro con resistor serie `Rx` y shunt | `R_x=R_{sh}\dfrac{I-I_g}{I_g}-R_g` |
| Galvanómetro → voltímetro | `Rs=Vmax/Ig−Rg` |
| Wheatstone (puente clásico) | `Ig=0` · `R1/R2 = R3/R4` (según ubicación de los brazos) |

## U11 · Biot–Savart inclusive

| Configuración | Campo magnético |
|---|---|
| Elemento de corriente | `d\vec B=\dfrac{\mu_0I}{4\pi}\dfrac{d\vec\ell\times\hat r}{r^2}` |
| Hilo recto infinito | `B=μ₀I/(2πr)` |
| Segmento finito | `B=μ₀I/(4πr)(sinθ₁+sinθ₂)`; θ medidos desde la perpendicular; ambos positivos si su pie cae entre extremos; si queda fuera, restar contribuciones |
| Segmento simétrico, largo `2a` | `B=μ₀Ia/[2πr√(r²+a²)]` |
| Espira circular, eje a distancia `z` | `Bz=μ₀Ia²/[2(a²+z²)^(3/2)]` |
| Espira, centro (`z=0`) | `B=μ₀I/(2a)` |
| Bobina circular de `N` vueltas | `Btotal=NBespira` |
| Superposición | `\vec B_{total}=\sum_i\vec B_i` · campo nulo: `\sum_i\vec B_i=0` |
| Hilo y campo terrestre perpendiculares | `tanθ=B_hilo/BT` · `BR=√(B_hilo²+BT²)` |

## Símbolos y unidades SI

`Q,q` [C] · `Qcal` [J o cal] · `I,Ig,Imax,Icc` [A] · `t,τ` [s] · `V,ΔV,ε` [V] · `R,rint,Rg,Rsh,Rs` [Ω] · `C` [F] · `U,W` [J] · `P` [W] · `ε₀` [F/m] · `A` [m²] · `d,L,D,a,z,r,ℓ` [m] · `J` [A/m²] · `n` [m⁻³] · `vd` [m/s] · `E` [V/m] · `ρ` [Ω·m] · `δm` [kg/m³] · `m` [kg o g] · `T,T₀,ΔT` [K o °C] · `α` [K⁻¹] · `η,sᵢ,N` [adimensional] · `c` [J/(kg·K) o cal/(g·°C)] · `Lf,Lv` [J/kg o cal/g] · `μ₀=4π×10⁻⁷` [T·m/A] · `B` [T] · `θ,θ₁,θ₂` [° o rad] · `tarifa` [moneda/kWh].

`1 kWh=3,6×10⁶ J` · `1 G=10⁻⁴ T` · `1 mA=10⁻³ A` · `1 μC=10⁻⁶ C` · `1 mm²=10⁻⁶ m²`

**Alcance:** U8 sin dieléctricos. U11 práctico hasta Biot–Savart: hilos y espiras; quedan fuera solenoides, toroides y fuerzas magnéticas. La demostración teórica de Lorentz se conserva en la sección de desarrollos.
