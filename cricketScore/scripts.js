let form = document.querySelector("form");
let formElements = Array.from(document.forms[0].children);
let submit = document.querySelector("button");
let board = document.querySelector(".board");

let scoreArray = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let element = {}
    formElements.forEach((elem) => (element[elem.id] = elem.value));
    console.log(element)
    scoreArray.push(element);
        showData(scoreArray);
})

const updateScore = (index, number) => {
    scoreArray[index].score = Number(scoreArray[index].score) + number;
    showData(scoreArray);
}

const deleteElement = (index) => {
    scoreArray.splice(index, 1);
    showData(scoreArray);
}

const showData = (data) => {
    board.innerHTML = '';
    data.sort((a, b) => b.score - a.score);

    data.forEach((element, index) => {

        let MainDiv = document.createElement("div");
        let name = document.createElement("p");
        name.innerText = element.name;

        let countryname = document.createElement("p");
        countryname.innerText = element.countryname;
        
        let score = document.createElement("p");
        score.innerText = element.score;

        let increment = document.createElement("button");
        increment.innerText = "+5";
        increment.addEventListener("click", () => updateScore(index, 5));

        let decrement = document.createElement("button");
        decrement.innerText = "-5";
        decrement.addEventListener("click", () => updateScore(index, -5));

        let deletebutton = document.createElement("button");
        deletebutton.innerText = "Delete";
        deletebutton.addEventListener("click", () => deleteElement(index));

        MainDiv.append(name, countryname, score, increment, decrement, deletebutton);
        board.append(MainDiv);
    });
}