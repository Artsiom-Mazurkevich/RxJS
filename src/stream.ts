import {of, from, scan, Observable, fromEvent} from 'rxjs'
import {map} from 'rxjs/operators'

/////---------------//////////////
// const stream$ = of(1,2,3,)
//
// stream$.subscribe(v => console.log(v))
/////---------------//////////////







/////---------------//////////////
// @ts-ignore
// const arr$ = from([1,2,3,4]).pipe(scan((acc, value) => acc.concat(value), []))
// arr$.subscribe(v => console.log(v))
/////---------------//////////////










/////---------------//////////////
// const stream$ = new Observable(observer => {
//     observer.next('First value')
// })
//
// stream$.subscribe(v => console.log(v))
/////---------------//////////////




















/////---------------//////////////

// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(map(value => ({x: value.offsetX, y: value.offsetY, ctx: value.target.getContext('2d')}) ))
//     .subscribe(position => position.ctx.fillRect(position.x, position.y, 2,2))
//
//
// const clear$ = fromEvent(document.getElementById('btn_clear_canvas'), 'click')
//
// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height)
// })

/////---------------//////////////
