# Operadores aritméticos

Los operadores aritméticos permiten realizar operaciones matemáticas con números y también manipular cadenas de texto.

## Asignación - *assignment*

El operador de asignación `=` nos permite asignar un valor a una variable.

```js
var number = 2.5

var text = 'Hola mundo!'
```

## Adición y Concatenación - `addition` y `concat`

El símbolo `+` en Javascript nos permite hacer dos operaciones distintas dependiendo de los elementos que interactúen. 

### Adición - `addition`

Una operación es la suma matemática de valores, para esto es necesario que todos los elementos sean de tipo number o booleanos. En caso de `true` o `false` los toma como 1 y 0 respectivamente.

```js
var number1 = 2.5

var number2 = 4

var result1 = number1 + number2 // Esto le asigna el valor numérico 6.5 a la variable result1

var result2 = 6 + 5.3 // Esto le asigna el valor numérico 11.3 a la variable result2

var result3 = true * 5 // Este le asigna el valor numérico 5 a la variable result3
```

### Concatenación - `concat`

La otra operación es la concatenación de cadenas de texto, esto se logra teniendo al menos uno de los elementos de tipo string en la operación. Lo que hace Javascript es tratar de convertir los valores no numéricos a string y luego juntarlos en uno solo.

```js
var text1 = 'Hola ' + 234 // Esto asigna el string 'Hola 234' a la variable text1

var firstName = 'Juan'

var text2 = 'Hola ' + firstName // Esto asigna el string 'Hola Juan' a la variable text2

var text3 = 'Hola ' + true // Esto asigna el string 'Hola true' a la variable text3

```

## Substracción - `subtraction`

La resta se define con el símbolo `-` y se realiza entre dos valores de tipo number, si se emplea con valores de tipo string o inválidos devuelve `NaN`.

```js
var number  = 8

var result = number - 10 // Esto asigna el valor -2 en la variable result

```

## Multiplicación - `multiplication`

La multiplicación se define con el símbolo `*` y se realiza entre dos valores de tipo number, si se emplea con valores de tipo string o inválidos devuelve `NaN`.

```js
var number  = 5

var result = number * 10 // Esto asigna el valor 50 en la variable result

```

## División - `division`

La división se define con el símbolo `/` y se realiza entre dos valores de tipo number, si se emplea con valores de tipo string o inválidos devuelve `NaN`. En caso de tratar de dividir por cero el resultado es Infinity.

```js
var number  = 50

var result = number / 10 // Esto asigna el valor 5 en la variable result

```

## Módulo - `modulus`

El módulo es un operador que nos permite saber el resto de una división. Este operador nos sirve por ejemplo para saber si un número es par o impar, haciendo el módulo de 2.

```js
var modulus1 = 5 % 2 // En este caso devuelve 1, por lo cual el número es impar

var modulus2 = 10 % 2 // En este caso el resto es 0, por lo cual el número es par
```

## Incremental - `increment`

El operador incremental `++` nos sirve para sumarle un 1 al valor de una variable number.

```js
var number = 5

number++ // Esto es equivalente a number = number + 1
```

## Decremental - `decrement`

El operador decremental `--` nos sirve para restarle un 1 al valor de una variable number.

```js
var number = 5

number-- // Esto es equivalente a number = number - 1
```

# Operadores de comparación

Los operadores de comparación permiten comparar elementos y arrojar un resultado verdadero `true` o falso `false` que nos permite tomar decisiones en nuestro código.

## Estrictamente igual - `strict equality`

El operador estrictamente igual `===` recibe dos parámetros y los compara, si ambos son iguales, tanto es su valor como en su tipo, entonces devuelve true, sino false.

```js
var firstName = 'Juan'

firstName === 'Juan' // Esto da como resultado true, porque tanto el valor 'Juan', como el tipo de valor string coinciden.

var number = 1234

number === '1234' // Esto da como resultado false porque aunque parecen similares '1234'y 1234, uno es de tipo string y el otro number.

'FF5733' === 'FF5733' // Devuelve true porque ambas cadenas de caracteres son iguales

```

## Estrictamente desigual - `strict not equal`

El operador estrictamente desigual `!==` recibe dos parámetros y los compara, si ambos son iguales, tanto es su valor como en su tipo, entonces devuelve false, sino true.

```js
var number = 1234

number !== '1234' // Esto da como resultado true porque aunque parecen similares '1234'y 1234, uno es de tipo string y el otro number.

var firstName = 'Juan'

firstName !== 'Juan' // Esto da como resultado false, porque tanto el valor 'Juan', como el tipo de valor string coinciden.

```

## Mayor  - `greater than operator`

El operador mayor `>` devuelve true si el número de la izquierda es mayor que el de la derecha. En caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string va a dar como resultado false. En el caso de comparar dos string el string es mayor si tiene una posición posterior en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'7' > 5 // Devuelve true, porque convierte el '7' en un number y 7 es mayor que 5.

'Ana' > 'Pedro' // Devuelve false, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

'Ana' > 'Alan' // Devuelve true, porque el carácter 'A' de 'Ana' tiene la posición 65 al igual que la 'A' de 'Alan', pero la 'n' tiene la posición 110, mientras que la 'l' tiene la posición 108.

```

## Mayor igual - `greater than or equal operator`


El operador mayor igual `>=` devuelve true si el número de la izquierda es mayor o igual que el de la derecha. En caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string va a dar como resultado false. En el caso de comparar dos string el string es mayor o igual si tiene una posición posterior o igual en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'5' >= 5 // Devuelve true, porque convierte el '5' en un number y 5 es igual que 5.

'Ana' >= 'Pedro' // Devuelve false, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

## Menor  - `less than operator`

El operador menor `<` devuelve true si el número de la izquierda es menor que el de la derecha. En caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string va a dar como resultado false. En el caso de comparar dos string el string es menor si tiene una posición anterior en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'7' < 5 // Devuelve false, porque convierte el '7' en un number y 7 no es menor que 5.

'Ana' < 'Pedro' // Devuelve true, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

## Menor igual - `less than or equal operator`


El operador menor igual `>=` devuelve true si el número de la izquierda es menor o igual que el de la derecha. En caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string va a dar como resultado false. En el caso de comparar dos string el string es menor o igual si tiene una posición anterior o igual en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'5' <= 5 // Devuelve true, porque convierte el '5' en un number y 5 es igual que 5.

'Ana' <= 'Pedro' // Devuelve true, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

## Negación - `NOT`

El operador de negación evalúa una sentencia de un solo termino, si la evaluación es true devuelve false y si la evaluación es false devuelve true.
En Javascript hay una lista de valores que al evaluarlos devuelven false, los que no están en esta lista devuelven true.

### Lista de falsos - `falsy list`

El string vacío `''`
El número cero o menos cero `0` `-0`
El símbolo `NaN`
El nulo o indefinido `null` `undefined`
El falso `false`


```js
! false // Devuelve true

! null // Devuelve true

!! '' // Devuelve false, porque niega el '' convirtiéndolo en true y luego lo vuelve a negar a false

! 'Hola' // Devuelve false

! 'Hola' === 'Hola' // Devuelve false, porque el estrictamente igual devuelve true y luego la negación lo convierte en false
```


 *Nota: La tabla [ASCII](http://www.elcodigoascii.com.ar/) diferencia minúsculas de mayúsculas, tiene también otros símbolos como saltos de linea o espacios y esta pensada para el alfabeto inglés, por lo cual las tildes o la ñ no respetan la posición de nuestro alfabeto.*

