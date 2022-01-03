import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import tasksRoutes from './routes/tasks.js';


// Express Connection
const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// Set the routes for Tasks
app.use('/task', tasksRoutes);
app.get('/', (req, res) => {
  res.send('Hello, welcome to Kanban Scovino API');
});


mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));