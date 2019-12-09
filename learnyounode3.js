const fs = require('fs')
const x = fs.readFileSync(process.argv[2])
const lines = x.toString().split('\n').length - 1
console.log(lines)

