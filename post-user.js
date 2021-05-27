const formidable = require("formidable")
const detect = require("detect-file-type")
const {v1: uuidv1} = require("uuid") // npm uuid
const fs = require("fs");
const path = require("path");
const { Db } = require("mongodb");

module.exports = (req, res) => {
const form = new formidable.IncomingForm()
form.parse(req, (err, fields, files) => {
    if(err){return res.send("error in file")}
    //console.log('name: ${fields.name}')
    //console.log('email:${fields.email}')
    //console.log(files.picture.name)
   // console.log(files.picture.path)

   detect.fromFile(files.picture.path, (err, result) => {
//console.log(result.ext)
   const pictureName = uuid()+"."+result.ext
   const allowedImageTypes = ["jpg", "jpeg", "png"]
   //console.log(pictureName)

   if(! allowedImagesTypes.includes(result.ext) ){
       return res.send("Image Not Allowed")
   }
   const oldPath = files.picture.path
   const newPath = path.join(__dirname,"..","..","image", pictureName)
    fs.rename(oldPsth, newPath, err => {

    if(err){console.log("cannot move file"); return}
   

   const user = {
       "name":fields.name, 
       "email":fields.email,
       "profileImage": pictureName
    }
 db.collection("users").insertOne(user, (err, dbResponse)=>{
    if(err){return res.send("mongo cannot create user")}
    return  res.send("biodata")

   })
    })
    
})
})












    
}