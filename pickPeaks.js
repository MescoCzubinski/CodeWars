const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  console.log(pickPeaks(arr));
});
arr = [3, -4, -4, -2, 10, 10, 2, 3, -2, 6, 6, 1, 8, -4, 13, 11, 1, 9, 14, 14, 7, 2, -3, 11, 11, 3, 14, -3, -4, 5, 15, -4, 1, 11, 12, -3, 14, 8, 10, 6, 11, -3, 1, 7, 5, 12, 11];

function pickPeaks(arr) {
  let position = Array();
  let peaks = Array();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] >= arr[i + 1]) {
      let isPeak = true;
      if (arr[i] === arr[i + 1]) {
        isPeak = false;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            isPeak = true;
            break;
          } else if (arr[i] < arr[j]) {
            isPeak = false;
            break;
          }
        }
      }
      if (isPeak) {
        position.push(i);
        peaks.push(arr[i]);
      }
    }
  }
  return { pos: position, peaks: peaks };
}
