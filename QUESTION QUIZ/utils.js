import questionArr from "./questions.js";
import { timer } from "./quiz.js";

const questionElement = document.querySelector(".question");
const optionsElements = document.querySelectorAll(".options");
const questionOptionsMain = document.querySelector(".question_options_main")
const resultMain = document.querySelector(".main");



let questionAnswer;
let score = 0;
let questionCount = 0;
const already_Question_Done = {}
let randomOptions = []


function random_Number_Generate_zero_to_four() {
    randomOptions = []
    
    for (let i = 4; i > 0; i--) {
        
        randomOptionsNumberGenerater()
        
    }
    let randomNum = Math.floor(Math.random() * (5));
    return {randomNum,randomOptions}
}


const get_Random_Question_Data = function () {

    let {randomNumber,randomOptions} = random_Number_Generate_zero_to_four();
    document.querySelector(".indexVal").innerHTML = `<span>${randomNumber}</span>`
    if (already_Question_Done[randomNumber] && questionCount < 5) {
        get_Random_Question_Data()
    } else {

        already_Question_Done[randomNumber] = randomNumber;
        const { question, options, answer } = questionArr[randomNumber]

        const data = { question, options, answer,randomOptions }
        return data
    }


}


function updateDomWithQuestion() {

    if (questionCount == 5) {
        clearInterval(timer)

        resultMain.innerHTML = `<h1>Well Done ! Your score is : ${score}</h1>`
        return
    }

    optionsElements.forEach((item) => {
        item.removeAttribute("disabled")
        if (item.classList.contains("active")) {
            item.classList.remove("active")
        }
    })

    const data = get_Random_Question_Data()


    questionAnswer = data?.answer

    questionCount++


    questionElement.innerHTML = `${questionCount}. Question : " ${data?.question} " `
    optionsElements.forEach((item, index) => {
        item.innerHTML = data?.options[index]
    })

  




}

questionOptionsMain.addEventListener("click", (element) => {

    if (element.target.nodeName == "BUTTON") {
        element.target.innerHTML == questionAnswer ? score++ : ""
        element.target.classList.add("active")

        optionsElements.forEach((item) => {
            item.setAttribute("disabled", true)
        })
    }

})



function randomOptionsNumberGenerater() {
    
    let randomNum = Math.floor(Math.random() * (4));
    if (randomOptions.includes(randomNum) && randomOptions.length <4) {
        randomOptionsNumberGenerater()
    } else {
        randomOptions.push(randomNum)
    }


}









export { updateDomWithQuestion }