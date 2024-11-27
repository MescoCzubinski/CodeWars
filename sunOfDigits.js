const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    digitalRoot(n)
})
n = 493193  

function digitalRoot(n) {
    number = n.toString()
    sum = 0
    for(letter of number){
        sum += parseInt(letter)
    }
    if(sum > 9){
        digitalRoot(sum)
    }
    return sum
}