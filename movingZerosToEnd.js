const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function () {
  console.log(moveZeros(arr))
});

let arr = [false,1,0,1,2,0,1,3,"a"]
function moveZeros(arr) {
    for(element of arr){
        if(element === 0){
            arr.splice(arr.indexOf(0), 1)
            arr.push(0)
        }
    }
    return arr
}