# Física II · 2º parcial

Preguntero y desarrollos para el 2º parcial de Física II (UTN FRC): teórico de Andrade y preguntas de laboratorio.

## Qué tiene

- **Practicar**: preguntas de opción múltiple en orden aleatorio, con dificultad básica, media y difícil, corregidas al instante. Si te equivocás, te explica por qué la que marcaste está mal.
  - Desarrollos (opcional): escribís en papel, destapás y pasás al siguiente, sin corrección manual.
  - Filtros por tipo, parte (teórico o laboratorio), dificultad, "solo lo que dijo el profe" y "solo mis errores".
- **Desarrollos**: 30 desarrollos con dibujo esquemático y solo la lógica matemática, como pide la consigna, con qué es cada letra y cómo leer el dibujo. Prioridad de 1 a 5 estrellas: "por prioridad" los da de 5★ a 1★, mezclando dentro de cada nivel. El modo examen tapa todo menos la consigna.
- **Laboratorio**: TP1 calorimetría y TP2 instrumentos de medición, etiquetados como laboratorio.

## Material de estudio

- [Descargar el machete de fórmulas y desarrollos de Física II](material/Machete_Fisica_II_U8_U11_Formulas_y_Desarrollos.pdf). Reúne recetas de resolución para los ejercicios prácticos de U8–U11 y los 12 desarrollos teóricos, con gráficos y unidades. U11 práctico llega hasta Biot–Savart inclusive.

## Teclado

| Tecla | Acción |
|---|---|
| `1`–`4` | elegir opción |
| `Enter` / `Espacio` | mostrar la respuesta o pasar a la siguiente |
| `Esc` | terminar la tanda |

## Estructura

```
parcial2/
  index.html          vistas: #practicar, #desarrollos, #como
  css/app.css         estilos (claro y oscuro, celular)
  js/preguntas.js         banco de preguntas (opción múltiple, dos renglones, laboratorio)
  js/preguntas-extra.js   preguntas tomadas de la carpeta de Andrade
  js/preguntas-mc2.js     más preguntas de opción múltiple (teórico y laboratorio)
  js/desarrollos.js       desarrollos: dibujo SVG + líneas TeX
  js/desarrollos-extra.js desarrollos de la carpeta de Andrade
  js/leyendas.js          qué es cada letra y cómo leer cada dibujo
  js/estrellas.js         prioridad de cada desarrollo (1 a 5)
  js/app.js           lógica del preguntero y de la vista de desarrollos
  vendor/tex-svg.js   MathJax 3.2.2 (local, funciona sin CDN)
```

Es HTML estático, no necesita build. El progreso (errores y desarrollos tildados) se guarda en el navegador con el prefijo `fis2p2:`.

## Publicar en GitHub Pages

Esta carpeta va dentro del repo `Fisica2`, sin tocar su build:

```bash
cp -R parcial2 /ruta/al/repo/Fisica2/
cd /ruta/al/repo/Fisica2
git add parcial2
git commit -m "Agregar preguntero y desarrollos del 2º parcial"
git push
```

Con Pages activado en `main` / root queda en `https://<usuario>.github.io/Fisica2/parcial2/`.

Para probarlo en local: `python3 -m http.server` dentro de la carpeta y abrir `http://localhost:8000`.

## Aviso

Material de estudio armado con ayuda de IA a partir de apuntes de clase. Puede tener errores: ante cualquier duda, vale lo que dio el profesor.
