const cohere = require('cohere-ai');
const { examples } = require('./examples');
const { catBreeds } = require('./data/breeds');
const { catJokes } = require('./data/jokes');
const axios = require('axios');

module.exports.request = async (inputs) => {
  cohere.init('sJxTdjABsvuON4mBFAVzzGtJp7uXPa1umiC2PEPG');
  const response = await cohere.classify({
    model: 'large',
    inputs,
    examples,
  });
  return response.body.classifications;
};

const getRandomCatJoke = () => {
  return catJokes[Math.floor(Math.random() * catJokes.length)];
};

const getRandomCatFact = async () => {
  catFact = await axios.get('https://catfact.ninja/fact');
  return catFact.data.fact;
};

module.exports.createResponse = async (intent) => {
  if (intent === 'Cat joke') {
    return getRandomCatJoke();
  } else if (intent === 'Cat fact') {
    return await getRandomCatFact();
  }
  // const breed = catBreeds.find((breed) => inputs[0].toLowerCase().includes(breed));
  // if (breed && res.prediction === 'Tell me more') {
  //   console.log(breed);
  // }
};

// (async () => {
//   const inputs = [
//     'tell me more about the korat breed',
//     // 'make me laugh on the subject of cats',
//     // 'give me an interesting tidbit pertaining to maine coon',
//   ];

//   const res = await request(inputs);
//   const breed = catBreeds.find((breed) => inputs[0].toLowerCase().includes(breed));

//   if (breed && res.prediction === 'Tell me more') {
//     console.log(breed);
//   }
// })();
