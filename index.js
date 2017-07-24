const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the input text? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`${answer} has ${answer.length} characters`);

  rl.close();
});
