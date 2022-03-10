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

// ** FUNCION QUE RECIBE UN ARREGLO COMO PARAMETRO
const mapper = array => {
    const mappedArray = []
    array.forEach(element => {
        mappedArray.push(`
        <h1>${element.nombre}</h1>
        <p>Sueldo : ${element.sueldo}</p>
        `)
    })
    
    return mappedArray.join('')
}


personas.map(persona => {
    return ` 
    <h1>${persona.nombre}</h1>
    <p>Sueldo : ${persona.sueldo}</p> 
    `
})










const nombres = personas.map( persona => `
    <h1>${persona.nombre}</h1>
    <p>Sueldo : ${persona.sueldo}</p>
    `).join('')

console.log('NOMBRES', nombres)



const div = document.getElementById('perfiles')

div.innerHTML = nombres



