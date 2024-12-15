const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  console.log(solution(list));
  console.log("-84,-82,-79--77,-74,-73,-71,-69,-68,-65,-64,-61");
});

list = [-84, -82, -79, -78, -77, -74, -73, -71, -69, -68, -65, -64, -61];
function solution(list) {
  let counter = 0;
  let result = "";
  let pretendent = "";
  for (let i = 0; i < list.length; i++) {
    if (pretendent === "") pretendent = list[i];
    console.log(list[i] + "(" + pretendent + ")" + " - " + counter);
    if (list[i] + 1 === list[i + 1]) {
      if (list[i + 1] + 1 !== list[i + 2] && counter === 0) {
        result += list[i] + ",";
        continue;
      }
      counter += 1;
    } else if (counter >= 2) {
      result += pretendent + "-" + list[i] + ",";
      pretendent = "";
      counter = 0;
    } else {
      result += list[i] + ",";
      pretendent = "";
    }
  }
  return result.slice(0, result.length - 1);
}
