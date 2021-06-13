const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



// const listOfIngredients = document.createElement('li');
// document.body.appendChild(listOfIngredients);
// console.log(listOfIngredients);

// const navEl = document.querySelector('ul');
// navEl.appendChild(listOfIngredients);
// console.log(navEl);

// const list = document.querySelector('#ingredients');

// list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
// list.insertAdjacentHTML('afterbegin', '<li>'ingredients[0]'</li>');
// list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
// list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');
const items = ingredients.map((ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
    return item;
    console.log(item);
}));

console.log(item);