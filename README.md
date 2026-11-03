# Física II · UTN FRC · Segundo parcial

Apuntes de estudio publicados como sitio web estático en GitHub Pages. La página reúne la hoja de fórmulas U8–U11 y los 12 desarrollos teóricos de U7–U11, con gráficos integrados.

## Contenido

- **Fórmulas:** hoja recortada a las relaciones necesarias para los ejercicios prácticos indicados en `content/formulas.md`; incluye asociaciones de capacitores y resistencias, Kirchhoff, variación térmica, campos de hilo y espira.
- **Comparación de redes:** asociación serie y paralelo de capacitores y resistencias, con diagramas y magnitudes comunes.
- **Desarrollos:** 12 demostraciones en el orden del apunte del profesor, con explicaciones breves por paso.
- **Gráficos:** redes, curva de carga RC, geometría de Biot–Savart y esquemas conceptuales.

## Publicación

El sitio está pensado para publicarse desde la rama `main`, carpeta raíz, en GitHub Pages. No requiere instalación ni genera archivos descargables.

## Editar el material

Editar `content/formulas.md` o `content/desarrollos.md` y regenerar los fragmentos HTML:

```sh
python3 tools/build_content.py
```

Los fragmentos generados se guardan en `content/*.html`. La página usa MathJax local desde `vendor/tex-svg.js`.
