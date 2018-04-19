function toSBrew (toTranslate) {
  var finalTranslation = "";
  var chanceValue1 = 0;
  var chanceValue2 = 0;
  var chanceOfEh = .5;
  var chanceOfYouHoser = .20;
  var changeOfYouKnob = .10;

  /*
  -We want to add 'eh' to the end of some sentences.
  -We also might want to add "Take off!"" to the beginning of sentences
  that end with !
  -Perhaps add 'You hoser' or 'You knob' if the sentence ends with !
  (This assumes the author is addressing someone.)
  -Need to check for sentences that already end with 'eh'.
  */

  toTranslate = toTranslate.replace(/\./g, function(str) {
    chanceValue1 = Math.random();
    if (chanceValue1 <= chanceOfEh) {
      return ", eh" + str;
    }
    else {
      return str;
    }
  });
// 50/50 whether it will test for Hoser or Knob suffix
  toTranslate = toTranslate.replace(/\!/g, function(str) {
    chanceValue2 = Math.random();
    if (chanceValue2 >= .5 && chanceValue2 <= chanceOfYouHoser) {
      return ", you hoser" + str;
    }
    else if (chanceValue2 <= .5 && chanceValue2 <= chanceOfYouKnob) {
      return ", you knob" + str;
    }
    else {
      return str;
    }
  });

  return toTranslate;
}
