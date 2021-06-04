const NavEl = document.querySelectorAll("li.item");
console.log(`В списке ${NavEl.length} категории.`);

const animals = NavEl[0].firstElementChild.textContent;
const countAnimals = NavEl[0].lastElementChild.children.length;
console.log(`Категория: ${animals}`);
console.log(`Количество элементов: ${countAnimals}`);

const prodcts = NavEl[1].firstElementChild.textContent;
const countProdcts = NavEl[1].lastElementChild.children.length;
console.log(`Категория: ${prodcts}`);
console.log(`Количество элементов: ${countProdcts}`);

const technologys = NavEl[2].firstElementChild.textContent;
const countTechnologys = NavEl[2].lastElementChild.children.length;
console.log(`Категория: ${technologys}`);
console.log(`Количество элементов: ${countTechnologys}`);
