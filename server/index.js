import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import tasksRoutes from './routes/tasks.js';


// Express Connection
const PORT = process.env.PORT || 3001;
const app = express();

// Database connection
const DB_URL = 'mongodb+srv://fscovino:MongoFS14042@kanban-db.xf8nd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`)))
  .then((error) => console.log(error.message));

  // Set the routes
  app.use('/task', tasksRoutes);