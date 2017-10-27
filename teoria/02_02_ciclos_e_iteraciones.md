# Ciclos

Los ciclos nos permiten repetir una parte del código una cierta cantidad de veces.

## For

El For se declara usando la palabra reservada `for` seguida de paréntesis y llaves `(){}`, dentro de los paréntesis se coloca una expresión para evaluar y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera. La expresión del ciclo for tiene tres partes, la inicialización de la variable que se ejecuta solo la primera vez, la condición de corte del ciclo que se evalúa antes de ejecutar cada porción de código y la modificación de la variable que se asigna luego de cada ejecución.

```js
for(var i = 1 ; i < 10 ; i++){
  console.log(i)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Inicia en cero `var i = 1`.
2. Verifica que se cumpla la condición booleana `i < 10`.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `i++`.
4. Le suma un 1 a la variable `i`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

Esto nos da como resultado que  se muestre en consola los números del 1 al 9 (la condición corta en `i < 10`).

Los ciclos for suelen ser muy empleados para recorrer arrays, de la siguiente forma:

```js
var daysOfTheWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysWeek[i]
  console.log(day)
}
```

En este ejemplo el ciclo hace lo siguiente:

1. Inicia en cero `var i = 0`, que es la primera posición del array.
2. Verifica que se cumpla la condición booleana `i < daysOfTheWeek.length`, en este caso el largo del array es 7.
3. Ejecuta el código dentro de las llaves imprimiendo en pantalla el valor de la variable `day`, que contiene el dia de la semana en la esa posición `var day = daysWeek[i]`.
4. Le suma un 1 a la variable `i++`.
5. Repite desde el paso 2 al 4 hasta que la condición booleana no se cumpla y el ciclo corte.

Esto da como resultado que se muestre en consola todos los días de la semana que están cargados en el array, respetando el orden.

[Siguiente tema](02_03_sentencias_break_y_continue.md)