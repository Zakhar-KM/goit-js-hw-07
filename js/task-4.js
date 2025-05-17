const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const elements = form.elements;

  const formData = {};

  for (const element of form.elements) {
    if (element.name) {
      const value = element.value.trim();
      if (value === "") {
        alert("All form fields must be filled in");
        return;
      }
      formData[element.name] = value;
    }
  }

  console.log(formData);

  form.reset();
}

const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {
  button.classList.add("hovered");
});

button.addEventListener("mouseleave", () => {
  button.classList.remove("hovered");
});

const input = document.querySelector("input");

input.addEventListener("mouseenter", () => {
  button.classList.add("input-hovered");
});

input.addEventListener("mouseleave", () => {
  button.classList.remove("input-hovered");
});
