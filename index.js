import express from "express";
import bodyparser from "body-parser";
import axios from "axios";

const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.post("/submit",(req,res)=>{
    console.log(req.body);
    var link="http://api.qrserver.com/v1/create-qr-code/?data="+req.body.text+"&size=500x500";
    res.render("index.ejs",{text: link});
});
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});