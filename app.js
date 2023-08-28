/*
const isProgrammer = true
const name = 'Daniil'
const age = 21
let x 
console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age )
console.log(typeof x)
console.log(null)
 */
const isReady = false
 
if (isReady===true) {
    console.log('Ready')
} else if(isReady===false){
    console.log('No Ready')
    
}
else{
    console.log('err')
}

function calcAge(year){
    return 2023 - year
}

/*console.log(calcAge(2002))
console.log(calcAge(2005))
console.log(calcAge(1995))*/

function infoAbout(name, year){
    const age = calcAge(year)
    if (age>0) {
        console.log('name: ' + name , 'age:' + age)
    }
     else {
        console.log('err')
    }

}
infoAbout('Daniil', 2002)

const cars= ['mazda', 'ford', 'mers']
cars[cars.length]= 'kia'
console.log(cars)

const person = {
    firstName:'Daniil',
    lastName:'Lebedev',
    year:2002,
    languages:['ru', 'en'],
    hasWife: false,
    greet: function(){
        console.log('greet')
    }
}
person.ifProgrammer = true
console.log(person)