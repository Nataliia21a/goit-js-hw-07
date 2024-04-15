function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const typeColorEl = document.querySelector(".color");
const randomColor = getRandomHexColor();

const changeColorEl = (event) => {
  if (btnEl) {
    typeColorEl.textContent = randomColor;
    console.log(typeColorEl.textContent);
    btnEl.style.background = randomColor;
    console.log(btnEl.style.background);
  }
};

btnEl.addEventListener("click", changeColorEl);
