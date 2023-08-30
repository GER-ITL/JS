/*function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min) 
}
console.log(getRandom(0, 10))*/
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const ymnojBtn = document.getElementById('ymnoj')
const delBtn = document.getElementById('del')
let action

//console.log(resultElement)
//resultElement.textContent = 50
plusBtn.onclick = function(){
    action = '+'
}
minusBtn.onclick = function(){
    action = '-'
}
ymnojBtn.onclick = function(){
    action = '*'
}
delBtn.onclick = function(){
    action = '/'
}
function printResult(result){
    if (result<0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}
function compNumWithAction(inp1, inp2 , actionSym){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if(actionSym === '+'){
        return num1 + num2
    }
     else if(actionSym === '-'){
        return num1 - num2
    }
    else if(actionSym === '*'){
        return num1 * num2
    }
    else if(actionSym === '/'){
        return num1 / num2
    }
}
 submitBtn.onclick = function(){
    const result = compNumWithAction(input1, input2, action)
    printResult(result)
    /*if(action === '+'){
    const sum = Number(input1.value) + Number(input2.value)
        printResult(sum) } 
    else if(action === '-'){
        const sum = Number(input1.value) - Number(input2.value)
        printResult(sum)
    }*/
 } 
