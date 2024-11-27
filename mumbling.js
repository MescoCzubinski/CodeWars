const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  accum(s);
});

let s = "NyffsGeyylB"; //N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb
function accum(s) {
  s = s.toLowerCase();
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      result += s[i];
    }
    if (i !== s.length - 1) {
      result += "-";
    }
  }
  return result;
}
