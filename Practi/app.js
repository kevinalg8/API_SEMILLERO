//import {data} from "./data/data.js";
import { questions } from "./data/question.js";
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/UI.js";

const renderPage =(quiz, ui) =>{
  if (quiz.isEnded()) {
    //Posiblemente quitar la S de Scores
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text)
    ui.showChoices(quiz.getQuestionIndex().choice, (currentChoice) =>{
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    })
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
  }
};
//console.log(questions);
function main() {
  const quiz = new Quiz(questions),
    ui = new UI();

    renderPage(quiz, ui);
  // console.log(quiz);
};

main();
