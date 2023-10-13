const person = {
    name : 'Daniil',
    age: 29,
    isProgrammer: true,
    languages: ['ru', 'en'],
    address: {
        citi: 'Tver',
        street: 'Nevsky'
    },
    'complex key': 'comlex value',
    [new Date().toLocaleTimeString()] : 'computed value',
    greet(){
        console.log('Greet from person ' + person.name)
    },
    arrow: () =>{
        console.log('Person Arrow')
    },
    info(){
        console.log(this.name)
    },
}
/*const addressKey = 'address'
console.log(person)
console.log(person[addressKey])
console.log(person['complex key'])
person.info()
person.languages.push('de')

delete person.address
console.log(person)


const person = {
    firstName: 'Alex',
    age: 21
}
let {firstName, age} = person
console.log(firstName,age)
*/

class Human{
   static isHuman = true
    humanGreet(){
        console.log('greet from human')
    }
}

class Person extends Human{
    constructor(name, age){
        super()
        this.name = name ?? 'Undefined name'
        this.age = name ?? 'Undefined age'
    }
    sayHello(){
        console.log('hello from ', this.name)
    }
}

const person1 = new Person('Daniil', 30)
const person2 = new Person('Daniil', 30)
console.log(Person.isHuman)