function toSBrew (toTranslate) {
  var finalTranslation = "";
  var chanceValue = Math.random();
  var chanceOfEh = .25;
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
    if (chanceValue <= chanceOfEh) {
      return ", eh" + str;
    }
  });

  toTranslate = toTranslate.replace(/\!/g, function(str) {
    if (chanceValue <= chanceOfYouHoser) {
      if (chanceValue <= chanceOfYouKnob) {
        return ", you knob" + str;
      }
      else {
        return ", you hoser" + str;
      }
    }
  });

  return toTranslate;
}
