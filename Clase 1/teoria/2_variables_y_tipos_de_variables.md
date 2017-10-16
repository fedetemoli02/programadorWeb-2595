# Variables

Las variables en Javascript sirven para almacenar datos de distintos tipos y tiene la particularidad de que puede modificarse su contenido a lo largo de la ejecución del programa. Si nosotros escribimos un string `Hola mundo` el mismo es inmutable, pero si este `Hola mundo` se lo asginamos a una variable lo podemos modificar mas adelante en el programa.
Un ejemplo de una variable y su moficiación es:

```
var nombre 

nombre = 'Juan'

nombre = 'Pedro'

```

Para poder declara una variable usamos la palabra reservada `var` seguida de un espacio y luego el nombre de la variable, que puede empezar con una letra mayúscula o minuscula `a b c D E`, un guion bajo `_` o un signo pesos `$`, luego de la primer letra también podemos usar números `1 2 67`.

# Tipos de variables

En Javascript no existen los tipo de variables, pero si los tipos de valores que puede contener o tomar una variable, esto es por lo que se lo conoce como un lenguaje devilmente tipado.
Los tipos de valores son:

## boolean

Booleano o boolean, solo puede tomar dos valores `true` (verdadero) o `false` (falso). Aunque no se usa tanto como valor de una variable de manera implicita si muchas veces ciertos valores los convertimos a Booleanos para poder tomar deciciones.

```
var booleano1 = true

var booleano2 = false

```

*Un ejemplo cotidiano puede ser la tecla de luz, si esta prendida es `true`, si la apago es `false`.*

## number

Los numero o number son los numeros que usamos en operaciones matemáticas y pueden ser numeros enteros `1 2 3`, decimales `3.1416 2.4` y negativos `-5 -8.3`. Este tipo de valores nos sirven para contar o hacer calculos matemáticos con ellos.

```
var numeroEntero = 3

var numeroDecimal = 0.87876

var numeroDecimalNegativo = -5.4

```

*Un ejemplo cotidiano es la calculadora que almacena valores de tipo numérico para hacer las opraciones.*

## string

Las cadenas de texto o strings son las palabras, letras `a b C D`, signos `: . @`, saltos de línea `'enter'`, espacios ` `, etc. Para escribir un string tenemos que encerrar el texto en comillas simples o dobles, se recomienda según standard js usar simples. Con este tipo de valor podemos representar los textos y hacer operaciones para modificarlos o mostrarlos en pantalla. Es importante que tengamos en cuenta que no es lo mismo un numéro alamacenado como string que un number, Javascript los va a tratar de manera distinta.

```
var nombre = 'Juan'

var email = 'juan@gmail.com'

var numeros = '1 2 3 4 5 setenta y ocho'

var texto = 'The dark side of the moon'
```

*Un ejemplo cotidiano es el email que ingresamos como usuario o los textos que escribimos en los muros de facebook*

## undefined y null

- Indefinido o undefined es un valor que no arroja Javascript para indicarnos que el valor al cual queremos acceder aun no fue denfido, ya sea porque no se le asigno un valor a la variable o porque queremos acceder a la propiedad de un objeto que no existe. Este tipo de valor suele ser devuelto por el sistema y no tanto ingresado por el usuario.

- Nulo o null tiene el mismo significado de undefined en la mayoria de los casos, pero este si suele ser un valor que nosotros asignamos a una variable, para indicar que la misma no contiene nada.

```
var indefinido // En este punto la variable tiene el valor indefinido

var nulo = null // Acá yo como usuario le asigno el valor nulo
```

## object

Un objeto o object es un contenedor que nos permite agrupar varios tipos de valores juntos, bajo un mismo concepto. Lo valores que pueden contener son todos los permitidos en Javascript y la forma de accederlos es a travez de las `key` o llaves del objeto. La forma de declara un objeto es abriendo y cerrando llaves `{ }`, dentro de las llaves se ponene las keys del objeto y con dos puntos `:` se le asignan valores a esas keys.

```
var usuario = {
  nombre: 'Juan',
  edad: 25,
  direccion: 'Calle falsa 1234'
}

usuario.nombre // Accedo a la propiedad nombre del objeto usuario
usuario.edad // Accedo a la propiedad edad del objeto usuario
```

*Un ejemplo cotidiano de un objeto son los contactos de la agenda, en el cual cada contacto puede tener información especifica de cada uno como ser el nombre, la dirección, el numéro de teléfono, etc...*

## array

Un arreglo o array es un caso particular de un objeto en Javascript, la particularidad que tiene es que nos permite tener valores ordenado y acceder a ellos mediante la posición en el array. Los array pueden contener cualquier tipo de valor dentro de ellos incluidos otros arrays y es importante tener en cuenta que la posición dentro del array se cuenta empezando por cero.

```
var arreglo = [1,2,'Pedro',false]

arreglo[2] // Esto me devuelve el string 'Pedro'
```

*Un ejemplo cotidiano de los arreglos es la bandeja de entrada del mail que contiene objetos (en este caso mails), ordenados cronologicamente.*


