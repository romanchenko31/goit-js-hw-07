const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i+=1) { 
  const item = document.createElement('li');
  item.textContent = ingredients[i];
  const addItem = list.append(item);
 
}
 console.log(list);