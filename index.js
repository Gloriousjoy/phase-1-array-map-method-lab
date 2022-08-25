const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((words) => {
    const array = words.split(' ');
    for (var i = 0; i <array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  const updated = array.join(' ');
  return updated;
  })
}

