# Operadores de comparación

Los operadores de comparación permiten comparar elementos y arrojar un resultado verdadero `true` o falso `false` que nos permite tomar decisiones en nuestro código.

## Estrictamente igual - strict equality

El operador estrictamente igual `===` recibe dos parámetros y los compara, si ambos son iguales, tanto es su valor como en su tipo, entonces devuelve true, sino false.

```js
var firstName = 'Juan'

firstName === 'Juan' // Esto da como resultado true, porque tanto el valor 'Juan', como el tipo de valor string coinciden.

var number = 1234

number === '1234' // Esto da como resultado false porque aunque parecen similares '1234'y 1234, uno es de tipo string y el otro number.

'FF5733' === 'FF5733' // Devuelve true porque ambas cadenas de caracteres son iguales

```

## Estrictamente desigual - strict not equal

El operador estrictamente desigual `!==` recibe dos parámetros y los compara, si ambos son iguales, tanto es su valor como en su tipo, entonces devuelve false, sino true.

```js
var number = 1234

number !== '1234' // Esto da como resultado true porque aunque parecen similares '1234'y 1234, uno es de tipo string y el otro number.

var firstName = 'Juan'

firstName !== 'Juan' // Esto da como resultado false, porque tanto el valor 'Juan', como el tipo de valor string coinciden.

```

## Mayor  - greater than operator

El operador mayor `>` devuelve true si el número de la izquierda es mayor que el de la derecha. En caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string va a dar como resultado false. En el caso de comparar dos string el string es mayor si tiene una posición posterior en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'7' > 5 // Devuelve true, porque convierte el '7' en un number y 7 es mayor que 5.

'Ana' > 'Pedro' // Devuelve false, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

'Ana' > 'Alan' // Devuelve true, porque el carácter 'A' de 'Ana' tiene la posición 65 al igual que la 'A' de 'Alan', pero la 'n' tiene la posición 110, mientras que la 'l' tiene la posición 108.

```

## Mayor igual - greater than or equal operator


El operador mayor igual `>=` devuelve true si el número de la izquierda es mayor o igual que el de la derecha. En caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string va a dar como resultado false. En el caso de comparar dos string el string es mayor o igual si tiene una posición posterior o igual en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'5' >= 5 // Devuelve true, porque convierte el '5' en un number y 5 es igual que 5.

'Ana' >= 'Pedro' // Devuelve false, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

## Menor  - less than operator

El operador menor `<` devuelve true si el número de la izquierda es menor que el de la derecha. En caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string va a dar como resultado false. En el caso de comparar dos string el string es menor si tiene una posición anterior en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'7' < 5 // Devuelve false, porque convierte el '7' en un number y 7 no es menor que 5.

'Ana' < 'Pedro' // Devuelve true, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

## Menor igual - less than or equal operator


El operador menor igual `>=` devuelve true si el número de la izquierda es menor o igual que el de la derecha. En caso de comparar un string con un number va a tratar de convertir el string en un number y luego hacer la comparación, si falla al convertir el string va a dar como resultado false. En el caso de comparar dos string el string es menor o igual si tiene una posición anterior o igual en la tabla [ASCII](http://www.elcodigoascii.com.ar/) que el otro.

```js
var number = 5

'5' <= 5 // Devuelve true, porque convierte el '5' en un number y 5 es igual que 5.

'Ana' <= 'Pedro' // Devuelve true, porque el carácter 'A' tiene la posición 65, mientras que el carácter 'P' tiene la posición 80

```

## Negación - NOT

El operador de negación evalúa una sentencia de un solo termino, si la evaluación es true devuelve false y si la evaluación es false devuelve true.
En Javascript hay una lista de valores que al evaluarlos devuelven false, los que no están en esta lista devuelven true.

### Lista de falsos - falsy list

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