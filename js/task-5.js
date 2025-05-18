function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector(".widget");
const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  text.textContent = color;
});
button.addEventListener("mouseenter", () => {
  button.classList.add("hovered");
});
button.addEventListener("mouseleave", () => {
  button.classList.remove("hovered");
});
