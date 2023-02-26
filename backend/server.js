import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import mongoose from 'mongoose'

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//
app.post('/chat', async (req, res) => {
  // const query = req.body.query;
  const query = 'tell me a cat joke';
  const response = catbot.request([query]);
  console.log(res);
});
