const validator = require('validator')
const getNotes = require('./notes')

const msg = getNotes()

console.log(msg)

console.log(validator.isURL(''))

// const add = require('./utils')

// const sum = add(4, -2)
// console.log(sum)