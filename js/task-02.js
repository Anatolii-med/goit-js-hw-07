"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

const createItems = () => {
  return ingredients.map((item) => {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    return liEl;
  });
};

const itemsEl = createItems(ingredients);

ingredientsList.append(...itemsEl);
