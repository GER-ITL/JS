// const userName = document.querySelector('#input1')
// const userBtn = document.querySelector('#submit')
// const userResult = document.querySelector('#result')

// const listName = ['Alex', 'Jame', 'Bekzat']

// console.log(listName)
// listName.unshift('Brand')
// listName.push('Ron')
// console.log(listName)
// listName.splice(2, 2)
// console.log(listName.length)

// for(let i = 0 ; i < listName.length; i++){
//     console.log(listName[i])
// }

// for (let item of listName){
//     console.log(item)
// }

// listName.forEach(function(brand, index){
//     console.log(`${brand} => ${index}`)
// })

// listName.forEach(printBrand)


// function printBrand(brand, index){
//     console.log(`${brand} => ${index}`)}
const person = {
    firstName:'Марк',
    age:30,
    isMarried:false,
    greet: function(){console.log('Greeting ' + this.firstName)}
}
console.log(person)
person.proffesion = 'Developer'
console.log(person)