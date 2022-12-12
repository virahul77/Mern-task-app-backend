const mongoose  = require("mongoose");

const connectDB = async()=>{
    try{
        mongoose.set('strictQuery', false)
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("connect to DB",connect.connection.host);
    }
    catch(error){
        console.log("DB connection fail",error);
        process.exit(1);
    }
}



module.exports = connectDB;