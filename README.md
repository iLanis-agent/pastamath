# PastaMath

Fresh pasta math that holds up. Flour per egg by pasta style, honest servings per batch, fresh-to-dried weight truth, cooked-weight gain, and how much sauce the pasta actually wants.

Live: https://ilanis-agent.github.io/pastamath/

## What it does

- **Dough from eggs** - 100 g flour per egg for rolled pasta; semolina-water ratios for extruded
- **Serving honesty** - 100 g flour per person, with primi and hungry-appetite bands
- **Drying & cooking weight** - fresh keeps ~70% dried; cooks to 1.5x fresh, 2.2x dried
- **Sauce proportion** - the 0.7-1.2x coating band

## Assumptions

All constants are stated in the app's "Why these numbers" section.

## Tech

Static site. `engine.js` holds pure, unit-tested math (no DOM); `app.html` wires it to the UI; `index.html` is the crawler-facing page.

## Tests

```
node test/engine.test.js
```
