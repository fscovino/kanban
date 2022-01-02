import Task from '../models/task.js';

// Create New Task
export const createTask =  async (req, res) => {
    const task = req.body;
    const newTask = new Task(task);

    try {
        await newTask.save();
        res.status(201).json(newTask);
        
    } catch (error) {
        res.status(409).json({message: error.message});
        console.log(error);
    }
}

// Retrieve existing Task
export const getTask =  (req, res) => {
    res.send('Getting Single task...');
}

// Retrieve All Tasks
export const getTasks =  async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({message: error.message});
        console.log(error);
    }
}

// Update existing Task
export const updateTask =  async (req, res) => {
    const _id = req.params.id;

    try {
        const task = req.body;
        const updatedTask = await Task.findByIdAndUpdate(_id, task, {new: true});
        res.json(updateTask);

    } catch (error) {
        console.log(error);
    }
}

// Delete specified Task
export const deleteTask = async (req, res) => {
    const _id = req.params.id;

    try {
        const taskDeleted = await Task.findByIdAndDelete(_id, (err, task) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Deleted task ', task);
            }
        });
    } catch (error) {
        console.log(error);
    }
}