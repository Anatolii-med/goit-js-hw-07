const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", inputValue);

inputValue = (e) => {
  if (e === "") {
    return (nameEl.textContent = "незнакомец");
  } else {
    return (nameEl.textContent = e.currentTarget.value);
  }
};
