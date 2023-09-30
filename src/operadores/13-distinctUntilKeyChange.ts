import { distinctUntilKeyChanged, from, of } from 'rxjs'

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

from(personajes).pipe(distinctUntilKeyChanged('nombre')).subscribe(console.log)
