// ** Condicional statement
const comparador = (a, b) => {
    if (a > b) {
        console.log(`${a} es mayor que ${b}`)
    }else if (a == b) {
        console.log(`${a} es igual que ${b}`)
    }else {
        console.error(`${a} es menor que ${b}`)
    }
}

// const numero1 = parseInt(prompt('Escriba un numero'))
// const numero2 = parseInt(prompt('Escriba otro numero'))

// comparador(numero1, numero2)

// const numero3 = parseInt(prompt('Escriba un numero'))
// const numero4 = parseInt(prompt('Escriba otro numero'))

// comparador(numero3, numero4)

// ** Bucles 

// let indice = 0
// do {
//   indice++
//   console.log('Indice vale', indice)
//   console.log('Indice es menor que 5?', indice < 5)
// } while (indice < 5)


// let indice2 = 0
// while (indice2 < 5) {
//     console.log('Indice vale', indice2)
//     console.log('Indice es menor que 5?', indice2 < 5)
//     indice2++
// }


// ** Bucle For (classic for loop)
const array = ['mariano', 'rocio', 'benjamin','guille','pipa', 'pedro', 'grillo', 'pepe','pico','pato','pepo','pepa']

for (let indice = 0; indice < array.length; indice++) {

    if (array[indice] == 'rocio' || array[indice] == 'pepa'){
        console.log(`HOLA ${array[indice]}`)
    } else {
        console.log(array[indice])
    }
    
}