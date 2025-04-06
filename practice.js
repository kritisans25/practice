const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
const mongooseobj=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/EMPLOYEE1") 
.then((result)=>{
    console.log("Connected To MongoDb");
    }).catch((err)=>{
    console.log(err);
})
const employeeSchema=new mongoose.Schema(
    {
        _id:Number,
        name:String,
        age:Number,
        salary:Number,
        department:String
    }
);
const emp=mongoose.model("emp",employeeSchema);



