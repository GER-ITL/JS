// const myPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         const response = true
//         if (response) {
//             let message = 'success'
//             resolve(message)
//         } else {
//             let message = 'failed'
//             reject(message)
//         }
//     }, 1000)
// })

// myPromise.then(function(data){
//     console.log('then 1')
//     console.log(data)
//     return 'data from then 1'
// }).then(function(data){
//     console.log('then 2')
//     console.log(data)
// })
// .catch(function(data){
//     console.log('catch')
//     console.log(data)
// })

//-------------------------------------------------------------

// const checkRooms = new Promise(function(resolve, reject){
//     setTimeout(function(){
//        console.log('Проверяем номера в отеле...')
//        const avilableRooms = true
//         if (avilableRooms) {
//             let message = 'Номера есть'
//             resolve(message)
//         } else {
//             let message = 'Номеров нет'
//             reject(message)
//         }
//     }, 2000)
// })

// checkRooms.then(function(data){
//  return new Promise(function(resolve, reject){
//     setTimeout(function(){    
    
//         console.log('then 1')
//         console.log(data)
//         console.log('Проверяем авиабилеты...')
//        const avilableTickets = true
//         if (avilableTickets) {
//             let message = 'Билеты есть'
//             resolve(message)
//         } else {
//             let message = 'Билетов нет'
//             reject(message)
//         }
//  }, 1000)
//  })
// })
// .then(function(data){
//     console.log('then 2')
//     console.log(data)
//     console.log('Edem v otpysk')
// })
// .catch(function(data){
//     console.log('catch')
//     console.log(data)
//     console.log('Ne edem v otpysk')
// })

//-------------------------------------------------------------

// function promiseF (){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             const result = false
//             if (result) {
//                 let message = 'Done'
//                 resolve(message)
//             } else {
//                 let message = 'Fail'
//                 reject(message)
//             }
//         }, 1500)
//     })
// }

// async function startPromise(){
// try {
//     const result = await promiseF()
//     console.log(result)
// } catch (error) {
//     console.log(error)
// }
// }
// startPromise()
//-------------------------------------------------------------



async function getCurrencies(){
try {   
    const response =  await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await response.json()
    renderRates(data)
} catch (error) {
    alert(error)
}
}
getCurrencies() 

function renderRates(data){


    const usdValue = document.querySelector('#usd') 
    const eurValue = document.querySelector('#eur') 

    usdValue.innerText = data.Valute.USD.Value.toFixed(2)
    eurValue.innerText = data.Valute.EUR.Value.toFixed(2)
}


function promiseF(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let cond = true
            if (cond) {
                let message = 'Done'
                resolve(message)
            } else {
                let message = 'Fail'
                reject(message)
            }
        },1000)
    })
}

async function startPromise(){
    try {
        const result = await promiseF()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
startPromise()

