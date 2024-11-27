const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    towerBuilder(nFloors)  
})

let nFloors = 6
function towerBuilder(nFloors) {
    let arrResult = []
    for(let i=nFloors; i>0; i--){
        let floor = ""
        for(let j=i-1; j > 0; j--){
            floor += " "
        }
        for(let j=1; j < 2*(nFloors + 1 - i); j++){
            floor += "*"
        }
        for(let j=i-1; j > 0; j--){
            floor += " "
        }
        arrResult[nFloors-i] = floor
    }
    return arrResult
}