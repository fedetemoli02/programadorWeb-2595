# Hacer un objeto que represente un usuario
​
- Deberá tener las propiedades id `id` (se deberá generar uno automáticamente cuando creo el usuario), nombre `firstName`, apellido `lastName`, edad `age`, dirección `address`.
- Deberá tener los métodos:
   - Mostrar nombre completo `showFullName`, deberá mostrar en consola el nombre completo del usuario.
   - Es mayor de edad `isLegalAge` que deberá devolver `true` si tiene 18 años o más y `false` en caso contrario.

Ayuda: Existe una función que permite saber la hora en milisegundos, con lo cual para este caso podría servir para hacer un id único.

```js
var time = Date.now() // Esto devuelve un número del estilo 1508556486222
```