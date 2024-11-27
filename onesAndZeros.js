const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    binaryArrayToNumber(arr)
})

let arr = [1, 0, 0, 1] //11
function binaryArrayToNumber(arr){
    let number = 0
    for(let i = arr.length-1; i >= 0; i--){
        number += arr[i] * 2**(arr.length - (i + 1))
    }
    return number
};