const mainInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

mainInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();
  textOutput.textContent = value === "" ? "Anonymous" : value;
});

console.log(textOutput);

mainInput.addEventListener("mouseenter", () => {
  mainInput.classList.add("input-hovered");
});

mainInput.addEventListener("mouseleave", () => {
  mainInput.classList.remove("input-hovered");
});
