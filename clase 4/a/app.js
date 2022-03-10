// ** Clase 4 Metodos complejos de arreglos

// Una funcion callback es aquella que se envia como parametro a otra funcion, para ser llamada posteriormente
// Los metodos que vamos a ver a continuacion, entran en la categoria de funciones de orden superior
// y contienen la logica que se necesita para saber cuando llamar a nuestras funciones callback




// forEach() : Permite iterar el contenido de un array.
// Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.const array = ['Pedro','Pico','Pato']
const array = ['Pedro','Pico','Pato']
console.group('Metodo forEach')
    console.log('Arreglo', array)
    array.forEach((element, index)=> {
        console.log(`Hola ${element}, tu posicion es ${index}`)
    })
console.groupEnd()


// filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición.
const numbers = [55,10,5,20,40,2,6,8,10,23,68,34,12,6,3,78,100]
console.group('Metodo filter')
    const filteredNumbers = numbers.filter(number =>  number > 40)
    console.log('Numeros sin filtrar',numbers)
    console.log('Numeros mayores a 40',filteredNumbers)
    console.log('Orden decendente',filteredNumbers.sort((a,b) => b-a))
console.groupEnd()

// map() : Permite recorrer el array y modificar los elementos presentes en él, retornando un nuevo array con la misma longitud que el original.
const otherNumbers = [1,2,3,6,10]
console.group('Metodo map')
    const mappedNumbers = otherNumbers.map(number => number + 10)
    console.log('Numeros',otherNumbers)
    console.log('Numeros mapeados (numero + 10)',mappedNumbers)
console.groupEnd()

// find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
console.group('Metodo find')
 console.log('Array', otherNumbers)
 const findedNumber = otherNumbers.find(number => number > 3)
 console.log('El primer numero que es mayor a 3 es',findedNumber)
console.groupEnd()

// some() : Itera el array y retorna un booleano si como mínimo uno de los elementos presentes en el array pasa una condición determinada.
// Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.
console.group('Metodo some')
 console.log('Array', numbers)
 console.log('Existe algun numero mayor a 90?',numbers.some(number => number > 90))
 console.log('Existe algun numero mayor a 100?',numbers.some(number => number > 100))
console.groupEnd()

// every() : Es similar al some(), ya que itera el array y retorna un booleano.
// Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.
console.group('Metodo every')
 console.log('Array', numbers)
 console.log('Todos los numeros son mayores a 50?',numbers.every(number => number > 50))
 console.log('Todos los numeros son mayores a 1?',numbers.every(number => number > 1))
console.groupEnd()

// includes() : Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.
console.group('Metodo includes')
 console.log('Array', numbers)
 console.log('El array incluye el numero 10?',numbers.includes(10))
console.groupEnd()

// reduce() : Aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.
console.group('Metodo reduce')
 console.log('Array', numbers)
 console.log('La suma total de todos los numeros es',numbers.reduce((acumulador,valorActual) => acumulador + valorActual))
console.groupEnd()