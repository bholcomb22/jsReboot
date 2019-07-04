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
 const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
 }

 const findNotes = function(notes, query){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch
     })
 }

 console.log(findNotes(notes, 'work'))

//  const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
//  }

 const note = findNote(notes, 'office modification');
 //console.log(note);

// notes.forEach(function(item ,index){
//     console.log(index)
//     console.log(item);
// });

// notes.push('Note 4');
// console.log(notes);

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function (item, index){
//     console.log(item)
//     return item.title === 'Habbits to work on'
// })
// console.log(index)


//indexOf returns the index of the item in the array -1 means not found