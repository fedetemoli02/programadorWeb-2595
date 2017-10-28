# Variables

Las variables en JavaScript sirven para almacenar datos de distintos tipos y tiene la particularidad de que puede modificarse su contenido a lo largo de la ejecución del programa. Si nosotros escribimos un string `'Hola mundo'` el mismo es inmutable, pero si este `'Hola mundo'` se lo asignamos a una variable lo podemos modificar mas adelante en el programa.
Un ejemplo de una variable y su modificación es:

```js
var firstName 

firstName = 'Juan'

firstName = 'Pedro'

```

Para poder declara una variable usamos la palabra reservada `var` seguida de un espacio y luego el nombre de la variable, que puede empezar con una letra mayúscula o minúscula `a b c D E`, un guion bajo `_` o un signo pesos `$`, luego de la primer letra también podemos usar números `1 2 67`. En este caso usamos el nombre 'firstName', luego de la declaración le asignamos el string 'Juan' y luego modificamos o 'pisamos' ese valor asignando el string 'Pedro'.

Esta declaración y asignación también puede realizarse en un solo paso

```js
var lastName = 'Perez'
```

[Siguiente tema](01_04_tipos_de_valores.md)
