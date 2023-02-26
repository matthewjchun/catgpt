const cohere = require('cohere-ai');
const { examples } = require('./examples');
const { catBreeds } = require('./data/breeds');
const { catJokes } = require('./data/jokes');

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

module.exports.createResponse = (intent) => {
  if (intent === 'Cat joke') {
    return getRandomCatJoke();
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
