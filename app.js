const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => console.log("Levantando servidor en 3000"))


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/contact.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/about.html"))
})

app.get("/music",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/music.html"))
})

app.use(express.static(path.join(__dirname,"public")));