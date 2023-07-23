const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
function rot13(str) {
  //create accumulator//
  let accumulator = "";
  //loop thru the string//
  for (let i = 0; i < str.length; i++) {
    //if character is not a letter then add to acc
    const char = str[i];
    const isALetter = alphabet.includes(char);
    if (isALetter === false) {
      accumulator += char;
  //if char is a letter than + or - by 13. 
    } else {
        const charIndex = alphabet.findIndex((c) => c === char)
        //A => 0...or A gives you back 0 (index 0), Z => 25
        accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
        //In JS if you go too far in an array (past Z or index 25 in this case, it will return an error). The above charIndex + 13 tells it to add 13 to the char, but if that goes past the array/Z then the backup is to take charIndex - 13 as the backup which will definitely work
    } }
  return accumulator;
}

console.log(rot13("SERR PBQR PNZC"))
