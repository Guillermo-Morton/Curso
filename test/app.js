// Ejercicios para mejorar la logica
// Escriban la resolucion de cada ejercicio dentro de cada console.group
// Masterizando map

const A = [10,50,8,29]

console.group('Ejercicio 1')
// Ejercicio 1
// Dado un array A, generar un array B con las siguientes caracteristicas
// El array B, seria una version del array A, pero sus elementos son 2 veces mayores al de A
// Resolver aqui:




 //Tip: usar la iteracion map, y devolver sus elementos multiplicados por 2
 // Hacer un console.log() del Array B  
 console.groupEnd()
 
console.group('Ejercicio 2')
 // Ejercicio 2
// Dado un array A, generar un array C con las siguientes caracteristicas
// El array C, seria una version del array A, pero sus elementos valen la mitad que los del array A
// Resolver aqui:




// Hacer un console.log() del Array C  
console.groupEnd()


let D = [
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


console.group('Ejercicio 3')
 // Ejercicio 3
// Dado un array D, generar un array F con las siguientes caracteristicas
// El array F, seria una version del array D
// Pero sus elementos contendran solo la propiedad nombre de cada objeto
// Resolver aqui:




// Tip: Se puede acceder a las propiedades de los elementos dentro del map,
// solo hay que usar el primer parametro del callback (element), y acceder a element.nombre
// Hacer un console.log() del Array C  
console.groupEnd()



console.group('Ejercicio 4')
 // Ejercicio 4
// Dado un array D, generar un array G con las siguientes caracteristicas
// El array G, seria una version del array D
// Pero sus elementos contendran solo la propiedad sueldo de cada objeto
// Ademas, sumar todos los elementos del array G y mostralo por consola
// Resolver aqui:




// Tip: Se puede acceder a las propiedades de los elementos dentro del map,
// solo hay que usar el primer parametro del callback (element), y acceder a element.sueldo
// Hacer un console.log() del Array C  
console.groupEnd()
 