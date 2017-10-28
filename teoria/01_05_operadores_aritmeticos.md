# Operadores aritméticos

## Asignación - assignment

El operador de asignación `=` nos permite asignar un valor a una variable.

```js
var number 

number = 2.5

var text = 'Hola mundo!'
```

Todo lo que esta a la derecha del igual se le asigna a la variable de la izquierda. 

En caso de que lo que se encuentra a la derecha precise realizar algún calculo este se hace primero y luego se asigna el valor a la variable.

```js
var result = 2 + 2
```

En este caso primero se suma `2 + 2` y luego el resultado `4` se le asigna a la variable result.

## Adición y Concatenación - addition y concat

El símbolo `+` en JavaScript nos permite hacer dos operaciones distintas dependiendo de los elementos que interactúen. 

### Adición - addition

Una operación es la suma matemática de valores, para esto es necesario que todos los elementos sean de tipo number o booleanos. En caso de `true` o `false` los toma como 1 y 0 respectivamente.

```js
var number1 = 2.5

var number2 = 4

number1 + number2 // Esto devuelve el valor de tipo number 6.5

6 + 5.3 // Esto devuelve el valor de tipo number 11.3

var result 

result = true * 5 // Este devuelve el valor de tipo number 5 y se le asigna a la variable result
```

### Concatenación - concat

La otra operación es la concatenación de cadenas de texto, esto se logra teniendo al menos uno de los elementos de tipo string en la operación. Lo que hace JavaScript es tratar de convertir los valores no numéricos a string y luego juntarlos en uno solo.

```js
'Hola ' + 234 // Esto devuelve el string 'Hola 234'

var firstName = 'Juan'

'Hola ' + true // Esto devuelve el string 'Hola true'

var message = 'Hola ' + firstName // Esto resuelve el string 'Hola Juan' y se lo asigna a la variable message
```

## Substracción - subtraction

La resta se define con el símbolo `-` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`.

```js
var number  = 8

var result = number - 10 // Esto devuelve el valor de tipo number -2 y se lo asigna a la variable result

2 - '2' // Devuelve el number 0

2 - 'hola' // Devuelve NaN

```

## Multiplicación - multiplication

La multiplicación se define con el símbolo `*` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`.

```js
var number  = 5

var result = number * 10 // Esto devuelve el valor de tipo number 50 y se lo asigna a la variable result

2 * '2' // Devuelve el number 4

2 * 'hola' // Devuelve NaN
```

## División - division

La división se define con el símbolo `/` y se realiza entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`. En caso de tratar de dividir por cero el resultado es Infinity.

```js
var number  = 50

var result = number / 10 // Esto devuelve el valor de tipo number 5 y se lo asigna a la variable result

4 - '6' // Devuelve el number -2

2 - 0 // Devuelve Infinity

2 / 'hola' // Devuelve NaN
```

## Módulo - modulus

El módulo es un operador que nos permite saber el resto de una división entre dos valores de tipo number. Si uno de los valores es de tipo string JavaScript va a tratar de convertirlo a number y hacer la operación, si la conversión falla o los dos valores son string devuelve `NaN`. 
Este operador nos sirve por ejemplo para saber si un número es par o impar, haciendo el módulo de 2.

```js
5 % 2 // En este caso devuelve el valor de tipo number 1, por lo cual el número es impar

10 % 2 // En este caso devuelve el valor de tipo number 0, por lo cual el número es par

10 % '5' // En este caso devuelve el valor de tipo number 0, por lo cual el número es divisible por 5 sin resto.

10 % 'Hola' // Devuelve NaN
```

## Incremental - increment

El operador incremental `++` nos sirve para sumarle un 1 al valor de una variable number. Si la el valor de la variable es de tipo string lo va a tratar de convertir a number y sumarle `1`, si falla la variable queda con el valor NaN asignado.

```js
var number1 = 5

number++ // Esto es equivalente a number1 = number1 + 1, la variable number1 queda con el valor de tipo number 6

var number2 = '2'

number++ // Esto es equivalente a number2 = number2 + 1, la variable number2 queda con el valor de tipo number 3

var text = 'Hola'

text++ // La variable text queda con el valor NaN
```

## Decremental - decrement

El operador decremental `--` nos sirve para restarle un 1 al valor de una variable number. Si la el valor de la variable es de tipo string lo va a tratar de convertir a number y restarle `1`, si falla la variable queda con el valor NaN asignado.

```js
var number1 = 5

number1-- // Esto es equivalente a number1 = number1 - 1, la variable number1 queda con el valor de tipo number 4

var number2 = '2'

number2-- // Esto es equivalente a number2 = number2 - 1, la variable number2 queda con el valor de tipo number 1

var text = 'Hola'

text-- // La variable text queda con el valor NaN
```

[Siguiente tema](01_06_operadores_de_comparacion.md)