const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsRef = document.querySelector('#ingredients');
// console.log(ingredientsRef);

const addIngredient = (ingridients) => ingridients.map(ingridient => {
  const navItemEl = document.createElement('li')
  navItemEl.textContent = ingridient
  // console.log(navItemEl)
  return navItemEl
});

ingredientsRef.append(...addIngredient(ingredients))