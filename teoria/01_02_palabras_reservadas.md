# Palabras reservadas

Las palabras reservadas son aquellas que usamos para darle instrucciones a la computadora. Estas palabras no se pueden usar para nombres de variables ni funciones, por eso se llaman reservadas. 

*Existen muchas palabras reservadas que vamos a ir viendo de a poco, pero como ayuda prestemos atención a que muchos editores de texto las marcan con un color distinto para diferenciarlas. En este ejemplo podemos ver como la variable `var` tiene un color distinto (rojo).*

```js
var firstName

firstName = 'Juan'

if(firstName === 'Juan'){
  alert('Tu nombre es Juan!')
}

```

> En el ejemplo vemos algunas palabras en rojo como `var` que la usamos para declarar una variable o el `if` que nos permite decirle a la computadora que evalúe una condición booleana, esta son palabras reservadas. También vemos otras palabras como `alert()` que son llamados a métodos del sistema. Estas no son palabras reservadas, pero hay que tener cuidado de no generar nombres de variables que puedan confundirse con estas funciones.

[Siguiente tema](01_03_variables.md)