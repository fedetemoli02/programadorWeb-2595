# Variables

Las variables en Javascript sirven para almacenar datos de distintos tipos y tiene la particularidad de que puede modificarse su contenido a lo largo de la ejecución del programa. Si nosotros escribimos un string `'Hola mundo'` el mismo es inmutable, pero si este `'Hola mundo'` se lo asignamos a una variable lo podemos modificar mas adelante en el programa.
Un ejemplo de una variable y su modificación es:

```js
var firstName 

firstName = 'Juan'

firstName = 'Pedro'

```

Para poder declara una variable usamos la palabra reservada `var` seguida de un espacio y luego el nombre de la variable, que puede empezar con una letra mayúscula o minúscula `a b c D E`, un guion bajo `_` o un signo pesos `$`, luego de la primer letra también podemos usar números `1 2 67`.

# Tipos de valores

En Javascript no existen los tipo de variables, pero si los tipos de valores que puede contener o tomar una variable, esto es por lo que se lo conoce como un lenguaje débilmente tipado.

## Booleano - `boolean`

Booleano o boolean, solo puede tomar dos valores `true` (verdadero) o `false` (falso). Aunque no se usa tanto como valor de una variable de manera implícita, si muchas veces ciertos valores los convertimos a Booleanos para poder tomar decisiones.

```js
var boolean1 = true

var boolean2 = false

```

*Ej: La tecla de luz, si esta prendida es `true`, si la apago es `false`.*

## Número - `number`

Los numero o number son los números que usamos en operaciones matemáticas y pueden ser números enteros `1 2 3`, decimales `3.1416 2.4` y negativos `-5 -8.3`. Este tipo de valores nos sirven para contar o hacer cálculos matemáticos con ellos.

```js
var intNumber = 3

var floatNumber = 0.87876

var negativeFloatNumber = -5.4

```

*Ej: Una calculadora que almacena valores de tipo numérico para hacer las operaciones.*

## Cadena de texto - `string`

Las cadenas de texto o strings son las palabras, letras `a b C D`, signos `: . @`, saltos de línea `'enter'`, espacios ` `, etc. Para escribir un string tenemos que encerrar el texto en comillas simples o dobles, se recomienda según standard js usar simples. Con este tipo de valor podemos representar los textos y hacer operaciones para modificarlos o mostrarlos en pantalla. Es importante que tengamos en cuenta que no es lo mismo un número almacenado como string que un number, Javascript los va a tratar de manera distinta.

```js
var firstName = 'Juan'

var email = 'juan@gmail.com'

var numbers = '1 2 3 4 5 setenta y ocho'

var text = 'The dark side of the moon'
```

*Ej: El email que ingresamos como usuario o los textos que escribimos en los muros de facebook*

## Indefinido y Nulo - `undefined` y `null`

- Indefinido o undefined es un valor que no arroja Javascript para indicarnos que el valor al cual queremos acceder aun no fue definido, ya sea porque no se le asigno un valor a la variable o porque queremos acceder a la propiedad de un objeto que no existe. Este tipo de valor suele ser devuelto por el sistema y no tanto ingresado por el usuario.

- Nulo o null tiene el mismo significado de undefined en la mayoría de los casos, pero este si suele ser un valor que nosotros asignamos a una variable, para indicar que la misma no contiene nada.

```js
var example1 // En este punto la variable tiene el valor indefinido

var example2 = null // Acá yo como usuario le asigno el valor nulo
```

*Ej: Cuando no ingresamos nada en un prompt, el valor que nos devuelve es undefined*

## Objecto - `object`

Un objeto o object es un contenedor que nos permite agrupar varios tipos de valores juntos, bajo un mismo concepto. Lo valores que pueden contener son todos los permitidos en Javascript y la forma de acceder es a través de las `key` o llaves del objeto. La forma de declara un objeto es abriendo y cerrando llaves `{ }`, dentro de las llaves se ponen las keys del objeto y con dos puntos `:` se le asignan valores a esas keys.

```js
var user = {
  firstName: 'Juan',
  age: 25,
  address: 'Calle falsa 1234'
}

user.firstName // Accedo a la propiedad firstName del objeto usuario
user.age // Accedo a la propiedad age del objeto usuario
```

*Ej: Un contacto de la agenda que tiene a su vez información especifica como el nombre, la dirección, el número de teléfono, el cumpleaños, etc...*

## Arreglo - `array`

Un arreglo o array es un caso particular de un objeto en Javascript, la particularidad que tiene es que nos permite tener valores ordenado y acceder a ellos mediante la posición en el array. Los array pueden contener cualquier tipo de valor dentro de ellos incluidos otros arrays y es importante tener en cuenta que la posición dentro del array se cuenta empezando por cero.

```js
var array = [1,2,'Pedro',false]

array[2] // Esto me devuelve el string 'Pedro'
```

*Ej: La bandeja de entrada del mail que contiene objetos (en este caso mails), ordenados cronológicamente.*


