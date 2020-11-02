const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");


let app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
res.send("prove")
})
app.listen(3000,()=>{
    
})
