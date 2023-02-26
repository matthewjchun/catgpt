const cohere = require('cohere-ai');
const { examples } = require('./examples');
const { catBreeds } = require('./data/breeds');
const {
  catGreetings,
  catJokes,
  catBreedFacts,
  catThanks,
  catGoodbye,
} = require('./data/responses');
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

const getRandomCatGoodbye = () => {
  return catGoodbye[Math.floor(Math.random() * catGoodbye.length)];
};

const getRandomCatJoke = () => {
  return catJokes[Math.floor(Math.random() * catJokes.length)];
};

const getRandomCatThanks = () => {
  return catThanks[Math.floor(Math.random() * catThanks.length)];
};

const getRandomCatGreeting = () => {
  return catGreetings[Math.floor(Math.random() * catGreetings.length)];
};

const getRandomCatFact = async () => {
  catFact = await axios.get('https://catfact.ninja/fact');
  return catFact.data.fact;
};

const nekofy = (res) => {
  const catTalk = [
    ' *meow* ',
    ' ~nyah~ ',
    ' ~prrr~ ',
    ' =^_^= ',
    ' (=^･ω･^=) ',
    ' *mEEEwr* ',
    ' ~mew~ ',
  ];
  const newResponse = res.split(' ').map((word) => {
    if (Math.random() < 0.1) {
      return word + catTalk[Math.floor(Math.random() * catTalk.length)];
    }
    return word + ' ';
  });

  return newResponse.join('');
};

module.exports.createResponse = async (input, intent) => {
  let response = '';

  if (intent === 'Cat joke') {
    response = getRandomCatJoke();
  } else if (intent === 'Cat fact') {
    response = await getRandomCatFact();
  } else if (intent === 'Tell me more') {
    const breed = catBreeds.find((breed) => input.toLowerCase().includes(breed.toLowerCase()));
    if (breed) {
      response = catBreedFacts[breed];
    } else {
      response = `What breed do you want to know more about?`;
    }
  } else if (intent === 'Greeting') {
    response = getRandomCatGreeting();
  } else if (intent === 'Thanks') {
    response = getRandomCatThanks();
  } else if (intent === 'Goodbye') {
    response = getRandomCatGoodbye();
  } else {
    response = `Sorry, I'm not sure what you mean.`;
  }

  response = nekofy(response);
  return response;
};
