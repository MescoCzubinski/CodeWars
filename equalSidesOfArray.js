const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  console.log(findEvenIndex(arr));
});

arr = [1, 100, 50, -51, 1, 1];
function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    sumLeft = 0;
    sumRight = 0;

    for (j = 0; j < i; j++) {
      sumLeft += arr[j];
    }
    for (let j = i + 1; j < arr.length; j++) {
      sumRight += arr[j];
    }
    if (sumLeft === sumRight) {
      return i;
    }
  }
  return -1;
}
