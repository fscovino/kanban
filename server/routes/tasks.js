import express from 'express';
import { createTask, getTask, getTasks, updateTask, deleteTask } from '../controllers/tasks.js';

const router = express.Router();

router.post('/', createTask);

router.get('/', getTask);

router.get('/all', getTasks);

router.put('/', updateTask);

router.delete('/', deleteTask);

export default router;