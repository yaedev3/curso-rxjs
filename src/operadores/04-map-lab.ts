import { fromEvent, map, tap } from 'rxjs'

const texto = document.createElement('div')
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare dolor quam. Cras massa nulla, elementum elementum purus vel, ultrices sagittis nunc. Vestibulum aliquet nisl sit amet leo aliquet, sed convallis mi varius. Etiam quis dui a odio facilisis porta vitae vitae turpis. Sed in mauris quis leo egestas placerat. Phasellus id neque ante. Nunc facilisis tellus ligula, id egestas magna placerat et. Proin molestie ante sed auctor finibus. Suspendisse sed finibus lectus. Nunc a facilisis sapien, non pulvinar lectus. Nam eget lobortis quam, non suscipit diam. In elit odio, aliquam in posuere et, varius eget risus. Quisque ut leo a magna rutrum efficitur vitae et ex.
<br/>
<br/>
Quisque justo velit, semper quis tempus ut, viverra a nisi. Integer at lectus dictum mauris vestibulum condimentum vel finibus odio. Aliquam rhoncus nibh at metus sollicitudin, ut varius nibh condimentum. Nullam luctus dapibus risus consectetur laoreet. Integer malesuada, orci eget viverra blandit, neque sapien commodo dolor, et tincidunt eros sapien tincidunt lorem. Phasellus sed risus vel libero dictum efficitur. Ut dictum tortor diam, ac varius risus porttitor eget. Pellentesque aliquam dolor ut sodales ultrices. Vivamus sed blandit nisl, ut viverra purus. Maecenas lorem lectus, blandit eget nulla et, tincidunt rhoncus odio. Nulla quis pulvinar ante. In lacinia aliquam purus ut pharetra. In quis lobortis enim, ut sodales nunc. Suspendisse tincidunt bibendum odio, ac luctus turpis aliquam et.
<br/>
<br/>
Sed at rutrum lorem, nec egestas leo. Vivamus eget sem imperdiet nibh pretium interdum. Ut ultrices turpis id sodales pulvinar. Sed tincidunt ultrices euismod. Aenean aliquet in tortor tristique venenatis. Nullam sed tellus tellus. Duis porttitor quis nisi a imperdiet. Curabitur massa orci, suscipit ut venenatis eu, euismod et ante. Cras euismod hendrerit egestas. Pellentesque commodo dui non arcu ultricies venenatis. Nullam eu porta purus. Donec id imperdiet lacus. Duis laoreet leo fringilla cursus euismod. Suspendisse ultrices nisi in suscipit viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam suscipit enim neque, nec tempus dui imperdiet et.
<br/>
<br/>
Quisque at commodo velit. Quisque eu suscipit neque. Sed hendrerit leo nec sem facilisis porttitor. Morbi blandit mi odio, at ornare augue facilisis scelerisque. Morbi congue eros mi, quis dapibus est iaculis nec. Phasellus consectetur iaculis elit, at commodo nulla rutrum sit amet. Aenean id tortor ut nunc tincidunt maximus. Cras quis rhoncus tortor. Vestibulum metus leo, placerat vitae auctor ut, tristique eget est. Etiam in nisi non lorem tempus posuere eu in tortor.
<br/>
<br/>
Fusce accumsan venenatis erat, in interdum libero auctor sit amet. Pellentesque consectetur sodales nisl, sed fermentum elit lacinia tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis sollicitudin efficitur. Quisque non odio suscipit, porttitor mi a, facilisis neque. Curabitur enim ligula, volutpat vitae varius a, imperdiet nec neque. Morbi urna orci, tempus eu semper et, accumsan et urna.
`

const body = document.querySelector('body')
body.append(texto)

const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement
  const height =
    scrollHeight - clientHeight > 0 ? scrollHeight - clientHeight : 1
  return (scrollTop / height) * 100
}

// Streams
const scroll$ = fromEvent(document, 'scroll')
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log))

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`
})
