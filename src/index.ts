import { from, range } from 'rxjs'
import { filter } from 'rxjs/operators'

range(20, 30).pipe(
  filter((val, i) => {
    // console.log('index', i)
    return val % 2 === 1
  })
)
//   .subscribe(console.log)

interface Personaje {
  tipo: string
  nombre: string
}

const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman',
  },
  {
    tipo: 'heroe',
    nombre: 'Robin',
  },
  {
    tipo: 'villian',
    nombre: 'Joker',
  },
]

from(personajes)
  .pipe(filter((heroe) => heroe.tipo === 'heroe'))
  .subscribe(console.log)
