const colorTextArray = [
  { color: "dark", background: "green" },
  { color: "light", background: "black" },
  { color: "dark", background: "pink" },
  { color: "light", background: "purple" },
  { color: "light", background: "blue" },
];

function randomColor() {

  
    let randomNum = Math.floor(Math.random() * 5);
    return colorTextArray[randomNum];
}


  


  


  function addAvatarBtnHandler() {
    form.style.display = "flex";
  
    inputArea.focus();
  }

  function generateAvatar(text) {
    let color = randomColor();
    let firstChar = text.slice(0, 1).toUpperCase();
    const avatarLogo = document.createElement("div");
    avatarLogo.classList.add("avatarLogo");
    avatarLogo.style.background = color.background;
    avatarLogo.style.color = color.color === "dark" ? "black" : "white";
    const charParagraph = document.createElement("p");
    charParagraph.innerHTML = firstChar;
    const deleteAvatar = document.createElement("div");
    deleteAvatar.classList.add("deleteAvatar");
    deleteAvatar.innerHTML = `<i className="fa-solid fa-xmark"></i>`;
  
    avatarLogo.appendChild(charParagraph);
    avatarLogo.appendChild(deleteAvatar);
    avatarData.push(avatarLogo);
    deleteAvatar.addEventListener("click", () => deleteAvatarConfirm(avatarLogo));
  }

  export {addAvatarBtnHandler,randomColor}