import {interval} from 'rxjs'
import {filter, map, take, scan} from 'rxjs/operators'



// @ts-ignore
const btn_interval: HTMLButtonElement | null = document.getElementById('interval')
// @ts-ignore
const btn_rxjs: HTMLButtonElement | null = document.getElementById('rxjs')
const display = document.getElementById('result')


btn_interval!.addEventListener('click', () => {
    btn_interval!.disabled = true
    let i = 0;
    const canDrink: any = [];
    const interval = setInterval(() => {
        if (people[i]) {
            if (people[i].age >= 22) {
                canDrink.push(people[i].name)
            }
            i++
            display!.textContent = canDrink.join(' ')
            console.log(canDrink.join(' '))
        } else {
            clearInterval(interval)
            btn_interval!.disabled = false
        }
    }, 1000)
})





btn_rxjs!.addEventListener('click', () => {
    btn_rxjs!.disabled = true
    interval(1000)
        .pipe(
            take(people.length),
            filter(v => people[v].age >= 22),
            map(v => people[v].name), scan((acc, val) => acc.concat(val))
        )
        .subscribe(res => display!.textContent = res, null, () => btn_rxjs!.disabled = false)
})

const people = [
    {name: 'Vladimir', age: 20},
    {name: 'Yauheni', age: 21},
    {name: 'Dmitry', age: 22},
    {name: 'Jon', age: 23},
    {name: 'Hanna', age: 24},
]

