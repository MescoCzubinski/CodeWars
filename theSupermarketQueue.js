const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    queueTime(customers, n)
})

let customers = [10,2,3,3]
let n = 2   
function sum(arr){
    let sum = 0
    for(el of arr){
        sum += el
    }
    return sum
}
function queueTime(customers, n) {

    if(customers.length === 0){
        return 0
    } else {
        if(n >= customers.length){
            return Math.max(...customers) 
        } else {
            arr = new Array(n).fill(0)
            for(let i = 0; i < customers.length; i++){
                arr[arr.indexOf(Math.min(...arr))] += customers[i]
            }
            return Math.max(...arr)
        }        
    }
}