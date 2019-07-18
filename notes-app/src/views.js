import moment from 'moment'
import { getFilters } from './filters'
import {sortNotes, getNotes} from './notes'
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

//render function notes 
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
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

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const dateElement = document.querySelector('#last-edited')
    const notes = getNotes()
    const note = notes.find((item) => item.id === noteId)

    if(!note){
    location.assign('index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`

export {generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage}

