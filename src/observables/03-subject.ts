import { Observable, Observer, Subject, interval } from 'rxjs'

const observer: Observer<any> = {
  next: (value) => console.log('sigueinte [next]:', value),
  error: (error) => console.warn('error [obs]', error),
  complete: () => console.info('completado'),
}

const invervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000)

  return () => {
    clearInterval(intervalID)
    console.log('Intervalo destruido')
  }
})

/**
 * 1. Casteo multiple
 * 2. Tambien es un observer
 * 3. Next, error y complete
 */

const subject$ = new Subject()
const subscription = invervalo$.subscribe(subject$)

// const subs1 = invervalo$.subscribe((rnd) => console.log('subs1', rnd))
// const subs2 = invervalo$.subscribe((rnd) => console.log('subs2', rnd))

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(() => {
  subject$.next(10)
  subject$.complete()
  subscription.unsubscribe()
}, 3500)
