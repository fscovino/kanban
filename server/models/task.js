import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    date: {
        type: Date,
        default: new Date()
    },
    assignedTo: String,
    status: String
});


const Task = mongoose.model('Task', taskSchema);

export default Task;