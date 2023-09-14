const nums =['1',2,3,4,5]
/*num.push('6')
num.unshift('6')
num.shift()
console.log (num.toReversed())
console.log(num.toSorted())
console.log(num.toSpliced(0, 2))

const id = 5
const index = nums.indexOf(id)
console.log(index)
console.log(nums[index])
const capNums = nums.map(function(num){

    return num + '!'
})
console.log(capNums)
console.log(nums.includes('1'))
*/
const people =[
    {name: 'Dante', budget:5400},
    {name: 'Sergey', budget:1400},
    {name: 'Alex', budget:3400},
    {name: 'Elena', budget:7400},
    
]
let sumBudget = 0
const peopleFind = people.find(function(person){
    return person.budget == 7400
    //if(person.budget == 7400){return true}
})
console.log(peopleFind)
const filt = people.filter (function(p){
    return p.budget > 5000
})
console.log(filt)
filt.forEach(function(p){
    sumBudget = sumBudget + p.budget
})
console.log(sumBudget)

 const string = 'Salam Alecum'
 const reversed = string
    .split('')
    .toReversed()
    .join('')


console.log(reversed)

console.log(Math.round(1.6))
console.log(Math.trunc(1.6))
console.log(Math.random())

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const num1 = getRandomNum(1, 10)
console.log(num1)

const name = 'Daniil'
const age = 21

const getAge = function(){
    return age 
}
const text =`Hello my name is ${name} and my age is ${age}
and i ${getAge()>= 18 ? 'Can drive' : `Can't drive`}`
console.log(text)

function greet (name){
    console.log('Hello ', name)
}
const greet2 = function(name){
    console.log('Hello ', name)
}
const arrow = (name) => {
    console.log('Hello ', name)
}
greet('Dante')
greet2('Alex')
arrow('Bekzat')
/*setTimeout(function(){
    greet('Mari')
}, 4000)
*/
let counter = 0
const interval = setInterval(function(){
    if (counter == 5) {clearInterval(interval) }
    else{console.log(++counter)}
}, 2000)


 function createPerson(name){
    return function(lastname){
        console.log(name + ' ' + lastname)
    }
 }
 const addLastName = createPerson('Daniil')
 addLastName('Lebedev')
 addLastName('Lebedev2')
 