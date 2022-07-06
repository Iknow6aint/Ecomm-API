const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

const mongo =function(){
    mongoose.connect(
        process.env.MONGO_URL
    ).then(()=>console.log("DB connection successful"))
    
    .catch((err)=>{
        console.log(err);
    })
} 
module.exports = mongo;
