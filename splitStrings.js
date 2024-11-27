const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    console.log(solution(str))
})

let str = "abcdef"
function solution(str){
   arr = new Array(Math.ceil(str.length/2)).fill("__")
   for(let i=0; i<str.length/2 - 1; i++){
    arr[i] = str[i*2] + str[i*2+1]
   }
   str.length % 2 !== 0
        ? arr[arr.length-1] = str[str.length-1] + "_"
        : arr[arr.length-1] = str[str.length-2] + str[str.length-1]
   return arr
}