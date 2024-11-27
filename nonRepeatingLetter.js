const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    console.log(firstNonRepeatingLetter(s))
})

let s = "sTreSS"
function elementIndex(arrArr, elementSearch){
    for(let i = 0; i < arrArr.length; i++){
        for(let j = 0; j < arrArr[i].length; j++){
            if(arrArr[i][j] === elementSearch){
                return i
            }
        }
    }
    return -1
}
function firstNonRepeatingLetter(s) {
    let saveString = s
    s = s.toLowerCase()
    let arrUnique = new Array()
    for (let i = 0; i < s.length; i++) {
        let index = elementIndex(arrUnique, s[i])
        index === -1
            ? arrUnique.push([s[i], 1])
            : arrUnique[index][1]++    
    }
    
    for(let i = 0; i < arrUnique.length; i++){
        if(arrUnique[i][1] === 1){
            let result = arrUnique[i][0]
            return saveString.indexOf(result) === -1
                ? result.toUpperCase()
                : result
        }
    }
    return ''
}