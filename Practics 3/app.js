const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')
const counterDiv = document.querySelector('#counter')
let counter = 0
let timerID
startBtn.addEventListener('click',function(){
     timerID =  setInterval(function(){
        counter++
        counterDiv.innerText = counter
    }, 1000)
} )

stopBtn.addEventListener('click', function(){
clearInterval(timerID)
})

resetBtn.addEventListener('click', function(){
    counter = 0
    clearInterval(timerID)
    counterDiv.innerText = '0'
})



// const timerID = setInterval(function(){
// console.log('tik')
// }, 1000)
// setTimeout(function(){
//     clearInterval(timerID)
// }, 10000) 