const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
let emer="lol"

const app=express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
res.render('home',{prove:emer});
})
app.listen(3000,()=>{
    
})
