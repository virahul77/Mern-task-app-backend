const dotenv = require('dotenv').config()
const express = require('express');
const connectDB = require('./config/connectDB');
const taskRoute = require('./routes/taskRoute');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


app.use('/api/tasks',taskRoute);

app.get('/',(req,res)=> {
    res.status(200).json({
        status:'ok',
        ct : "hello to homepage"
    })
})


const PORT = process.env.PORT || 5000;

connectDB().then(()=>{
    console.log(PORT);
    app.listen(PORT, (err)=> {
        console.log(`Server Running on Port ${PORT}`);
        console.log(err);
    })
}).catch((err)=>{
    console.log(err);
})

