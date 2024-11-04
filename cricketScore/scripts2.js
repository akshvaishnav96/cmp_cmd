

const form = document.querySelector("form")
const scoreData = [];

let scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreBoard")
let scoreMainArea = document.querySelector(".board");
scoreMainArea.appendChild(scoreBoard)


form.addEventListener("submit", (elem) => {
    elem.preventDefault()
    const formData = new FormData(form);
    let formObject = Object.fromEntries(formData)
    formObject = { ...formObject, score: Number(formObject.score) }
    filterData(formObject)
    scoreBoard.innerHTML = ""
    generatePreviewOnPage()
 
    form.reset()

})

function generatePreviewOnPage() {
    scoreData.map((item, index) => {
        let scoreCard = document.createElement("div");
        scoreCard.classList.add("scoreCard")
        let fNameElem = document.createElement("p")
        fNameElem.innerHTML = item.fname +" "+ item.lname
        let lNameElem = document.createElement("p")
        lNameElem.innerHTML = item.country
        let scoreElem = document.createElement("p")
        scoreElem.innerHTML = item.score
        let ButtonElem = document.createElement("p");
        let plusBtn = document.createElement("span");
        plusBtn.addEventListener("click", () => plusInScore(index))
        let minusBtn = document.createElement("span");
        plusBtn.innerHTML = "+"
        minusBtn.addEventListener("click", () => minusInScore(index))
        minusBtn.innerHTML = "-"
        let deleteBtn = document.createElement("span");
        deleteBtn.addEventListener("click", () => deleteScore(index))
        deleteBtn.innerHTML = "Del"

        ButtonElem.append(plusBtn, minusBtn, deleteBtn)
        scoreCard.append(fNameElem, lNameElem, scoreElem, ButtonElem);
        scoreBoard.append(scoreCard)
    })
}

function plusInScore(index) {
    scoreData[index].score = scoreData[index].score += 5
    scoreBoard.innerHTML = ""
    sortData(scoreData)
    generatePreviewOnPage()
}

function minusInScore(index) {

    if (scoreData[index].score <= 0) {
        scoreData[index].score = scoreData[index].score = 0
    } else {

        scoreData[index].score = scoreData[index].score -= 5
    }
    scoreBoard.innerHTML = ""
    sortData(scoreData)
    generatePreviewOnPage()
}

function deleteScore(index) {
    scoreData.splice(index, 1)
    scoreBoard.innerHTML = ""
    generatePreviewOnPage()
}

function filterData(data){

    let filters = scoreData.filter((item)=> item.score < Number(data.score));
    if(filters.length >0){
        scoreData.splice(scoreData.indexOf(filters[0]),0,data)
    }else{
        scoreData.push(data)
    }


}


function sortData(scoreData){
    
    scoreData.sort((a,b)=>{
       return  b.score-a.score
    })
   
}

