var readlineSync= require("readline-sync");
var chalk=require("chalk");
var username=readlineSync.question(chalk.yellow("Hello user what's your name \n"));
var score=0;
console.log(chalk.blue("Welcome "+ username + " to DO YOU KNOW IMROZ "));
// function to check answer and calculate score
function play(question,answer){
  var useranswer=readlineSync.question(question);
  if(useranswer==answer){
    console.log(chalk.green("Right"));
    score+=1;
  }
  else 
    console.log(chalk.red("Wrong"));
  console.log(chalk.bgMagenta("current score",score));
  console.log(chalk.blue("-----"));
}
// questions for quiz
question1={
  question:chalk.yellow("Where do I live? \n a)Delhi\n b)Patna \n c)Gujarat \n"),
  answer:"b"
}
question2={
  question:chalk.yellow("What is my favourite sport? \na)Football \nb)Cricket \nc)Hockey\n"),
  answer:"a"
}
question3={
  question:chalk.yellow("Which team I support in Football? \na)Real Madrid \nb)Barcelona \nc)Liverpool\n"),
  answer:"c"
}
question4={
  question:chalk.yellow("Which web series I like the most? \na)Peaky Blinders \nb)Game of Thrones \nc)Mr.Robot \n"),
  answer:"c"
}
question5={
  question:chalk.yellow("What is the thing I like to do most in spare time? \na)Travel \nb)Relax \nc)Explore new things \n"),
  answer:"a"
}
questions=[question1,question2,question3,question4,question5];
// loop to run function for each question
for(var i=0;i<questions.length;i++){
  current=questions[i];
  play(current.question,current.answer);

}
console.log(chalk.underline("Your score after the quiz is",score));
if(score==3)
  console.log(chalk.magenta("You must be a good friend of Imroz"));
else if(score>=4)
  console.log(chalk.magenta("You must be a close relative of Imroz"));