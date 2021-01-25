require("dotenv").config();
let express = require('express');
const app = express();
const sequelize = require('./db');

let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();//method to ensure all models (tables) are actually put onto the db if they're not there
//sequelize.sync({force: true})

//This app.use statement MUST go above any routes
app.use(express.json());

//Exposed Route
app.use('/user', user);

//Protected Route
// app.use(require('./middleware/validate-session'));  ???Is this the line to delete 12.2.2???
app.use('/journal', journal);



//need to always put my code in-between the listen and the variable above

app.listen(3000, function() { 
    console.log("App is listening on port 3000");
});






//NOTES
// app.use(endpoint, callback function) – function that wants to be used after the endpoint is hit
// app.use("/test", function(req, res) {  – two parameters
//     res.send("This is a test route")
// })