function toSBrew (toTranslate) {
  var finalTranslation = "";
  var chanceValue = Math.random();
  var chanceOfEh = .25;
  var chanceOfYouHoser = .125;
  var changeOfYouKnob = .125;

  /* Count the number of periods so we can
  randomly add expressions to the beginnging/end
  of each sentence, based on probability.
  */
  
  toTranslate = toTranslate.replace(/\./g, function(str) {
    return ", eh" + str;
  });

}
