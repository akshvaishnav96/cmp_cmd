import { cleanPreview } from "./utils.js";
let showMorebtn = document.querySelector(".showmore");
let inputArea = document.querySelector("input");
let previewMain = document.querySelector(".preview")
let SelectElem = document.querySelector("select");
let limit = 20;
let offset = 0;
let mainPokemonData;
let filterPokemonData;
let oldData;

let filter = false

async function fetchData() {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const data = await res.json();
    return data.results;
}

async function getPokemonData() {
    let pokemons = await fetchData();
    let PokemonsMainData = pokemons.map(async (item) => {
        let res = await fetch(item.url);
        let data = await res.json();
        return data;
    });

    return PokemonsMainData;
}

async function generatePreview() {
    let data = await getPokemonData();
    let mainData = await Promise.all(data);
    mainPokemonData = mainData;


    let typesArray = []

    filterPokemonData = filterPokemonData ? filterPokemonData : mainPokemonData
 
    
    SelectElem.innerHTML = ""

    
    filterPokemonData.forEach((item) => {
        let pokemonTypes = item.types

        pokemonTypes.map((item) => {
            if (!typesArray.includes(item.type.name)) {
                typesArray = [...typesArray, item.type.name]
            }

        })



    })
    let resetOption = document.createElement("option")
    resetOption.innerHTML = "Reset Filter";
    resetOption.value = "reset"
    resetOption.addEventListener("click", () => resetFilter())
    SelectElem.append(resetOption)



    typesArray.forEach((item) => {
        let option = document.createElement("option")
        option.innerHTML = item;
        option.value = item
        option.addEventListener("click", () => filterByOption(item))
        SelectElem.appendChild(option)
    })

console.log(mainData[0]);

    mainData.forEach((item) => {
        
        let elem = item.types.map((elem)=> elem.type.name)



        
        previewMain.innerHTML += `
         <div class="flip-card">
                     <div class="flip-card-inner">
                       <div class="flip-card-front">
                         <img src="${item.sprites.other["official-artwork"].front_default}" alt="Avatar" ">
                           <h1>${item.name}</h1>
                              <h3>${elem[0]}</h3>
                       </div>
                       <div class="flip-card-back">
                         <h1>${item.name}</h1>
                         
                         <p>Height : ${item.height}</p>
                          <p>Weight : ${item.weight}</p>
                           <p>Moves : ${item.moves.length}</p>
                            <p>Types : ${item.types.length}</p>
                             <p>Indices : ${item.game_indices.length}</p>
                       </div>
                     </div>
                   </div>
      `;
    });
}

function generateFilterPreview() {
    filter = true
    filterPokemonData.forEach((item) => {
        previewMain.innerHTML += `
             <div class="flip-card">
                         <div class="flip-card-inner">
                           <div class="flip-card-front">
                             <img src="${item.sprites.other["official-artwork"].front_default}" alt="Avatar" ">
                               <h1>${item.name}</h1>
                           </div>
                           <div class="flip-card-back">
                             <h1>${item.name}</h1>
                             <p>Architect & Engineer</p>
                             <img src="${item.sprites.back_default}" alt="Avatar" ">
                           </div>
                         </div>
                       </div>
          `;
    });
}


function filterByOption(filterName) {
    let mainFlterData = []
    previewMain.innerHTML = ""
    filterPokemonData.forEach((item) => {
        item.types.forEach((elem) => {
            if (elem.type.name == filterName) {
                mainFlterData.push(item)
            };


        })

    })

    filterPokemonData = mainFlterData
    oldData = mainPokemonData
    generateFilterPreview()



}



function resetFilter() {
    previewMain.innerHTML = ""
    mainPokemonData = oldData
    generatePreview()
}

showMorebtn.addEventListener("click", () => {
    limit += 20;
    offset;
    previewMain.innerHTML = ""
    generatePreview();
});

inputArea.addEventListener("input", (e) => {
    if (e.target.value.length == 0) {
        previewMain.innerHTML = ""
        generatePreview()
    } else {

        const inputValue = e.target.value.toLowerCase();

        const filteredData = mainPokemonData.filter((item) => {

            return item.name.toLowerCase().includes(inputValue);
        });
        filterPokemonData = filteredData
        oldData = mainPokemonData
        previewMain.innerHTML = ""

        generateFilterPreview()
     


    }




});




generatePreview();