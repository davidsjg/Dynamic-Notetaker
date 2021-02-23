const path = require("path")
const router = require("express").Router()

// "/notes" responds with the notes.html file
router.get("/notes", (req, res) => {
// Basic route that sends the user to nots page
res.sendFile(path.join(__dirname, 'notes.html'))
})

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = router