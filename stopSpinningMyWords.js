const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    spinWords(string)
})

let string = "Hey fellow warriors"
function spinWords(string){
    words = string.split(' ')
    for(let i=0; i<words.length; i++){
        if(words[i].length >= 5){
            words[i] = words[i].split("").reverse().join("")
        }
    }
    string = words.join(" ")
    return string
  }
  