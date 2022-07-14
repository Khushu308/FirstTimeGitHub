const quizDB = [
    {
        question: "1. I have 4 legs and a tail. I have whiskers. People like to keep me as a pet. What am I?",
        a: "I am a goat",
        b: "I am a dog",
        c: "I am a tiger",
        d: "I am a cat",
        ans: "ans4"
    },
    {
        question: "2. I am a bird. I can swim but I can’t fly. I am black and white. What am I?",
        a: "I am a kangaroo",
        b: "I am a penguin",
        c: "I am a ostrich",
        d: "I am a bat",
        ans: "ans2"
    },
    {
        question: "3. I have a large tail and big feet. I can hop along very fast. I live in Australia. What am I?",
        a: "I am a kangaroo",
        b: "I am a penguin ",
        c: "I am a polar bar",
        d: "I am a Whale",
        ans: "ans1"
    },
    {
        question: "4. I have thick grey skin. I have big ears and a long trunk. I can spray water with my trunk. What am I?",
        a: "I am a whale",
        b: "I am a giraffee",
        c: "I am a buffalo",
        d: "I am an elephant",
        ans: "ans4"
    },
    {
        question: "5. I am a bird. I make a ‘hoot’ sound. I am usually awake at night. What am I?",
        a: "I am a parrot",
        b: "I am an owl",
        c: "I am a pigeon",
        d: "I am a peacock",
        ans: "ans2"
    },
    {
        question: "6.I have brown and orange spots. I have 4 long legs. I am very tall. What am I?",
        a: "I am a deer",
        b: "I am a cheetah",
        c: "I am a giraffe",
        d: "I am a zebra",
        ans: "ans3"
    },
    {
        question: "7. I have 2 arms, 2 legs, and a tail. I like to eat bananas. I can swing from trees. What am I?",
        a: "I am a monkey",
        b: "I am a peacock",
        c: "I am a giraffe",
        d: "I am a cat",
        ans: "ans1"
    },
    {
        question: "8. I eat leaves, grass, and plants. I have thick skin. I have a large horn on my face. What am I?",
        a: "I am a buffalo",
        b: "I am a goat",
        c: "I am a rhino",
        d: "I am a yak",
        ans: "ans3"
    },
    {
        question: "9. I am a big cat. I have big sharp teeth. I have yellow fur and black stripes. What am I?",
        a: "I am a yellow cat",
        b: "I am a zebra",
        c: "I am a wild cat",
        d: "I am a tiger",
        ans: "ans4"
    },
    {
        question: "10. I live in the ocean. I can live for a long time. I am a very large mammal. What am I?",
        a: "I am a seal",
        b: "I am a dolphin",
        c: "I am a whale",
        d: "I am a shark",
        ans: "ans3"
    }
];
const question = document.querySelector('.question')
const op1 = document.querySelector('#op1')
const op2 = document.querySelector('#op2')
const op3 = document.querySelector('#op3')
const op4 = document.querySelector('#op4')
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');
const countdown = document.querySelector("#countdown");

const start = 1;
let time = start * 60;
let questionCount = 0;
let score = 0;

const loadquestion = () => { 
    
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    op1.innerText = questionList.a;
    op2.innerText = questionList.b;
    op3.innerText = questionList.c;
    op4.innerText = questionList.d;

}


loadquestion();




const getCheckedAns= () => {
    let answer;
     answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer= curAnsElem.id;}
        });
        return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => false);
}

submit.addEventListener('click',() => {
    const checkedans = getCheckedAns();
    console.log(checkedans);
    if(checkedans == quizDB[questionCount].ans){
        score++;
    }

    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadquestion();
    } else{
        showscore.innerHTML= `
        <h3>You scored ${score}/${quizDB.length}</h3> <button class="btn" onclick="location.reload()"> Play again</button>
        `; 
        showscore.classList.remove('scorearea');
    }

});