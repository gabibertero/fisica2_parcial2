#!/usr/bin/env python3
"""Build small static HTML fragments from the study notes in content/."""
from html import escape
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


def inline(value: str) -> str:
    def math_format(raw):
        replacements = {
            "Ceq": r"C_{\mathrm{eq}}", "Req": r"R_{\mathrm{eq}}", "Pmax": r"P_{\max}",
            "Qif": r"Q_{i,f}", "Ci": r"C_i", "Ri": r"R_i", "Qi": r"Q_i", "Ii": r"I_i", "Vi": r"V_i",
            "Qf": r"Q_f", "Qtotal": r"Q_{\rm total}", "ΔVtotal": r"\Delta V_{\rm total}",
            "ΔVi": r"\Delta V_i", "ΔVf": r"\Delta V_f", "Itotal": r"I_{\rm total}",
            "Vtotal": r"V_{\rm total}", "Imax": r"I_{\max}", "Vmax": r"V_{\max}",
            "Icc": r"I_{\mathrm{cc}}", "Ientrantes": r"I_{\mathrm{ent}}", "Isalientes": r"I_{\mathrm{sal}}",
            "Rsh": r"R_{\mathrm{sh}}", "Rs": r"R_s", "Ig": r"I_g", "Rg": r"R_g",
            "RA": r"R_A", "RV": r"R_V", "Rm": r"R_m", "Rx": r"R_x",
            "Ra": r"R_a", "Rb": r"R_b", "Rc": r"R_c", "Rd": r"R_d",
            "rint": r"r_{\mathrm{int}}", "Qcal": r"Q_{\mathrm{cal}}",
            "Qfase": r"Q_{\mathrm{fase}}", "VC": r"V_C", "Vt": r"V_t", "Q₀": r"Q_0",
            "V₀": r"V_0", "q₀": r"q_0", "BT": r"B_T", "BR": r"B_R",
            "Bz": r"B_z", "Btotal": r"B_{\rm total}", "Bespira": r"B_{\rm espira}",
            "Bhilo": r"B_{\mathrm{hilo}}", "Rfuga": r"R_{\mathrm{fuga}}", "Wfuente": r"W_{\mathrm{fuente}}",
            "UC": r"U_C", "WR": r"W_R", "tcarga": r"t_{\mathrm{carga}}", "tdescarga": r"t_{\mathrm{descarga}}",
            "vd": r"v_d", "δm": r"\delta_m", "sᵢ": r"s_i", "Lf": r"L_f", "Lv": r"L_v",
            "sin": r"\sin", "tan": r"\tan",
        }
        raw = raw.replace("ΣsiQi", "Σs_iQ_i").replace("si=±1", "s_i=±1")
        for old, new in replacements.items():
            raw = raw.replace(old, new)
        raw = re.sub(r"(?<![A-Za-z\\])([CRIVQ])([0-9])", r"\1_{\2}", raw)
        fraction = re.compile(r"(?P<num>[\w\\{}]+)\s*/\s*(?P<den>\[[^\[\]]+\]|\([^()]*\)|[\w\\{}]+)")
        def format_fraction(match):
            denominator = match.group("den")
            if (denominator.startswith("[") and denominator.endswith("]")) or (denominator.startswith("(") and denominator.endswith(")")):
                denominator = denominator[1:-1]
            return rf"\dfrac{{{match.group('num')}}}{{{denominator}}}"
        raw = fraction.sub(format_fraction, raw)
        return r"\(" + escape(raw, quote=False) + r"\)"

    value = re.sub(r"`([^`]+)`", lambda m: math_format(m.group(1)), value)
    math_parts = []
    def protect_math(match):
        math_parts.append(escape(match.group(0), quote=False))
        return f"@@MATH{len(math_parts)-1}@@"
    value = re.sub(r"\\\((.+?)\\\)|\\\[(.+?)\\\]", protect_math, value)
    value = escape(value, quote=False)
    value = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", value)
    value = re.sub(r"\*(.+?)\*", r"<em>\1</em>", value)
    for index, math in enumerate(math_parts):
        value = value.replace(f"@@MATH{index}@@", math)
    return value


def split_sections(text: str):
    current = None
    lines = []
    for line in text.splitlines():
        if line.startswith("## "):
            if current:
                yield current, lines
            current, lines = line[3:].strip(), []
        elif current:
            lines.append(line)
    if current:
        yield current, lines


def render_table(lines):
    def cells(line):
        value = line.strip().strip("|")
        result, current = [], []
        in_code = False
        for char in value:
            if char == "`":
                in_code = not in_code
            if char == "|" and not in_code:
                result.append("".join(current).strip())
                current = []
            else:
                current.append(char)
        result.append("".join(current).strip())
        return result

    rows = [cells(line) for line in lines]
    rows = [row for row in rows if not all(re.fullmatch(r"[-: ]+", cell or " ") for cell in row)]
    if not rows:
        return ""
    out = [f'<div class="table-scroll cols-{len(rows[0])}"><table><thead><tr>']
    out += [f"<th>{inline(c)}</th>" for c in rows[0]]
    out.append("</tr></thead><tbody>")
    for row in rows[1:]:
        out.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in row) + "</tr>")
    out.append("</tbody></table></div>")
    return "".join(out)


def build_formulas():
    text = (ROOT / "content/formulas.md").read_text()
    result = []
    anchor = {"U8": "u8", "U9": "u9", "U10": "u10", "U11": "u11"}
    for title, lines in split_sections(text):
        if title.startswith("Símbolos"):
            result.append(f'<article class="symbols"><h2>{inline(title)}</h2>')
        elif title.startswith("U"):
            unit = title.split(" · ", 1)[0]
            result.append(f'<article id="{anchor.get(unit, "")}"><h2>{inline(title)}</h2>')
        else:
            continue
        i = 0
        while i < len(lines):
            line = lines[i].strip()
            if not line:
                i += 1
                continue
            if line.startswith("### "):
                result.append(f"<h3>{inline(line[4:])}</h3>")
                i += 1
                continue
            if line.startswith("|"):
                table = []
                while i < len(lines) and lines[i].strip().startswith("|"):
                    table.append(lines[i].strip())
                    i += 1
                result.append(render_table(table))
                continue
            if line.startswith("**Alcance:**"):
                result.append(f'<p class="scope-inline">{inline(line)}</p>')
            elif line.startswith("`") or line.startswith("**"):
                result.append(f"<p>{inline(line)}</p>")
            else:
                result.append(f"<p>{inline(line)}</p>")
            i += 1
        result.append("</article>")
    (ROOT / "content/formulas.html").write_text("\n".join(result))


def build_developments():
    text = (ROOT / "content/desarrollos.md").read_text()
    ordered = text.split("## Orden de los 12 desarrollos del apunte", 1)[1].split("## Dibujos y símbolos a conservar", 1)[0]
    chunks = re.split(r"(?=^### \d+\.)", ordered, flags=re.M)
    result = []
    for chunk in chunks:
        title_match = re.match(r"### (\d+)\.\s+(.+)", chunk)
        if not title_match:
            continue
        number, title = title_match.groups()
        result.append(f'<details id="desarrollo-{number}"><summary><span>{int(number):02d}</span>{inline(title)}</summary><div class="dev-body">')
        lines = chunk.splitlines()[1:]
        steps = []
        notes = []
        drawing = ""
        meta = ""
        current_step = None
        after_steps = False
        for raw in lines:
            line = raw.strip()
            if not line:
                continue
            if line.startswith("**Fuente:"):
                drawing_match = re.search(r"\*\*Dibujo:\*\*(.*)", line)
                drawing = drawing_match.group(1).strip() if drawing_match else ""
                meta = line.split("**Dibujo:**", 1)[0].strip()
                continue
            step_match = re.match(r"(\d+)\.\s+(.*)", line)
            if step_match:
                if current_step:
                    steps.append(current_step)
                current_step = [step_match.group(2), ""]
                after_steps = True
                continue
            if current_step and not current_step[1] and not line.startswith("**Nota"):
                current_step[1] = line
            else:
                notes.append(line)
        if current_step:
            steps.append(current_step)
        if meta:
            result.append(f'<p class="dev-meta">{inline(meta)}</p>')
        if drawing:
            result.append(f'<figure class="dev-drawing" data-diagram="{int(number)}" role="img" aria-label="{inline(drawing)}"></figure>')
        if steps:
            result.append("<ol>")
            for equation, explanation in steps:
                result.append(f"<li><div>{inline(equation)}</div>{f'<p>{inline(explanation.strip())}</p>' if explanation.strip() else ''}</li>")
            result.append("</ol>")
        for note in notes:
            result.append(f'<p class="dev-note">{inline(note)}</p>')
        result.append("</div></details>")
    (ROOT / "content/desarrollos.html").write_text("\n".join(result))


def build_questions():
    text = (ROOT / "content/preguntas_conceptuales.md").read_text()
    result = []
    current_unit = None
    for line in text.splitlines():
        line = line.strip()
        if line.startswith("# "):
            continue
        if line.startswith("## "):
            if current_unit:
                result.append("</section>")
            title = line[3:].strip()
            if title.startswith("U"):
                current_unit = title.split(" · ", 1)[0]
                result.append(f'<section class="question-unit" id="preguntas-{current_unit.lower()}"><h3>{inline(title)}</h3>')
            elif title.lower().startswith("laboratorio"):
                current_unit = "LAB"
                result.append(f'<section class="question-unit lab-questions" id="preguntas-lab"><h3>{inline(title)}</h3>')
            else:
                current_unit = None
            continue
        if line.startswith("### Pregunta "):
            result.append(f'<article class="question-card"><h4 class="question-title">{inline(line[4:])}</h4><div class="question-body">')
        elif line.startswith("**Consigna:**"):
            result.append(f'<p class="question-prompt">{inline(line.removeprefix("**Consigna:**").strip())}</p>')
        elif line.startswith("**Gráfico:**"):
            key = escape(line.removeprefix("**Gráfico:**").strip(), quote=True)
            result.append(f'<figure class="answer-diagram" data-question-diagram="{key}"></figure>')
        elif line.startswith("**Respuesta modelo:**"):
            result.append(f'<p class="model-answer"><b>Respuesta modelo</b><br>{inline(line.removeprefix("**Respuesta modelo:**").strip())}</p></div></article>')
        elif line.startswith("**Respuesta breve:**"):
            result.append(f'<p class="model-answer"><b>Respuesta breve</b><br>{inline(line.removeprefix("**Respuesta breve:**").strip())}</p></div></article>')
        elif line:
            result.append(f'<p>{inline(line)}</p>')
    result.append("</section>")
    (ROOT / "content/preguntas.html").write_text("\n".join(result))


if __name__ == "__main__":
    build_formulas()
    build_developments()
    build_questions()
