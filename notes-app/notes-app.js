'use strict'
let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}




renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) =>{
    let newId = uuidv4()
    const timestamp = moment().valueOf()
    notes.push({
        id: newId,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp     
    })
    saveNotes(notes)
    location.assign(`/edit.html#${newId}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
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