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
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
        //setup the title text
        if(item.title.length > 0){
            textEl.innerHTML = item.title
        }else {
            textEl.textContent = 'Unnamed note'
        }
        textEl.classList.add('list-item__title')
        noteEl.appendChild(textEl)

        //setup the link
        noteEl.href = `edit.html#${item.id}`
        noteEl.classList.add('list-item')

        //setup status message
        statusEl.textContent = generateLastEdited(item.updatedAt)
        statusEl.classList.add('list-item__subtitle')
        noteEl.appendChild(statusEl)
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
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    notesEl.innerHTML = '';
    if (filteredNotes.length > 0) {
        filteredNotes.forEach((item) => {
            const noteEl = generateNoteDOM(item)
            notesEl.appendChild(noteEl)
        }) 
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'Create a note to get started!'
        notesEl.appendChild (emptyMessage)
    }
    
}