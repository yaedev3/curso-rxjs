// referencias

import { pipe, startWith } from 'rxjs'
import { ajax } from 'rxjs/ajax'

const loadingDiv = document.createElement('div')
loadingDiv.classList.add('loading')
loadingDiv.innerHTML = 'Cargando'

const body = document.querySelector('body')

// Stream
ajax
  .getJSON('https://reqres.in/api/users/2?delay=3')
  .pipe(startWith(true))
  .subscribe((resp) => {
    if (resp === true) {
      body.append(loadingDiv)
    } else {
      body.querySelector('.loading').remove()
    }
    console.log(resp)
  })
