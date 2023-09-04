
/*console.log(now.getFullYear())
console.log(now.setFullYear(2055))
console.log(now.toLocaleDateString())
console.log(now.toTimeString())
console.log(now.toLocaleTimeString())
*/
const outTime = document.getElementById('output')
const getFull = document.getElementById('full')
const getDate = document.getElementById('date')
const getTime = document.getElementById('time')


let mode = 'time'
function bindMode(name){
    return function(){
        mode = name
        update()
    }
}
getDate.onclick = bindMode('date')
     
getTime.onclick = bindMode('time')

getFull.onclick = bindMode('full')

update()
setInterval(update, 1000)

function update(){
    outTime.textContent = format(mode)
}

function  format (formatMode){
    const now = new Date()
    switch(formatMode){
        case 'time' : return now.toLocaleTimeString()
        case 'date' : return now.toLocaleDateString()
        case 'full' : return new Date()
        default: return now.toLocaleTimeString()
    }
}

