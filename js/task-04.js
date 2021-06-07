const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let result = Number(value.textContent);
console.log(result);

const add = () => {
  result += Number(1);
  return (value.textContent = result);
};
const rem = () => {
  result -= Number(1);
  return (value.textContent = result);
};

increment.addEventListener("click", add);
decrement.addEventListener("click", rem);
