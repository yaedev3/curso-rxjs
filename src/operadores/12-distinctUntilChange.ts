import { distinct, distinctUntilChanged, from, of } from 'rxjs'

const numeros$ = of(1, '1', 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1')

numeros$.pipe(distinctUntilChanged()).subscribe(console.log)

interface Personaje {
  nombre: string
}

const personajes: Personaje[] = [
  { nombre: 'Megaman' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Zero' },
  { nombre: 'X' },
  { nombre: 'Megaman' },
  { nombre: 'X' },
  { nombre: 'Zero' },
]

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log)
