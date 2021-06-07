const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", inputValue);

function inputValue(e) {
  if (e.textContent === "") {
    return (nameEl.textContent = "незнакомец");
  } else {
    return (nameEl.textContent = e.currentTarget.value);
  }
}
