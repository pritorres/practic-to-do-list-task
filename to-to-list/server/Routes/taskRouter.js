const express = require("express")

const router = express.Router()

const taskController = require("../Controllers/controllerTask")


// Retrieve all task
router.get("/getAllTasks", taskController.tasks)

// Retrieve one task
router.get("/task/:id", taskController.oneTask)

// delete a single task with id
router.delete('/:id', taskController.deleteTask);

// Create a new task
router.post('/createTask', taskController.createTask);

// update one task
router.post('/update',taskController.updateOneTask)

module.exports = router;
