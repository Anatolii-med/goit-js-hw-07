const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const potato = document.createElement('li');
potato.textContent = ingredients[0];


const mushroom = document.createElement('li');
mushroom.textContent = ingredients[1];


const garlic = document.createElement('li');
garlic.textContent = ingredients[2];


const tomato = document.createElement('li');
tomato.textContent = ingredients[3];


const greens = document.createElement('li');
greens.textContent = ingredients[4];


const condiments = document.createElement('li');
condiments.textContent = ingredients[5];


const ingredientsList = document.querySelector("#ingredients");


ingredientsList.append(potato, mushroom, garlic, tomato, greens, condiments);