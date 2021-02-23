// Dependencies
//if not an actual path, JS will go look in node modules for 'express'
const express = require("express")
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

//    executing a function
//build out our web server object 
const app = express();
//specifically for heroku  OR we can open it locally 
const PORT = process.env.PORT || 3000;

// Data
//middleware 
//these give you acces to object (req)
//everything coming from front end to back end will be JSON object
app.use(express.json())
app.use(express.urlencoded({ 
    extended: true
}))

//look in public folder first for index.html specifically 
//public folder holds all HTML/CSS/JAVA.  given to us 
app.use(express.static("public"))

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)


// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
