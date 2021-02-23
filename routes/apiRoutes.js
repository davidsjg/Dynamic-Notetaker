const router = require("express").Router();
const store = require("../db/store")
// const index = require("../public/assets/js/index")

//GET "/api/notes" responds with all notes from the database 
router.get("/notes", (req, res) => {

})

router.post("/notes", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newNote = req.body;



  //need to figure out are we storing in array or more likely just 
//   newNote.push(noteArray);
//   res.json(noteArray);
})

router.delete("/notes/:id", (req, res) => {

})

module.exports = router 