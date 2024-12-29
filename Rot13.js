const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  console.log(rot13("Codewars"));
  console.log(rot13("Test")); //Grfg
});

function rot13(message) {
  let result = "";
  for (letter of message) {
    let code = letter.charCodeAt(0);
    switch (true) {
      case code >= 65 && code < 91:
        if (code + 13 > 90) {
          code -= 13;
        } else {
          code += 13;
        }
        result += String.fromCharCode(code);
        break;
      case code >= 97 && code < 123:
        if (code + 13 > 122) {
          code -= 13;
        } else {
          code += 13;
        }
        result += String.fromCharCode(code);
        break;
      default:
        result += String.fromCharCode(code);
        break;
    }
  }
  return result;
}
