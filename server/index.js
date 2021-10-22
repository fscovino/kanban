import express from 'express';
import bodyParser from 'body-parser';
import { Mongoose } from 'mongoose';
import cors from 'cors';


const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});