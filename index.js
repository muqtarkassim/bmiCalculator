const express=require("express");
const bodyparser=require("body-parser")
const app=express();
const path = require('path');
app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    var num1=Number(req.body.value1);
    var num2=Number(req.body.value2);
     result= Math.floor(num1/(num2*num2));
     res.send (("your BMI is "+" " + result));
    });
app.listen(3000,function(){
    console.log("listenning")
})