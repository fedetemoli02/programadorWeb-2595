# Condicionales

Los condicionales nos permiten evaluar una condición y decidir seguir según el resultado que camino seguir dentro del código.

*Ej: Si un equipo de fútbol en un torneo gana un partido recibe 3 puntos, si lo empata recibe 1 y si pierde 0.*

# if

El if se declara usando la palabra reservada `if` seguida de `(){}`, dentro del paréntesis se coloca una expresión booleana para evaluar y dentro de las llaves la porción de código que se va a ejecutar si la expresión es verdadera.

```js
if(firstName === 'Juan'){
  console.log('Tu nombre es Juan')
}

console.log('Gracias!')
```

En este código el `if` evalúa si la variable `firstName` contiene el string 'Juan', si es así muestra en consola 'Tu nombre es Juan'. También vemos en este código que siempre se va a mostrar en consola un 'Gracias!' no importa el valor de `firstName`, porque esta por fuera de las llaves `{}` del `if`.



