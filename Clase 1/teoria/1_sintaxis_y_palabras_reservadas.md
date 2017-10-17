# Sintaxis

En javascript como en otros lenguajes de programación existe una sintaxis que es las forma en la cual le damos instrucciones a la computadora para que resuelva un problema.
Un ejemplo de sintaxis bien sencilla es:

```js
var nombre

nombre = 'Juan'

console.log('Hola ' + nombre)
```


En este ejemplo le pedimos a la computadora varias cosas:

1. Crear una variable llamada `nombre` sin ningún valor asignado, esto lo hacemos escribiendo `var` espacio el nombre de la variable.

2. Asignarle a la variable `nombre` el string `'Juan'`, esto se hace poniendo el nombre de la variable igual a el valor que le queremos asignar. Todo lo de la derecha del igual se guarda en la variable de la izquierda, en este caso `'Juan'` se guarda en `nombre`.

3. Que muestre en consola `'Hola '` seguido del string almacenado en la variable `nombre`, dando como resultado un `'Hola Juan'` en consola. Esto se logra escribiendo `console.log()` y poniendo dentro de los paréntesis el string que queremos mostrar en pantalla.

# Palabras reservadas

En el mismo ejemplo:

```js
var nombre

nombre = 'Juan'

if( nombre ==='Juan' ){
  alert('Tu nombre es Juan!')
}

```

Vemos algunas palabras como `var` que la usamos para declarar una variable o el `if` que nos permite evaluar una condición booleana. Estas palabras estan reservadas solo para darle instrucciones al programa y no pueden ser utilizadas como nombres de variables. También vemos palabras como `alert()` que son llamados a funciones del sistema, estas no son palabras reservadas, pero hay que tener cuidado de no generar nombres de variables que puedan confundirse con estas funciones.