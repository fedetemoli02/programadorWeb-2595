
# Operadores lógicos

Los operadores lógicos nos permiten evaluar dos elementos que arrojen resultados booleanos y devolver un resultado también booleano. En el caso del NOT la comparación la hace solo con un elemento.

## AND

El operador AND se declara utilizando dos veces el símbolo ampersand `&&` y compara dos expresiones que puedan ser evaluadas como `true` o `false`. Es importante entender que el valor que retorna es de uno de los dos términos, según la siguiente tabla:

| Expresión 1   | Expresión 2   | Resultado    |
| ------------- |:-------------:| ------------:|
| `true`        | `true`        | Expresión 2  |
| `true`        | `false`       | Expresión 1  |
| `false`       | `true`        | Expresión 1  |
| `false`       | `false`       | Expresión 1  |


## OR

## NOT

El operador de negación evalúa una sentencia de un solo termino, si la evaluación es true devuelve false y si la evaluación es false devuelve true.
En JavaScript hay una lista de valores que al evaluarlos devuelven false, los que no están en esta lista devuelven true.

### Lista de falsos - falsy list

- El string vacío `''`
- El número cero `0` o menos cero `-0`
- El símbolo `NaN`
- El nulo `null` o indefinido `undefined`
- El falso `false`


```js
!false // Devuelve true

!null // Devuelve true

!!'' // Devuelve false, porque niega el '' convirtiéndolo en true y luego lo vuelve a negar a false

!'Hola' // Devuelve false

!('Hola' === 'Hola')// Devuelve false, porque el estrictamente igual devuelve true y luego la negación lo convierte en false
```