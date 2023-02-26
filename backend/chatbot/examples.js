const { catBreeds } = require('./data/breeds');

const CAT_JOKE = 'Cat joke';
const CAT_FACT = 'Cat fact';
const MORE_INFO = 'Tell me more';
const GREETING = 'Greeting';

const catJokeExamples = [
  'I want a cat joke',
  'Can I have a cat joke',
  'I want a random cat joke',
  'Cat joke please',
  'Cat joke',
  'Joke about a cat',
  'Joke about cats please',
  'Supply me with a playful quip pertaining a feline creature',
  'tell me a cat joke',
  'make me laugh on the subject of cats',
  'entertain me with joyous jests of the felis catus variety',
];

const catFactExamples = [
  'I want a cat fact',
  'Can I have a cat fact',
  'I want a random cat fact',
  'Cat fact please',
  'Cat fact',
  'Fact about a cat',
  'Supply me with a serious fact about felines',
  'I wish to know more about the organism felis catus',
  'Please enrich my knowledge on cats',
];

const moreInfoExamples = [
  'Tell me more about this cat breed',
  'What can you tell me about the american curl',
  'I want to know about about the burmilla',
  'Can you give me more information about this cat breed?',
  `I'm interested in learning more about this cat breed. Could you tell me about it?`,
  'What can you tell me about this particular cat breed?',
  `Could you elaborate on this cat breed a little more?`,
  `Can you provide some additional details on this cat breed?`,
  `I'd like to know more about this cat breed. Can you share some information with me?`,
  `Could you expand on the characteristics of this cat breed?`,
  `What makes this cat breed unique? Can you provide more details?`,
  `Can you tell me more about the history and traits of this cat breed?`,
  `I'm curious to learn more about this cat breed. Can you tell me anything else?`,
  ...catBreeds,
];

const greetingExamples = [
  'Hi',
  'Hi CatGPT',
  'Howdy',
  'Hiya',
  'Good morning',
  'Good evening',
  'Good afternoon',
  'Greetings',
  'Hey',
  `What's up`,
];

const exampleFactory = (label, examples) => {
  return examples.map((example) => {
    return { label, text: example };
  });
};

module.exports.examples = [
  ...exampleFactory(CAT_JOKE, catJokeExamples),
  ...exampleFactory(CAT_FACT, catFactExamples),
  ...exampleFactory(MORE_INFO, moreInfoExamples),
  ...exampleFactory(GREETING, greetingExamples),
];
