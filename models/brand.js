import mongoose from "mongoose";

//BRAND SCHEMA
const brand_schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
});

export default new mongoose.model('Brand', brand_schema);