let notes = [];

const filters = {
    searchText: ''
}

//check for existing saved date 
const notesJSON = localStorage.getItem('notes');

if(notesJSON != null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function(notes, filters){
    document.querySelector('#notes').innerHTML = '';
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredNotes.forEach(function(item){
        const noteEl = document.createElement('p')
        if(item.title.length > 0){
            noteEl.innerHTML = item.title
        }else {
            noteEl.textContent = 'Unnamed note'
        }
        
        
        document.querySelector('#notes').appendChild(noteEl)
    }) 
}
renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

