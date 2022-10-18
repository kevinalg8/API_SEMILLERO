//import {data} from "./data/data.js";
import { questions } from "./data/question.js";
import { Quiz } from "./models/quiz.js";
//console.log(questions);
function main() {
    const quiz = new Quiz(questions);

    console.log(quiz);
}
main();