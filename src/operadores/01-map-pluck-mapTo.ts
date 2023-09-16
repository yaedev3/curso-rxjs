import { fromEvent, map, mapTo, pluck, range } from 'rxjs'

// range(1, 5)
//   .pipe(map<number, string>((value) => (value * 10).toString()))
//   .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$.pipe(map((event) => event.code))

const keyupPluck$ = keyup$.pipe(pluck('target', 'baseURI'))

const keyupMapto$ = keyup$.pipe(mapTo('Tecla presionada'))

keyup$.subscribe(console.log)
keyupCode$.subscribe((value) => console.log('map', value))
keyupPluck$.subscribe((value) => console.log('pluck', value))
keyupMapto$.subscribe((value) => console.log('map', value))
