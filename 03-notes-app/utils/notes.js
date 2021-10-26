const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("./notes.json");
    const notesString = notesBuffer.toString();
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

const saveNote = (notes, op) => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  if (op === "add") {
    console.log(chalk.green("Note Saved"));
  } else if (op === "remove") {
    console.log(chalk.green("Note removed"));
  }
};

const addNote = (title, body) => {
  let note = { title, body };
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title === title);
  if (filteredNotes.length > 0) {
    return console.log(chalk.red("Title exist. Please try again!"));
  }
  notes.push(note);
  saveNote(notes, "add");
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.grey("Note Found"));
    console.log(chalk.grey("----------------------"));
    console.log(chalk.grey("Title : ", note.title));
    console.log(chalk.grey("Body : ", note.body));
    return;
  }
  console.log(chalk.red("Unable to find note for Title - ", title));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);
  if (foundNote) {
    const duplicateNotes = notes.filter((note) => note.title !== title);
    saveNote(duplicateNotes, "remove");
  } else {
    console.log(chalk.red("Unable to find note for title - ", title));
  }
};

const listNote = () => {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.grey("Displaying All Notes"));
    notes.forEach((note) => {
      console.log(chalk.grey("---------------------"));
      console.log(chalk.grey("Title : ", note.title));
      console.log(chalk.grey("Body : ", note.body));
    });
  }else{
      console.log(chalk.grey('Be the first to add notes'))
  }
};

module.exports = {
  addNote,
  readNote,
  removeNote,
  listNote,
};
