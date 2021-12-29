import express from 'express';

// Import all methods from controller Tasks
import { createTask, getTask, getTasks, updateTask, deleteTask } from '../controllers/tasks.js';

const router = express.Router();

router.post('/', createTask);

router.get('/:id', getTask);

router.get('/', getTasks);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

export default router;