const yargs = require("yargs");
const { addNote, readNote, removeNote, listNote } = require("./utils/notes");

// Add Command
yargs.command({
    command : 'add',
    description : "to add new note",
    builder : {
        title : {
            description : "title for new note",
            demandOption : true,
            type : 'string'
        },
        body : {
            description : 'body for new note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        const {title, body} = argv;
        addNote(title, body)
    }
})

// 'read' Command
yargs.command({
    command : 'read',
    description : "to read one note",
    builder : {
        title : {
            description : 'title to read single note',
            demandOption :true,
            type : 'string'
        }
    },
    handler : argv => {
        readNote(argv.title)
    }
})

// 'remove' command
yargs.command({
    command : 'remove',
    description : "to remove one note",
    builder : {
        title : {
            description : 'title to remove single note',
            demandOption : true,
            type : 'string'
        }
    },
    handler : argv => {
        removeNote(argv.title)
    }
})

// 'list' command
yargs.command({
    command : 'list',
    description : 'to list down all notes',
    handler : () => {
        listNote();
    }
})
 
yargs.parse();

// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="New Title" 
// > node index.js remove --title="New Title" 
// > node index.js list