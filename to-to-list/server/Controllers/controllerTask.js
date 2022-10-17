const task = require("../Models/taskModel")

// get all task
exports.tasks = async (req, res) => {


    const tasks = await task.find();

    try {
        res.send(tasks)
    } catch (error) {
        res.status(500).send(error)
    }

};

// get one task
exports.oneTask = async (req, res) => {


    const taskOne = await task.findById({ _id: req.params.id });

    try {
        res.send(taskOne)
    } catch (error) {
        res.status(500).send(error)
    }

};

// add new task
exports.createTask = async (req, res) => {

    const newTask = new task(req.body)

    try {
        await newTask.save();
        res.send(newTask);
    } catch (error) {
        res.status(500).send(error);
    }

};

// delete task
exports.deleteTask = async (req, res) => {

    await task.deleteOne({ _id: req.params.id })

    try {
        res.send("DELETE Request Called")

    } catch (error) {
        res.status(500).send(console.log(error))
    }

};

// update task
exports.updateOneTask = async (req, res) => {

    await task.findByIdAndUpdate(req.body._id, req.body)
    try {

        res.status(200).send("Data updated!")

    } catch (error) {
        res.status(500).send(error)
    }

};