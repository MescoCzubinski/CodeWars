const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  console.log(two(plus(one())));
});

function zero(arg = null) {
  return arg == null ? 0 : arg;
}
function one(arg = null) {
  return arg == null ? 1 : arg;
}
function two(arg = null) {
  return arg == null ? 2 : arg;
}
function three(arg = null) {
  return arg == null ? 3 : arg;
}
function four(arg = null) {
  return arg == null ? 4 : arg;
}
function five(arg = null) {
  return arg == null ? 5 : arg;
}
function six(arg = null) {
  return arg == null ? 6 : arg;
}
function seven(arg = null) {
  return arg == null ? 7 : arg;
}
function eight(arg = null) {
  return arg == null ? 8 : arg;
}
function nine(arg = null) {
  return arg == null ? 9 : arg;
}

function plus(arg) {
  return arg;
}
function minus(arg) {}
function times(arg) {}
function dividedBy(arg) {}
