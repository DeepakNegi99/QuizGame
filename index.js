let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;
let userName = readlineSync.question("What's your name? ");
console.log(kuler(`\nHello ${userName}! Welcome to QuizGame`, "#dc2626"));

console.log("Plese select your option");

/******** Creating data set ***********/

const database = {
  category: {
    name: "javascript",
  },
  data: [
    {
      question: `Let a = {}, b = {}
console.log(a==b)
console.log(a===b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true",
      },
      correctAnswer: "a",
    },
    {
      question: "Object.assign(target, source) creates which type of copy?",
      options: {
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference",
      },
      correctAnswer: "b",
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "yes",
        b: "no",
      },
      correctAnswer: "b",
    },
  ],
};

/******* Creating LeaderBoard *************/

const leaderBoard = {
  data: [
    {
      name: "David",
      score: 1,
    },
    {
      name: "Sonia",
      score: 3,
    },
    {
      name: "Emma",
      score: 2,
    },
  ],
};

/********* Main Logic *********/

function playGame(userAnswer, corrrectAnswer) {
  if (userAnswer === corrrectAnswer) {
    console.log(kuler("Correct Answer", "#059669"));
    score++;
  } else {
    console.log(kuler("InCorrect Answer", "#b91c1c"));
    console.log(kuler(`Correct Answer is ${corrrectAnswer}`, "#1d4ed8"));
  }
}

function showQuestionAndOptions() {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`Q${i + 1} - ${database.data[i].question}`);
    for (let key in database.data[i].options) {
      console.log(`${key}-${database.data[i].options[key]}`);
    }
    let userAnswer = readlineSync.question("Enter your answer -").toLowerCase();
    playGame(userAnswer, database.data[i].correctAnswer);
  }
}

function highScorer(leadeBoard) {
  leaderBoard.data.push({ name: userName, score: score });
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("Check your position on the leaderboard😶‍🌫️😶‍🌫️", "#fde047"));
  for (let leader of sortedScoreList) {
    console.log(kuler(`${leader.name} - Score: ${leader.score}`, "#9338ec"));
  }
}

showQuestionAndOptions(database);
console.log(kuler(`Your score is - ${score}`, "#5eead4"));
highScorer(leaderBoard);

