const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    for(names of namesArr){
        console.log(likes(names))
    }
})

const namesArr = [[], ["Petter"], ["Jacob", "Alex"], ["Max", "John", "Mark"], ["Alex", "Jacob", "Mark", "Max"]]
function likes(names){
    switch (names.length){
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + Number(names.length - 2) + " others like this";
    }
}

