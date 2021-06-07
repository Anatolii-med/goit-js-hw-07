const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", changingTextSize);

function changingTextSize() {
  const sizeValue = inputEl.value;
  return (textEl.style.fontSize = sizeValue + "px");
}
