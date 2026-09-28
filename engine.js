/* PastaMath engine - pure functions, no DOM. Honest fresh-pasta math.
   Constants stated in the UI: 100 g flour per egg (classic rolled egg pasta),
   an egg is about 55 g, semolina extruded dough runs 100 g flour to 50 g water,
   one honest serving is 100 g of flour, fresh pasta keeps about 70% when dried,
   fresh cooks to 1.5x, dried to 2.2x, sauce about 90 g per 100 g fresh pasta. */
var PastaMath = (function () {
  var EGG_G = 55;
  function flourForEggs(eggs) { return eggs * 100; }
  function eggsForFlour(flourG) { return flourG / 100; }
  function eggDoughG(eggs) { return eggs * (100 + EGG_G); }
  function semolinaDoughG(flourG) { return flourG * 1.5; }
  function hydrationVerdict(style) {
    if (style === 'rolled') return 'Rolled egg dough wants the classic 100 g flour per egg - any wetter and it sticks to the roller.';
    if (style === 'extruded') return 'Extruded dough stays crumbly-dry, about 50 g water per 100 g semolina - wet dough gums the die.';
    return 'Hand-cut dough sits between: pliable, not sticky, and it rests 30 minutes before rolling.';
  }
  function servings(flourG, perServingG) {
    return Math.round(flourG / perServingG * 10) / 10;
  }
  function servingVerdict(perServingG) {
    if (perServingG < 80) return 'Under 80 g of flour per head is a primi portion - fine as a first course, thin as dinner.';
    if (perServingG <= 110) return 'The honest 100 g serving - one egg each, the Italian standard.';
    return 'Over 110 g per head is American-appetite territory - nobody leaves hungry, nobody leaves light.';
  }
  function driedG(freshG) { return freshG * 0.7; }
  function cookedG(pastaG, state) {
    return pastaG * (state === 'dried' ? 2.2 : 1.5);
  }
  function sauceG(freshPastaG) { return freshPastaG * 0.9; }
  function sauceVerdict(sauce, pasta) {
    var r = sauce / pasta;
    if (r < 0.7) return 'Sauce is a coating, not a soup - under 0.7x it will taste dry.';
    if (r <= 1.2) return 'Right in the band: the pasta finishes in the sauce and stays the point.';
    return 'Swimming - over 1.2x sauce-to-pasta and dinner becomes stew.';
  }
  return {
    flourForEggs: flourForEggs, eggsForFlour: eggsForFlour, eggDoughG: eggDoughG, semolinaDoughG: semolinaDoughG,
    hydrationVerdict: hydrationVerdict, servings: servings, servingVerdict: servingVerdict,
    driedG: driedG, cookedG: cookedG, sauceG: sauceG, sauceVerdict: sauceVerdict, EGG_G: EGG_G
  };
})();
if (typeof module !== 'undefined') module.exports = PastaMath;
