const cohere = require('cohere-ai');
const { examples } = require('./examples');
const { catBreeds } = require('./data/breeds');
const { catJokes } = require('./data/jokes');
const { catBreedFacts } = require('./data/facts');
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

module.exports.createResponse = async (input, intent) => {
  if (intent === 'Cat joke') {
    return getRandomCatJoke();
  } else if (intent === 'Cat fact') {
    return await getRandomCatFact();
  } else if (intent === 'Tell me more') {
    const breed = catBreeds.find((breed) => input.toLowerCase().includes(breed.toLowerCase()));
    if (breed) {
      return catBreedFacts[breed];
    }
    return `What breed do you want to know more about?`;
  }
};
