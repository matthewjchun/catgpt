const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const catbot = require('./chatbot/catbot');
// import mongoose from 'mongoose'

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// route to get chatbot response
app.post('/chat', async (req, res) => {
  const input = req.body.query;

  try {
    const cohereResponse = await catbot.request([input]);
    console.log(cohereResponse);
    const intent = cohereResponse[0].prediction;
    const catBotResponse = await catbot.createResponse(input, intent);
    console.log(catBotResponse);
    res.send(catBotResponse);
  } catch (e) {
    console.log(e);
  }
});
