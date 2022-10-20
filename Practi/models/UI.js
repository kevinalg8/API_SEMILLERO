// Clase para insertar en las vistas 
export class UI {
    constructor(){}
    
    showQuestion(text){
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }
    showChoices(choice, callback){
        const choiceContainer = document.getElementById("choice")
        
        choiceContainer.innerHTML ="";
        
        for (let i = 0; i < choice.length; i++){
            const button = document.createElement("button")
            button.innerHTML = choice[i]
            button.className = "button";  
            button.addEventListener("click",() => callback(choice[i]));

            choiceContainer.append(button)
        };
    }
    showScores(score){
        const quizEndHmtl = (`<h1>Result</h1>
        <h2>Your Score: ${score}</h2>`);
    
        const element = document.getElementById("quiz");
        element.innerHTML = quizEndHmtl;
    }
};
