# Pequeñas funciones

## Ejercicios
​
1. Crear una función que reciba como argumento nombre y apellido y lo muestre en la consola.

   Paso a paso sería:
   - Pedir el nombre y guardarlo en una variable `firstName`.
   - Pedir el apellido y guardarlo en un variable `lastName`.
   - Definir una función que reciba dos argumentos, nombre `firstName` y apellido `lastName` y que devuelva como resultado un mensaje en consola con los dos argumentos que recibió.
   - Llamar a la función que definimos previamente y pasar como parámetros las variables `firstName` y `lastName`.
   - Chequear el resultado en consola.

2. Crear una función que reciba un argumento dia de la semana `dayOfTheWeek` y devuelve como resultado un string que indica `Es día hábil`, `Fin de semana` o `Día incorrecto`. Luego pedirle al usuario que ingrese tres veces un  día de la semana y por cada uno mostrarle un alerta con el mensaje que devuelve la función. 

3. Crear un función que reciba como argumento una palabra y devuelva como resultado `true` si la palabra tiene mas de 6 letras y `false` si tiene menos. Luego pedirle al usuario que ingrese una palabra, si es muy corta se le vuelve a pedir que ingrese otra hasta que ingrese una palabra de 6 letras o más.

Ayuda: Los string tiene tiene una propiedad `length` que dice cuantas letras tienen y funciona igual que con los arrays.

```js
var firstName = 'Juan'

firstName.length // Devuelve el number 4
```
