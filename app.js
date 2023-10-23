function promiseF() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let condition = true
        
            if (condition) {
                let message = 'Done'
                resolve(message)
            } else {
                let message = 'Fail'
                reject(message)
            }
        },1500)
    })
}
async function startPromise(){
    try {
        const rez = await promiseF()
        console.log(rez)
    } catch (error) { 
        console.log(error)
    }
}
startPromise()
const person = {
    firstName: 'Garett',
    age: 21,
    draving:true
}
const person2 = Object.assign({}, person)
person2.age = 25
person2.firstName = 'Dante'
person2.draving = false
console.log(person, person2)

function summ(){
     console.log('hello')
}
summ()
const summ2 = function(a,b){
    console.log(a+b)
}
summ2(2,2)
 
const getDate = () => console.log(new Date,console.dir(getDate))
getDate()
console.log(getDate.name)