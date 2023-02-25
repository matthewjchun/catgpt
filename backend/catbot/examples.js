const CAT_JOKE = 'Cat joke';
const CAT_FACT = 'Cat fact';

const catJokeExamples = [
  'I want a cat joke',
  'Can I have a cat joke',
  'I want a random cat joke',
  'Cat joke please',
  'Cat joke',
  'Joke about a cat',
  'Joke about cats please',
  'Supply me with a playful quip pertaining a feline creatue',
];

const catFactExamples = [
  'I want a cat fact',
  'Can I have a cat fact',
  'I want a random cat fact',
  'Cat fact please',
  'Cat fact',
  'Fact about a cat',
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
