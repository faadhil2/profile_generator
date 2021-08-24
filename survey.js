const readline = require('readline');
const questions = [
  "What's your name?\n",
  "What's an activity you like doing?\n",
  "What do you listen to while doing that?\n",
  "Which meal is your favourite (eg: dinner, brunch, etc.)\n",
  "What's your favourite thing to eat for that meal?\n",
  "Which sport is your absolute favourite?\n",
  "What is your superpower? In a few words, tell us what you are amazing at!\n"
];

const fillerWords = [
  "My Name is",
  "I enjoy",
  "I enjoy listening to",
  "My favourite meal of the day is",
  "For that meal I enjoy eating",
  "My favourite sport is",
  "My superpower is"
]

const answers = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counter = 0;

const askQuestion = function(questions, counter){
    if (counter === questions.length){
    console.log("My Profile:\n" + answers.join('. '));
    rl.close();
    } else{
    rl.question(questions[counter], (answer) => {
      answers.push(fillerWords[counter] + " "+ answer);
      counter ++
      askQuestion(questions, counter)
      });
    }
}

askQuestion(questions, counter);
