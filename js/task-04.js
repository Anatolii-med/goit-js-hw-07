const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let result = 0;
console.log(result);

const add = (value) => {
  result += 1;
  value.innerHTML = result;
};
const rem = (value) => {
  result -= 1;
  value.textContent = result;
};

const addBtn = increment.addEventListener("click", add);
const removeBtn = decrement.addEventListener("click", rem);
