const quizForm = document.querySelector('#quiz-form');
const submitBtn = document.querySelector('#submit-button');
const showOutput = document.querySelector('#output') ;
const correctAnswers = ['90°' , 'Right angled' , '45°' , '30°' ,'100°'];

submitBtn.addEventListener('click',calculateScore)


function calculateScore(){
    
    const formResults = new FormData(quizForm);
    let score = 0;
    let index = 0;

 for(let value of formResults.values()){
    if(value===correctAnswers[index]){
        score= score +1 ;
    }
    index= index + 1;
 }
    showOutput.innerText = "Your score is " + score;
}
