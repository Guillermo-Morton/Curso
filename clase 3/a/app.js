// ** Clase 3: Metodos de arreglos / arrays

// https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d

// ** Basicos que modifican el arreglo
const array = ['Pedro','Pico','Pato']
console.log('Arreglo incial', array)
// push() : Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
const metodoPush = ()=> {
    console.group('Metodo push')
        console.log('Se agrega un elemento al final de arreglo con el metodo push(item)')
        array.push('Pepe')
        console.log('El arreglo actualizado queda asi:',array) // ['Pedro','Pico','Pato', 'Pepe']
        console.log('Cantidad de elementos:', array.length) // 4
    console.groupEnd()
}
metodoPush()

// pop() : Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
const metodoPop = () => {
    console.group('Metodo pop')
        console.log('Se extrae el ultimo elemento con el metodo pop():', array.pop())  // 'Pepe'
        console.log('El arreglo actualizado queda asi:',array) // ['Pedro','Pico','Pato']
        console.log('Cantidad de elementos:', array.length) //3
    console.groupEnd()
}
metodoPop()

// shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
const metodoShift = () => {
    console.group('Metodo shift')
        console.log('Se extrae el primer elemento con el metodo shift():', array.shift()) // 'Pedro'
        console.log('El arreglo actualizado queda asi:',array) // ['Pico','Pato']
        console.log('Cantidad de elementos:', array.length) // 2
    console.groupEnd()
}
metodoShift()

// unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
const metodoUnshift = () => {
    console.group('Metodo unshift')
        console.log('Se agrega un elemento al principio de arreglo con el metodo unshift(item)')
        array.unshift('Mariano')
        console.log('El arreglo actualizado queda asi:',array) // ['Mariano','Pico','Pato']
        console.log('Cantidad de elementos:', array.length) // 3
    console.groupEnd()
}
metodoUnshift()

// reverse() : Invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.
const metodoReverse = () => {
    console.group('Metodo reverse')
        console.log('El arreglo con el orden invertido es',array.reverse()) // ['Pato', 'Pico', 'Mariano']
    console.groupEnd()
}
metodoReverse()

// splice() : Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
const metodoSplice = () => {
    console.group('Metodo splice')
        console.log('El elemento modificado es', array.splice(1,1,'Pepe'))
        console.log('El arreglo modificado es', array)
    console.groupEnd()
}
metodoSplice()

// ** Basicos que NO modifican el arreglo

const array2 = ['Pedro','Pico','Pato','Mariano','Benjamin','Rocio','Mariano','Pato']

// indexOf() : Retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no esta presente.
const metodoIndexOf = () => {
    console.group('Metodo indexOf')
        console.log('El indice que buscas es',array2.indexOf('Mariano')) // 3
    console.groupEnd()
}
metodoIndexOf()

// lastIndexOf() : Busca un elemento en un array y devuelve su posición. Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.
const metodoLastIndexOf = () => {
    console.group('Metodo lastIndexOf')
        console.log('El indice que buscas es',array2.lastIndexOf('Mariano')) // 6
    console.groupEnd()
}
metodoLastIndexOf()

// slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
const metodoSlice = ()=> {
    console.group('Metodo slice')
        console.log(array2.slice(1,5)) // ['Pico', 'Pato', 'Mariano', 'Benjamin']
    console.groupEnd()
}
metodoSlice()