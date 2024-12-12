const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  console.log(decodeMorse(morseCode));
});

let morseCode = ".... . -.--   .--- ..- -.. .";
function decodeMorse(morseCode) {
  //array MORSE_CODE[], e.g. MORSE_CODE['.--'] is privided by CodeWars
  let latin = "";
  let counter = 0;
  for (let letter of morseCode.split(" ")) {
    if (letter == "") {
      counter += 1;
    } else if (counter == 2) {
      latin += " ";
    }
    if (letter != "") {
      latin += MORSE_CODE[letter];
      counter = 0;
    }
  }
  return latin;
}
