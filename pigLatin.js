function toPigLatin(toTranslate) {
 var processed = toTranslate
 .toLowerCase()
 .replace(/[^a-z0-9 ]/g, function(str) {
  return " " + str + " ";
 })
 .replace(/[aeiou]/g, function(str) {
  return "¦" + str + "¦";
 })
 ;

 var words = processed.split(" ");
 var newWords = [];

 words.forEach(function(word) {
  var arr = word.split("¦");
  if (/[a-z]/.test(arr[0][0])) {
   if (arr[0].length) {
    var firstEl = arr.shift();
    arr.push(firstEl + "ay");
   }
   else {
    if (arr[1] && /[a-z]/.test(arr[1][0]))
    arr.push("way");
   }
  }
  newWords.push(arr.join(""));
 });

 return newWords
 .join(" ")
 .replace(/ [^a-z0-9] /g, function(str) {
  return str.replace(/ /g,"");
 })
 .toSentenceCase();
 
}
