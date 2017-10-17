/**
 * Debera poder ingresar un dia de la semana
 * Debera poder compararlo con todos los dias de la semana
 * Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El día es habil' sino 'El dia es fin de semana';
 * En caso de encontrar el día utilizar la sentencia break y terminar el for
 */

var daysWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

var daySelected = prompt('Ingrese un dia de la semana (Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo)')

switch (daySelected) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('El ' + daySelected + ' es un día hábil')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('El ' + daySelected + ' es un día de fin de semana')
    break
}
