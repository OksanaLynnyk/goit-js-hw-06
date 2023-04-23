const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
  const addList = document.createElement("li");
  addList.textContent = ingredient;
  list.appendChild(addList);
})
