import cohere from 'cohere-ai';
import examples from './examples.js';
import catBreeds from './breeds.js';

module.exports.request = async (inputs) => {
  cohere.init('sJxTdjABsvuON4mBFAVzzGtJp7uXPa1umiC2PEPG');
  const response = await cohere.classify({
    model: 'large',
    inputs,
    examples,
  });
  return response.body.classifications[0];
};

(async () => {
  const inputs = [
    'tell me more about the korat breed',
    // 'make me laugh on the subject of cats',
    // 'give me an interesting tidbit pertaining to maine coon',
  ];

  const res = await request(inputs);
  const breed = catBreeds.find((breed) => inputs[0].toLowerCase().includes(breed));

  if (breed && res.prediction === 'Tell me more') {
    console.log(breed);
  }
})();
