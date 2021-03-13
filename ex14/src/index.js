function main() {
  var myNoun;
  var myVerb;
  var myAdjective;
  var myAdverb;

  myNoun = "dog";
  myVerb = "ran";
  myAdjective = "big";
  myAdverb = "quickly";

  var wordBlanks;
  wordBlanks =
    "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

  return wordBlanks;
}
console.log(main());
module.exports = main;
