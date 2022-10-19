//import {data} from "./data/data.js";
import { questions } from "./data/question.js";
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/UI.js";

const renderPage =(quiz, ui) =>{
  ui.showQuestion(quiz.getQuestionIndex().text)
  ui.showChoices(quiz.getQuestionIndex().choice, (currentChoice) =>{
    quiz.guess(currentChoice);
    renderPage(quiz, ui);
  })
};

//console.log(questions);
function main() {
  const quiz = new Quiz(questions),
    ui = new UI();

    renderPage(quiz, ui);
  // console.log(quiz);
};

main();
