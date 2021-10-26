const yargs = require("yargs");

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
        console.log("TITLE : ", argv.title)
        console.log("BODY : ", argv.body)
    }
})

yargs.parse();