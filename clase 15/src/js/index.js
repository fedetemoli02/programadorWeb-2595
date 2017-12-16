console.log('Clase 15')
function ajaxCall (url, cbk) {
  $.ajax({
    url: url,
    method: 'GET'
  })
    .done(function (response) {
      cbk(null, response)
    })
    .fail(function (error) {
      cbk(error)
    })
}

// var resultTotal = []
// var counter = 0

// var callback = function (error, response) {
//   if (error) {
//     console.log('Error', error)
//   } else {
//     counter = counter + response.results.length
//     console.log('Encontrado ' + counter + ' de ' + response.count)
//     resultTotal = resultTotal.concat(response.results)
//     if (response.next) {
//       callUrl = response.next
//       ajaxCall(callUrl, callback)
//     } else {
//       console.log('Termino de buscar')
//       console.log(resultTotal)
//     }
//   }
// }

// var callUrl = 'https://swapi.co/api/starships'
// console.log('Empiezo a buscar')
// ajaxCall(callUrl, callback)

var text = prompt('Ingrese un texto')

ajaxCall('https://swapi.co/api/starships/?search=' + text, function (error, result) {
  if (error) {
    console.log('Error', error)
  } else {
    console.log(result)
  }
})
