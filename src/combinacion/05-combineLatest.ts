import { combineLatest, fromEvent, map } from 'rxjs'

// const keyup$ = fromEvent(document, 'keyup').pipe(map((e) => e.type))
// const click$ = fromEvent(document, 'click').pipe(map((e) => e.type))

// combineLatest(keyup$, click$).subscribe(console.log)

const input1 = document.createElement('input')
const input2 = document.createElement('input')

input1.placeholder = 'email@gmail.com'
input2.placeholder = '***************'
input2.type = 'password'

document.querySelector('body').append(input1, input2)

const getInputStream = (element: HTMLElement) =>
  fromEvent(element, 'keyup').pipe(map((e) => e.target['value']))

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  console.log
)
