import { of, from } from 'rxjs'

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
  next: (value) => console.log('next:', value),
  complete: () => console.log('complete'),
}

const miGenerador = function* () {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

const miIterable = miGenerador()

from(miIterable).subscribe(observer)

// const source$ = from([1, 2, 3, 4, 5])
// const source$ = of(...[1, 2, 3, 4, 5])

// const source$ = from('Fernando')

const source$ = from(fetch('https://api.github.com/users/yaedev3'))

source$.subscribe(async (response) => {
  console.log(response)
  const data = await response.json()
  console.log(data)
})
