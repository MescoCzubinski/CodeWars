const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    printerError(s)
})

function printerError(s) {
    let errorCounter = 0
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i) > 109){
            errorCounter += 1;
        }
    }

    let returnString = errorCounter + "/" + s.length
    return returnString
}