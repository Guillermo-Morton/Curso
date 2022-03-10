// ** If statements, funcionan de la siguiente manera. 

// Se hace una pregunta, si esa pregunta es verdadera, se ejecuta la porcion de codigo indicada.
// Ej: Si (5 es mayor que 3) {ejecutar este codigo}
if (5 > 3 ) {
  console.log('El numero 5 es mayor que el numero 3')  
}
// Lo particular de esto, es que nos permite manejar ambas situaciones.
// Se puede especificar ejecutar una porcion de codigo en el caso que la condicion (pregunta) sea verdadera
// Como al ser falsa
// Ej: Si(5 es mayor que 7) {ejectuar esta primera pocion} si no {ejectuar esta porcion} 
// Si = if, si no = else
if (5 > 7) {
    // comparativa true
    console.log('El numero 5 es mayor que el numero 7') 
} else {
     // comparativa false
    console.log('El numero 5 es menor que el numero 7') 
}
// Por ultimo se pueden hacer anidamientos de statements
// Es decir, tener mas de una comparativa por statement
// Se hace de la siguiente manera
// Ej: Si (4 < 2) {ejecutar este codigo} entonces si (3 < 1) {ejecutar este otro codigo} sino {ejecutar este}
if (4 < 2) {
    console.log('El numero 4 es menor que el numero 2') 
} else if (3 < 1) {
    console.log('El numero 3 es menor que el numero 1') 
} else {
    console.log('Ninguna comparativa es correcta')
}

// ** Bucles

// Un bucle permite ejecutar una porcion de codigo de manera indefinida, una y otra vez
// Generalmente se impide un bucle con una codicion, que al cumplirse. Rompe el bucle.
// De no cumplirse esta condicion se generaria un bucle infinito (Hay que evitar esas situaciones)

// ** Bucle Do while

//                  do {
//                      codigo a ejecutar
//                  } while (condicion)
// Hace {esto} mientras (esto no se cumpla)

// Ej: Inicializamos una variable llamada indice, y le damos un valor inicial de 0
let indice = 0
// Con nuestro bucle, vamos a ir incrementando su valor de a 1
do {
    indice ++
    console.log('Vuelta bucle do while', indice)
// indice ++ es igual a decir:

// indice = indice + 1
} while (indice < 10)
// Nuestra condicion sera, que indice sea menor a 10
// Esto quiere decir que el bucle se ejecutara 10 veces
// Haciendo que la variable indice sea, en cada vuelta 1 valor mas alto hasta llegar a 10


// ** Bucle While

//                  while (condicion) {
//                      codigo a ejecutar
//                  }

// Es similar al codigo anterior, solo que esta simplicado como una sola operacion

let indice2 = 0

while (indice2 < 10) {
    indice2++
    console.log('Vuelta bucle while', indice2)
}


// Notaron que hay un patron? Estos son los bucles mas esenciales. Consisten en incializar una variable en 0
// Usarlo como un contador, de 1 en 1. Hasta llegar a romper la condicion y asi terminar el bucle.
// Es un patron que se utilizo tanto, y se repitio tanto que se implemento en JS una manera de hacerlo mas sencillo

// ** Classic for loop (for)

//                  for (let indice = 0; condicion; indice++) {
//                      codigo a ejecutar  
//                  }

//  Es un bucle como los demas, solo que tiene integrado la inicializacion de la variable indice
//  Asi como tambien el metodo que va aumentando su valor.
//  Tal como los otros bucles, tiene un apartado de condicion que al romperse cierra el bucle
//  Ej:

for (let indice = 0; indice < 10; indice++) {
    console.log('Vuelta en bucle for', indice)
}

// El bucle for tiene otras dos variaciones, el for In y el for Of.
// Las veremos posteriormente ya que es un tema de manejo de arreglos e iteraciones mas complejas

// Fin de la clase