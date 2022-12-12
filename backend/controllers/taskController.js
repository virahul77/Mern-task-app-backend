const Task = require("../model/taskModel");

//create a task
exports.createTask = async(req,res) =>{
    try {
        const task = await Task.create(req.body);
        res.status(201).json({
            status: true,
            task
        })
    } catch (error) {
        return res.status(500).json({msg : error.message})
    }
}

//get all task
exports.getTasks = async (req,res) => {
    try {
        const task = await Task.find({})
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            status : false,
            msg : error.message
        })
    }
}

exports.getTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).json({msg : `No task with id ${id}`})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            status : false,
            msg : error.message
        })
    }
}

exports.deleteTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).json({msg : `No task with id ${id}`})
        }
        res.status(200).json({
            msg : "task deleted",
            task
        })
    } catch (error) {
        res.status(500).json({
            status : false,
            msg : error.message
        })
    }
}

exports.updateTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
        if(!task) {
            return res.status(404).json({msg : `No task with id ${id}`})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            status : false,
            msg : error.message
        })
    }
}