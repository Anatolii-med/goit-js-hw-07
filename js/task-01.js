const NavEl = document.querySelector("#categories");
const itemsEl = NavEl.children;
console.log(`В списке ${itemsEl.length} категории.`);

for (const item of itemsEl) {
  const categoryEl = item.firstElementChild.textContent;
  const elCount = item.lastElementChild.children.length;
  console.log(`Категория: ${categoryEl}`);
  console.log(`Количество элементов: ${elCount}`);
}

// const animals = NavEl[0].firstElementChild.textContent;
// const countAnimals = NavEl[0].lastElementChild.children.length;
// console.log(`Категория: ${animals}`);
// console.log(`Количество элементов: ${countAnimals}`);

// const prodcts = NavEl[1].firstElementChild.textContent;
// const countProdcts = NavEl[1].lastElementChild.children.length;
// console.log(`Категория: ${prodcts}`);
// console.log(`Количество элементов: ${countProdcts}`);

// const technologys = NavEl[2].firstElementChild.textContent;
// const countTechnologys = NavEl[2].lastElementChild.children.length;
// console.log(`Категория: ${technologys}`);
// console.log(`Количество элементов: ${countTechnologys}`);
