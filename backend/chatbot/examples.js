const CAT_JOKE = 'Cat joke';
const CAT_FACT = 'Cat fact';
const MORE_INFO = 'Tell me more';

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
];

const exampleFactory = (label, examples) => {
  return examples.map((example) => {
    return { label, example };
  });
};

const examples = [
  ...exampleFactory(CAT_JOKE, catJokeExamples),
  ...exampleFactory(CAT_FACT, catFactExamples),
];

export default examples;
