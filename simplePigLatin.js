const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    console.log(pigIt(str))
})

str = "Hello world !"
function pigIt(str){
    arr = str.split(" ")
    str = ""
    for(let i = 0; i < arr.length; i++){
        if(!/[^a-zA-Z0-9]/.test(arr[i])){
            arr[i] = arr[i].substring(1, arr[i].length) + arr[i].substring(0, 1) + "ay"
        }
        i !== arr.length - 1
            ? str += arr[i] + " "
            : str += arr[i]
    }
    return str
}