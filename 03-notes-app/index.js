const yargs = require("yargs");
const { addNote } = require("./utils/notes");

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

yargs.parse();

// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="New Title" 