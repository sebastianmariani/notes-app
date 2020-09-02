const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',     
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing a note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function () {
        console.log('listing notes!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading a note!')
    }
})

yargs.parse()