import { createNote } from './notes.js'
import {setFilters} from './filters'
import { renderNotes } from './views'

renderNotes()

document.querySelector('#create-note').addEventListener('click', (e) =>{
    const id = createNote()
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    })
    renderNotes()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes()
    }
})

let dateUno = new Date('Mar 31 1990 03:30:32')
let dateUnoTimestamp = dateUno.getTime()
let dateDos = new Date('Mar 31 2019 05:00:56')
let dateDosTimestamp = dateDos.getTime()

//console.log(dateDosTimestamp)

if (dateUnoTimestamp > dateDosTimestamp ) {
    console.log(dateDos.toString())
} else {
    console.log(dateUno.toString())
}
