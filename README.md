# Portfolio — Marek Kleszcz

Statyczna strona (HTML/CSS/JS, bez builda): **O mnie** (CV), **Projekty**, **Kontakt**.

- Podgląd: otwórz `index.html` w przeglądarce.
- Hosting: GitHub Pages / Cloudflare Pages — publikuj katalog główny.

## CV

Źródło w `cv/resume.tex` (Awesome CV, XeLaTeX). Po zmianie:

```sh
cd cv && xelatex resume.tex && cp resume.pdf ../assets/Marek_Kleszcz_CV.pdf
```

Opis zmian względem CV bazowego: `cv/changes.md`.
