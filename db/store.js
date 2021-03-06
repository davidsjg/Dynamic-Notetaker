const util = require('util')
const fs = require('fs')

const uuidv1 = require("uuid/v1")
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.readFile)

class Store {
    read() {
        return readFileAsync("db/db.json", "utf8")
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }
}
