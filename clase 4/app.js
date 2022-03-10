let personas = [
    {
        nombre:'Pedro',
        id : 1,
        sueldo: 200
    },
    {
        nombre:'Pico',
        id : 2,
        sueldo: 100
    },
    {
        nombre:'Pato',
        id : 3,
        sueldo:500
    },
    {
        nombre:'Rocio',
        id : 4,
        sueldo:400
    },
    {
        nombre:'Mariano',
        id : 5,
        sueldo: 700
    },
]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element, index)  
// }

// for (let index in array) {
//     const element = array[index]
//     console.log(element, index) 
//     console.log(array)
// }

// for (let element of 'PEDRO'){
//     console.log(element) // ???? index???
// }
// array.forEach((nombre, index,) => {console.log(nombre)})



// const numbers = [55,10,5,20,40,2,6,8,10,23,68,34,12,6,3,78,100]

// const numerosFiltrados = numbers.filter(number => number < 50 )

// console.log(numbers)
// console.log(numerosFiltrados)

// console.log(numerosFiltrados.map(number => {
//     return {numero :  number + 10}
// }))

// const sueldos = personas.map(persona => persona.sueldo)

// const total = sueldos.reduce((a, b) => a + b)

// console.log('Total gasto en sueldos', total)
// console.log('Arreglo de sueldos', sueldos)




// const eliminar = id => {
//     personas = personas.filter(persona => persona.id !== id)
//     console.log(personas)
//     renderizar()
// }
// const renderizar = () => {
//     const htmlParaElDiv = personas.map(persona => {
//         return `    
//         <div>
//             <p>${persona.nombre}</p>
//             <button onclick="eliminar(${persona.id})">Eliminar</button>
//         </div>
//         `
//         })
//     console.log(personas)
//     console.log(htmlParaElDiv)
//     const div = document.getElementById('perfiles')
//     div.innerHTML = htmlParaElDiv
// }
// renderizar()








const renderizar = () => {
    const div = document.getElementById('perfiles')
    div.innerHTML = personas.map(persona => `
        <div>
            <h1>${persona.nombre}</h1>
            <p>Sueldo:${persona.sueldo}</p>
            <button onclick="eliminar(${persona.id})">Eliminar</button>
        </div>
    `).join('')
}

const eliminar = (id) => {
    personas = personas.filter(persona => persona.id !== id)
    console.log(personas)
    renderizar()
}


renderizar()
