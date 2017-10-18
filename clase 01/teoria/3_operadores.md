# Operadores aritméticos

## assignment

El operador de asignación `=` nos permite asiganer un valor a una variable.

```js
var number = 2.5

var text = 'Hola mundo!'
```

## addition and concat

El simbolo `+` en Javascript nos permite hacer dos operaciones distintas dependiendo de los elementos que interactúen. 

### addition 

Una operación es la suma matemática de valores, para esto es necesario que todos los elementos sean de tipo number o booleanos. En caso de `true` o `false` los toma como 1 y 0 respectivamente.

```js
var number1 = 2.5

var number2 = 4

var result1 = number1 + number2 // Esto le asigna el valor numérico 6.5 a la variable result1

var result2 = 6 + 5.3 // Esto le asigna el valor numérico 11.3 a la variable result2

var result3 = true * 5 // Este le asigna el valor numérico 5 a la variable result3
```

### concat

La otra operación es la concatenación de cadenas de texto, esto se logra teniendo al menos uno de los elementos de tipo string en la operación. Lo que hace Javascript es tratar de convertir los valores no numéricos a string y luego juntarlos en uno solo.

```js
var text1 = 'Hola ' + 234 // Esto asigna el string 'Hola 234' a la variable text1

var firstName = 'Juan'

var text2 = 'Hola ' + firstName // Esto asigna el string 'Hola Juan' a la variable text2

var text3 = 'Hola ' + true // Esto asigna el string 'Hola true' a la variable text3

```

## subtraction

La resta se define con el símbolo `-` y se realiza entre dos valores de tipo number, si se emplea con valores de tipo string o invalidos devuelve `NaN`.

```js
var number  = 8

var result = number - 10 // Esto asigna el valor -2 en la variable result

```

## multiplication

La multiplicación se define con el símbolo `*` y se realiza entre dos valores de tipo number, si se emplea con valores de tipo string o invalidos devuelve `NaN`.

```js
var number  = 5

var result = number * 10 // Esto asigna el valor 50 en la variable result

```

## division

La división se define con el símbolo `/` y se realiza entre dos valores de tipo number, si se emplea con valores de tipo string o invalidos devuelve `NaN`. En caso de tratar de dividir por cero el resultado es Infinity.

```js
var number  = 50

var result = number / 10 // Esto asigna el valor 5 en la variable result

```

## modulus

El módulo es un operador que nos permite saber el resto de una división. Este operador nos sirve por ejemplo para saber si un numéro es par o impar, haciendo el módulo de 2.

```js
var modulus1 = 5 % 2 // En este caso devuelve 1, por lo cual el numéro es impar

var modulus2 = 10 % 2 // En este caso el resto es 0, por lo cual el numéro es par
```

## increment

El operador incremental `++` nos sirve para sumarle un 1 al valor de una variable numérica.

```js
var number = 5

number++ // Esto es equivalente a number = number + 1
```

## decrement

El operador decremental `--` nos sirve para restarle un 1 al valor de una variable numérica.

```js
var number = 5

number-- // Esto es equivalente a number = number - 1
```

# Operadores de comparación

Ordenamiento por tabla [ASCII](http://www.elcodigoascii.com.ar/) 