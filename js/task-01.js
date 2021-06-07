const NavEl = document.querySelector("#categories");
const itemsEl = NavEl.children;
console.log(`В списке ${itemsEl.length} категории.`);

for (const item of itemsEl) {
  const categoryEl = item.firstElementChild.textContent;
  const elCount = item.lastElementChild.children.length;
  console.log(`Категория: ${categoryEl}`);
  console.log(`Количество элементов: ${elCount}`);
}
