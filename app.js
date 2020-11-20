const { log } = require("console");
const express = require("express");
const routes = require("./routes/index")
const ejs = require("ejs")
const app = express();
app.set("view engine" , "ejs");
app.use(express.static("public"))
app.use(routes)
app.listen(5000, ()=>{console.log("server started successfully")})