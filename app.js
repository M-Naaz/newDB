const express = require("express");
const app = express();
const path = require("path");
const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017/"
global.db = ""

mongoClient.connect(mongoUrl, {useUnifiedTopology:true},(err,res) =>{
  if(err){console.log("database error"); return}
  db = res.db("biodata")
  console.log("database listening")
})
//const rPostUser = require(__dirname+"/routes"/users/post-user.js");
const rPostUser = require(path.join(__dirname,"routes", "users", "post-user.js"))
app.post("/users", rPostUser)

app.listen(80, err => {

  if(err){console.log("server error"); return}
console.log("server listening")
})



