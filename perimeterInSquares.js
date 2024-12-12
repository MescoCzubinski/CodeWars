const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  console.log(perimeter(5));
});

// function fib(n) {
//   return n === 0 || n === 1 ? 1.0 : fib(n - 1) + fib(n - 2);
// }
function perimeter(n) {
  let sum = 0;
  let n1 = 4;
  let n2 = 4;
  for (let i = 0; i <= n; i++) {
    sum += n1;
    [n1, n2] = [n2, n1 + n2];
  }
  return sum;
}
