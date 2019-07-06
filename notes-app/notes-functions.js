// read existing notes from local storage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes');

    if(notesJSON != null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//save notes to local storage
const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

//delete a note
const removeNote = function(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    })
    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

//generate the dom structure for a note

const generateNoteDOM = function (item){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    //setup remove note button
    button.textContent = 'x'
    button.addEventListener('click', function(e){
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
        noteEl.appendChild(textEl)
        return noteEl
}

//render function notes 
const renderNotes = function(notes, filters){
    document.querySelector('#notes').innerHTML = '';
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredNotes.forEach(function(item){
        const noteEl = generateNoteDOM(item)
        document.querySelector('#notes').appendChild(noteEl)
    }) 
}