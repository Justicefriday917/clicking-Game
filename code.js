const red = document.getElementById('red')
const blue = document.getElementsByClassName('blue')[0]
const green = document.getElementsByClassName('green')[0]
const Allthree = document.querySelectorAll(".ww")
const reset = document.getElementsByClassName('reset')[0]
const TotalClick = document.getElementsByClassName('TotalScore')[0]
const GameScore = document.getElementsByClassName('GameScore')[0]
const Random = document.getElementsByClassName('random')[0]

let TotalClicks = 0
let TotalScore =0
let random = Math.floor(Math.random()*101)

Random.onclick =() => {
    Random.innerText = `${random}`
}
for(const item of Allthree){
    item.onclick = () => {item.value ++;
    item.innerHTML = `<h1>${item.value}</h1>`
    TotalClicks ++
    TotalClick.innerText = `Your Total clicks = ${TotalClicks}`
    TotalScore = red.value * blue.value * green.value
    GameScore.innerText = `Game Score = ${TotalScore}`
    }
}


window.onload = 
reset.onclick = () =>{
    Random.innerText = `${random}`
    random = Math.floor(Math.random()*101)
    TotalClick.innerText = `Your Total clicks = 0`
    GameScore.innerText = `Game Score = 0`
    TotalClicks = 0
    TotalScore =0
    red.value = 0
    blue.value = 0
    green.value = 0
    for(const item of Allthree){
        item.innerHTML = `<h1>${item.value}</h1>`
        }  
}
