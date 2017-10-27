# Ejercicios

## Crear una función que reciba como parámetro un nuevo alumno y que lo guarde en mayúsculas en un array.

Paso a paso:

1. Crear un array con nombres de alumnos en letras mayúsculas `studentsList` (al menos 5).
2. Crear una función `saveStudent` que reciba como parámetro `studentName` y que realice los siguientes pasos:
   1. Convertir el string recibido en `studentName` a mayúsculas y guardarlo en un variable `studentNameUpperCase`.
   2. Guardar el valor de la variable `studentNameUpperCase` en el array `studentsList` (que es una variable global).
3. Pedir el nombre de 3 alumnos (sin acentos, ni caracteres especiales) mediante prompt y guardarlos usando la función `saveStudent`.
4. Mostrar en consola el array `studentsList` para ver el resultado.

[Método toUpperCase](https://www.w3schools.com/jsref/jsref_touppercase.asp)


## Crear una función que me permita saber si un nombre se encuentra en una array, sin importar si lo escribo un minúsculas o mayúsculas.

Paso a paso:

1. Crear un array con nombres de alumnos en letras mayúsculas `studentsList` (al menos 5).
2. Crear una función `searchStudent` que reciba como parámetro `studentName` y que realice los siguientes pasos:
   1. Convertir el string recibido en `studentName` a mayúsculas y guardarlo en un variable `studentNameUpperCase`.
   2. Buscar el string `studentNameUpperCase` en el array `studentsList` y devolver `true` si lo encontró y `false` en caso contrario.
3. Pedir el nombre de 3 alumnos (sin acentos, ni caracteres especiales) mediante prompt y mostrar un mensaje que diga si encontró el alumno usando la función `searchStudent`.

[Método indexOf](https://www.w3schools.com/jsref/jsref_indexof_array.asp)

## Crear una función que me permita mostrar en consola un array de alumnos en forma de lista

Paso a paso:

1. Crear un array con nombres de alumnos en letras mayúsculas `studentsList` (al menos 5).
2. Crear una función `showStudentsList` que reciba como parámetro `studentsList` y que recorra el array mostrando cada elemento en consola junto con el número de orden en el array.

`
Ej:

1. JUAN
2. PEDRO
3. MARIA
etc...
`