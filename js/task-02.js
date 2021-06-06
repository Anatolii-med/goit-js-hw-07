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

const createItems = (element) => {
  return ingredients.map((item) => {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    return liEl;
  });
};

const itemsEl = createItems(ingredients);

ingredientsList.append(...itemsEl);

// const potato = document.createElement("li");
// potato.textContent = ingredients[0];

// const mushroom = document.createElement("li");
// mushroom.textContent = ingredients[1];

// const garlic = document.createElement("li");
// garlic.textContent = ingredients[2];

// const tomato = document.createElement("li");
// tomato.textContent = ingredients[3];

// const greens = document.createElement("li");
// greens.textContent = ingredients[4];

// const condiments = document.createElement("li");
// condiments.textContent = ingredients[5];
