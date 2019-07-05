const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise and eating better'
},{
    title: 'Office modification',
    body: 'Get a new chair'
}];

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters){
    document.querySelector('#notes').innerHTML = '';
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredNotes.forEach(function(item){
        const noteEl = document.createElement('p')
        noteEl.innerHTML = item.title
        document.querySelector('#notes').appendChild(noteEl)
    }) 
}
renderNotes(notes, filters);

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#for-fun').addEventListener('change', function(e){
    console.log(e.target.checked)
})

