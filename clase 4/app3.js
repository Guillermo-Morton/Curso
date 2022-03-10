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



// const includesForObjects = (array, data, property) => {
//     const mappedArray = array.map(e => e[property])
//     return {
//         array,
//         property,
//         mappedArray,
//         data,
//         includes: mappedArray.includes(data)
//     }
// }

// console.log(includesForObjects(personas, 700, 'sueldo'))


// const numbers = [1,5,7,8]
// const numbers2 = [5,123,12]

// console.log(numbers2.concat(numbers))

const mostrarDatos = (a, b, c) => {
    console.log('ELEMENTO', a)
    console.log('INDICE', b)
    console.log('ARREGLO', c)
}

const foreach = (array, callback) => {
    console.log('CALLBACK',callback)
    for (let index = 0; index < array.length; index++) {
        const element = array[index]
     // callback(a,         b,     c)
        callback(element, index, array)
    } 
}

foreach(personas, (persona, i) => {
    console.log('ELEMENTO', persona)
    console.log('INDEX', i)
})


// personas.forEach((persona, i)=> {
//     console.log('ELEMENTO', persona)
//     console.log('INDEX', i)
// })



















            // [0,       1,        2]
// const array = ['PEPE','MARIANO','JUAN']

// console.log(array[0])


















const funcion = (callback) => {
    const a = 'pepe',
    b = 'juan'

    callback(a,b)
}


// funcion((nombre, nombre2)=> {
//     console.log(nombre, nombre2)
// })