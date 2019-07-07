
//get the note id
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
let dateElement = document.querySelector('#last-edited')
let note = notes.find(function(item){
    return item.id === noteId
})
console.log(note)

if(note === undefined){
    location.assign('index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', function(e){
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find(function(item){
            return item.id === noteId
        })
    }
    if(note === undefined){
        location.assign('index.html')
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)
})

