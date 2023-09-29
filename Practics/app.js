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
// const person = {
//     firstName:'Марк',
//     age:30,
//     isMarried:false,
//     greet: function(){console.log('Greeting ' + this.firstName)}
// }
// // person.greet()
// // person.proffesion = 'Developer'
// // delete person.isMarried
// for (let key in person){
//     console.log(key, ':', person[key])
// }



// class Person{
//     constructor(firstName, age, isMarried){
//         this.firstName = firstName;
//         this.age = age;
//         this.isMarried = isMarried;

//     }
//     greet(){
//         console.log('Greeting ' + this.firstName)}
// }
// const person1 = new Person('Марк', 30 , false)
// const person2 = new Person('Pavel', 25 , false)
// console.log(person1, person2)
// person1.greet()
// person2.greet()

// class Auto{
//     constructor(brand, year, price ){
//         this.brand = brand;
//         this.year = year;
//         this.price = price;
//     }
// }

// const auto1 = new Auto('Kia', '2010' , 500000)
// const auto2 = new Auto('McLaren', '2020' , 5000000)
// console.log(auto1, auto2)

// for (let key in auto1){
//     console.log(key, ':', auto1[key])
// }

let btn = document.getElementById('btnRes')


//btn.addEventListener = ('click' , checkTest)
btn.onclick = function checkTest(){
  let result = 0 
  let q1 = document.querySelector('#q1').value
  if (q1 === '4'){result++}
  let q2 = document.querySelector('#q2').value
  if (q2 === '6'){result++}
  let q3 = document.querySelector('#q3').value
  if (q3 === '8'){result++}
  let q4 = document.querySelector('#q4').value
  if (q4 === '10'){result++}
  let q5 = document.querySelector('#q5').value
  if (q5 === '12'){result++}
  alert('Колличество ответов ' + result)
}