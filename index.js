var readlineSync = require ('readline-sync');
 var score = 0;
const chalk = require ('chalk');
var userName = readlineSync.question ("Hello! what is your name? ");
console.log(chalk.blue ("Welcome " + userName + " To HOW WELL DO OU KNOW Mirzapur"));

//var highScore = [
  //shivScore: 3, nandScore:1
//];

function play (question,answer){
  var userAnswer = readlineSync.question (chalk.yellow (question));
  if (userAnswer===answer)
  {
    console.log (chalk.yellow ("Your answer was right!"))
    score++;
  }
  else {
    console.log(chalk.red("Your answer was wrong "))
  }
  {
    console.log(chalk.whiteBright("Your Score is = " + score))
    console.log ("----------")
  }
}

var questionBank = [
  questionOne = {
    question: "What is the first name of Munna bhaiya's father? ",
    answer: "akhandanand"
  },
   questionTwo = {
    question: "What is written on the numberpate of car driven by munna bhaiya ? ",
    answer: "king of mirzapur"
  },
   questionThree = {
    question: "What is the name of guddu bhaiya's wife? ",
    answer: "Sweety"
  },
   questionFour = {
    question: "What is Sweety and Golu Gupta’s father’s profession? ",
    answer: "lawyer"
  }
]

for (i=0; i<questionBank.length; i = i+ 1){
  play (questionBank[i].question, questionBank[i].answer)
}
console.log('Final score is  :' + score);    
//array of highscore
highScore = [
    {
        username: "shiv",
        point: 2
    },
    {
        username: "MEE6",
        point: 1
    },
    {
        username: "random",
        point: 0
    }
];
//displaying highscore
console.log(chalk.bgYellow(" High Score "));
console.table(highScore);
// getting high score
var max = highScore[0].point;
for (let i = 1; i < highScore.length; i++) {
  if (highScore[i].point > max) {
    max = highScore[i].point;
  }
}
//checking if user beat the hihg score
if(score>max){
    console.log(chalk.inverse.bold("\n Congrats u beat high score \n"));
}
else{
    console.log(chalk.inverse.bold("\n Better Luck Next Time \n"));

}
