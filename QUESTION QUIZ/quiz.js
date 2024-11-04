import questionArr from "./questions.js"
import { updateDomWithQuestion } from "./utils.js"

let timerCount = 5



const timer = setInterval(() => {
    timerCount--
    if (timerCount < 1) {
        updateDomWithQuestion()
        timerCount = 5
    }
    document.querySelector(".timer").innerHTML = timerCount
}, 1000)

export { timer }