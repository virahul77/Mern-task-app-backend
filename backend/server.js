const dotenv = require('dotenv').config()
const express = require('express');
const connectDB = require('./config/connectDB');
const Task = require('./model/taskModel');
const taskRoute = require('./routes/taskRoute');
const app = express();
const cors = require('cors');
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
// app.use(cors({
//     origin: ["http://localhost:3000"]
// }));


app.use('/api/tasks',taskRoute);

app.get('/',(req,res)=> {
    res.status(200).json({
        status:'ok',
        ct : "hello to homepage"
    })
})


const PORT = process.env.PORT || 5000;

connectDB().then(()=>{
    app.listen(PORT, ()=> {
        console.log(`Server Running on Port ${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
})

