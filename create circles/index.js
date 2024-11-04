
let ClickedData = [];
let RedoClick = [];

let randomColor = ["red", "green", "pink", "yellow", "purple"]


let buttonsArray = [
    { innerText: "Reset", id: "reset" },
    { innerText: "Redo", id: "redo" },
    { innerText: "Undo", id: "undo" }

]

let wrapper = document.querySelector("#wrapper");





window.addEventListener("load", () => {
    buttonsArray.forEach((item) => {
        let button = document.createElement("button")
        button.innerHTML = item.innerText
        button.id = item.id
        button.disabled = true
        wrapper.append(button)
    })
})



wrapper.addEventListener("click", (e) => {

    let Key = e.target.id;


    if (e.target.nodeName === "BUTTON" && Key) {
        switch (Key) {
            case "reset": reset()
                break;

            case "redo": redo()

                break;


            case "undo": undo()

                break;

            default:

        }
    } else {
        let xPosition = e.clientX - 10
        let yPosition = e.clientY - 10
        let randomColorValue = generateRandomColor()

        let cursorDiv = document.createElement("div");
        cursorDiv.style.position = "absolute";
        cursorDiv.style.left = `${xPosition}px`
        cursorDiv.style.top = `${yPosition}px`
        cursorDiv.style.background = randomColorValue
        cursorDiv.style.width = "20px"
        cursorDiv.style.height = "20px"
        cursorDiv.style.borderRadius = "10px"
        ClickedData.push(cursorDiv);
        updateWrapper()
    }
}
)

function generateRandomColor() {
    let number = Math.floor(Math.random() * (5));

    return randomColor[number]

}



function updateWrapper() {
    let resetBtn = document.querySelector("#reset");
    let redoBtn = document.querySelector("#redo");
    let undoBtn = document.querySelector("#undo");
    if (ClickedData.length > 0) {

        resetBtn.disabled = false
    } else {
        resetBtn.disabled = true
    }

    if (RedoClick.length > 0) {
        redoBtn.disabled = false
    } else {
        redoBtn.disabled = true

    }

    if (ClickedData.length >0) {
        undoBtn.disabled = false
    } else {
        undoBtn.disabled = true
    }

    Array.from(wrapper.children).forEach((item) => {
        if (item.nodeName == "DIV") {
            wrapper.removeChild(item);
        }


    })

    ClickedData.forEach((item) => {

        wrapper.append(item)
    })
}




function reset() {

    ClickedData.forEach((item) => {
        wrapper.removeChild(item)
    })

    ClickedData.length = 0;
    RedoClick.length = 0

    updateWrapper()
}

function redo() {
    let redoData = RedoClick.pop()
    ClickedData.push(redoData)



    updateWrapper()
}


function undo() {
    let undoData = ClickedData.pop()
    RedoClick.push(undoData)

    updateWrapper()

}






