'use strict'
// read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    }catch (e) {
        return []
    }
    
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

//save notes to local storage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//delete a note
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

//generate the dom structure for a note

const generateNoteDOM = (item) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    //setup remove note button
    button.textContent = 'x'
    button.addEventListener('click', (e) => {
        removeNote(item.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    noteEl.appendChild(button)
        //setup the title text
        if(item.title.length > 0){
            textEl.innerHTML = item.title
        }else {
            textEl.textContent = 'Unnamed note'
        }
        textEl.href = `edit.html#${item.id}`
        noteEl.appendChild(textEl)
        return noteEl
}
//sort notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if(sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if(a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt){
                return 1
            } else{
                return 0
            }
        })
    } else if(sortBy === 'byCreated'){
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt){
                return -1
            }else if(a.createdAt < b.createdAt){
                return 1
            }else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical'){
        return notes.sort((a, b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

//render function notes 
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    document.querySelector('#notes').innerHTML = '';
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    filteredNotes.forEach((item) => {
        const noteEl = generateNoteDOM(item)
        document.querySelector('#notes').appendChild(noteEl)
    }) 
}