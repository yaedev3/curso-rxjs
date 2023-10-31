import { fromEvent, map, merge } from 'rxjs'

const keyup$ = fromEvent(document, 'keyup').pipe(map((e) => e.type))
const click$ = fromEvent(document, 'click').pipe(map((e) => e.type))

merge(keyup$, click$).subscribe(console.log)
