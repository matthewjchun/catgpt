import cohere from 'cohere-ai';
import examples from './examples.js';

cohere.init('sJxTdjABsvuON4mBFAVzzGtJp7uXPa1umiC2PEPG');

const inputs = ['tell me a cat joke', 'make me laugh on the subject of cats'];

(async () => {
  const response = await cohere.classify({
    model: 'large',
    inputs,
    examples,
  });
  console.log(
    `The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`
  );
})();
