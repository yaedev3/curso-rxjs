import { from, map, reduce, scan } from 'rxjs'

const numeros = [1, 2, 3, 4, 5]

const totalAcumulador = (acc, cur) => acc + cur

from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log)

from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log)

interface Usuario {
  id?: string
  audentyicado?: boolean
  token?: string
  edad?: number
}

const user: Usuario[] = [
  { id: 'fher', audentyicado: false, token: null },
  { id: 'fher', audentyicado: true, token: 'ABC' },
  { id: 'fher', audentyicado: true, token: 'ABC123' },
]

const state$ = from(user).pipe(
  scan<Usuario, Usuario>(
    (acc: Usuario, cur: Usuario) => {
      return { ...acc, ...cur }
    },
    { edad: 33 }
  )
)

const id$ = state$.pipe(map((state) => state))
id$.subscribe(console.log)
