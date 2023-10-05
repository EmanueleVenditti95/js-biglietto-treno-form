// # Calcolo del prezzo del biglietto del treno

// - creare una variabile per il bottone di invio dei dati dell'utente
const btnDOMElement = document.getElementById('btn-calc')
console.log(btnDOMElement)


// - calcolo del prezzo del biglietto

// - ricevere i dati inseriti dall'utente
btnDOMElement.addEventListener('click', function () {

// - chiedere all'utente i km 
//     - creare una variabile con i km inseriti dall'utente    
let inputDomElement = document.getElementById ('km')
let km = parseFloat(inputDomElement.value)
console.log(km)


// - definire il prezzo
//     - creare una variabile che definisca il prezzo del biglietto in base ai km 
let price = 0.21 * km
console.log(price)


// - selezione dello sconto
//     - creare una variabile con lo sconto selezionato dall'utente
const selectDomElement = document.getElementById('age')
let age = selectDomElement.value
console.log(age)

// - definire gli sconti
//     - creare una o più variabili che definiscano gli sconti
//         - creare una variabile per lo sconto di 20% (under18)
let discountJunior = price * 20 / 100
//         - creare una variabile per lo sconto di 40% (over65)
let discountSenior = price * 40 / 100

// - calcolare lo sconto

if (age == 1){   
    //     - SE l'età dell'utente è < 18 anni, applicare lo sconto Junior
    price = price - discountJunior
    console.log(price)
} else if (age == 2) {  
     //     - ALTRIMENTI SE l'età dell'utente è > 65 anni,applicare lo sconto Senior 
     price = price - discountSenior
     console.log(price)
}
//     - ALTRIMENTI non applicare nessuno sconto

// - stampare il prezzo finale del biglietto
let messageDomElement = document.getElementById('message')
messageDomElement.innerHTML = '<h1>' + 'Il prezzo del tuo biglietto è :' + (price).toFixed(2) + ' &euro;<h1>'
}) 
