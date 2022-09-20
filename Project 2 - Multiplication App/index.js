// random() function which generates no. btw 0 & 1 and to ger number btw 1 and 9 we do mulitply of 10 and to ger round figure values we use math.ceil() function
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

const scoreEl = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if (!score){
    score =0;
}

questionEl.innerText = `what is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    // comparing user answer with the correct answer
    if(userAns==correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
})
// to convert string to number add + prefix to input 


// stroing locally
// in order to store number in local storage we need to convert the no to string otherwise the browser will not allow to store no in local storage we use : JSON.stringify(score)

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}

scoreEl.innerText = `score: ${score}`