const navCategories = document.querySelectorAll('h2');
// console.log(navCategories);
const navElemQuantity = document.querySelectorAll('ul ul');

console.log('Категория:', navCategories[0].textContent);
console.log('Количество элементов:', navElemQuantity[0].children.length);

console.log('Категория:', navCategories[1].textContent);
console.log('Количество элементов:', navElemQuantity[1].children.length);

console.log('Категория:', navCategories[2].textContent);
console.log('Количество элементов:', navElemQuantity[2].children.length);