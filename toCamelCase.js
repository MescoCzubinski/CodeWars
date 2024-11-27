const elementTextInput = document.querySelector('#text-input') 
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    toCamelCase(elementTextInput.value)  
})
function firstToUpper(str){
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str;
}
function firstToLower(str){
    str = str.charAt(0).toLowerCase() + str.slice(1)
    return str;
}
function isFirstLetterUpper(str){
    let fistrLetter = str.charAt(0)
    if(fistrLetter === fistrLetter.toUpperCase()){
        return true
    } else {
        return false
    }
}
function toCamelCase(str){
    let isStartWithUpper = isFirstLetterUpper(str)
    let arr = []

    str = str.replaceAll('-', "_")
    if(str.includes("_")){
        arr = str.split("_")
    } else {
    if(isStartWithUpper){
        str = firstToUpper(str)
        }
    return str
    }
    
    str = ""
    for(string of arr){
        string = firstToUpper(string)
        str += string
    }
    if(!isStartWithUpper){
        str = firstToLower(str)
    }

    console.log(str)
    return str;
}
