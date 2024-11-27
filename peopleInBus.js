const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
    peopleCounter(busStops)
})

const busStops =[[99,0],[51,20],[53,106],[9,37],[31,23],17]
function peopleCounter(busStops){
    let peopleInBus = 0

    for(let i=0; i<busStops.length; i++){
        if(i == busStops.length-1 && busStops[i].length != 2){
            peopleInBus += Number(busStops[i])
        } else {
            peopleInBus += Number(busStops[i][0])
            peopleInBus -= Number(busStops[i][1])
        }
    }
        return peopleInBus
  }