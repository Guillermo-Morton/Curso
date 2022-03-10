// Let se puede reasignar, y tiene un scope local
let numero = 1

numero = 3

// Var se puede reasignar y tiene un scope global
var numero3 = 1

numero3 = 3

// Const no se puede reasignar
const numero2 = 1

let variable1 = null
let variable2 = false
let variable3 = true
let variable4 = 'String'

let variable5 = ['pepe', 'grillo', 'juan', 'jorge', 'pedro']


const comparativa = 0 && 5


console.log('El largo del array es', variable5.length)
console.log('La ultima posicion es', variable5.length-1)
console.log('El ultimo elemento es', variable5[variable5.length-1])

// Funcion declarativa

function FuncionDeclarativa() {
    console.log('Soy una funcion declarativa')
}

FuncionDeclarativa()

FuncionDeclarativa = 2

console.log(FuncionDeclarativa)


// Funcion constante
const FuncionConstante = () => {
    console.log('Soy una funcion constante')
}

FuncionConstante()

console.log(FuncionConstante)


const suma = (num1, num2) => {
    let resultado = num1 + num2
    // console.log('El resultado de ' + num1 + ' + ' + num2 + ' es: ' + resultado)
    console.log(`El resultado de ${num1} + ${num2} es: ${resultado}`)
}

suma(8,8)

suma(5,2)

const num1 = parseInt(prompt('Ingrese un numero'))
const num2 = parseInt(prompt('Ingrese otro numero'))

suma(num1, num2)





