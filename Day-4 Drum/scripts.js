let musicArea = document.querySelector("#right");





const musicItemsArray = [
    {
        imgSrc: "/assets/crash.png",
        id: "crash"
    },
    {
        imgSrc: "/assets/kick.png",
        id: "kick"
    },
    {
        imgSrc: "/assets/snare.png",
        id: "snare"
    },
    {
        imgSrc: "/assets/tom.png",
        id: "tom"
    },

]



window.addEventListener("load", () => {
    musicItemsArray.forEach((item) => {
        let image = document.createElement("img")
        image.src = item.imgSrc
        image.id = item.id
        musicArea.append(image)
    })
})

musicArea.addEventListener("click", (elem) => {
    let key = elem.target.id;
    switch (key) {
        case "crash": playCrash()
            break;
        case "kick": playKick()
            break;
        case "snare": playSnare()
            break;

        case "tom": playTom()
            break;
        default:
            break;
    }
})



document.addEventListener("keydown",
    (event) => {
        const keyName = event.key;
        if (keyName === "a") {
            playCrash()
        }

        if (keyName === "s") {
            playKick()
        }

        if (keyName === "d") {
            playSnare()
        }

        if (keyName === "w") {
            playTom()
        }

    })







function playCrash() {
    let audio = new Audio("/assets/crash.mp3");
    audio.play();
    addShadowOnBoxWhenHit("crash")
}

function playKick() {
    let audio = new Audio("/assets/kick.mp3");
    audio.play();
    addShadowOnBoxWhenHit("kick")
}

function playSnare() {
    let audio = new Audio("/assets/snare.mp3");
    audio.play();
    addShadowOnBoxWhenHit("snare")
}

function playTom() {
    let audio = new Audio("/assets/tom.mp3");
    audio.play();
    addShadowOnBoxWhenHit("tom")
}


function addShadowOnBoxWhenHit(boxName){
    let boxHit  = document.getElementById(boxName)
    boxHit.style.boxShadow="2px 2px 20px gray"
    setTimeout(()=>{
  boxHit.style.removeProperty("box-Shadow")
    },500)
}