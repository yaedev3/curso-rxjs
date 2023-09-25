import { of, take, tap } from 'rxjs'

const numeros$ = of(1, 2, 3, 4, 5).pipe(tap(console.log))

numeros$
  .pipe(
    take(3),
    tap((t) => console.log('tap', t))
  )
  .subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('complete'),
  })
