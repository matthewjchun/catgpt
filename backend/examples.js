const cohere = require('cohere-ai');
cohere.init('<<apiKey>>');

const response = await cohere.classify(inputs, examples);
