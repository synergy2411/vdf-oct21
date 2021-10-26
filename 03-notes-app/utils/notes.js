const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
    try{
        const notesBuffer = fs.readFileSync("./notes.json")
        const notesString = notesBuffer.toString()
        return JSON.parse(notesString)
    }catch(err){
        return [];
    }
}

const saveNote = note => {
    const notes = loadNotes();
    notes.push(note);
    fs.writeFileSync("./notes.json", JSON.stringify(notes))
    console.log(chalk.green("Note Saved"))
}

const addNote = (title, body) => {
    let note = {title, body};
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title === title)
    if(filteredNotes.length > 0){
        return console.log(chalk.red("Title exist. Please try again!"))
    }
    saveNote(note)
}

module.exports = {
    addNote
}