const input = document.querySelector('input');
const controls = document.querySelector('#controls');
const button = controls.querySelectorAll('button');
const boxes = document.querySelector('#boxes');
let size = 30;

input.addEventListener('input', event => {

  let number = event.currentTarget.value;
  button[0].addEventListener('click', () => { createBoxes(number); });

  button[1].addEventListener('click', () => {
    [...boxes.childNodes].map(value => value.remove());

    //boxes.innerHTML = "";  <--- доказательство того что рещение в 1 строку не всегда лучшее
  })
});

const createBoxes = (amount) => {
  size = 30;
  if (boxes.childNodes) {
    [...boxes.childNodes].map(value => value.remove());

  }
  console.log(boxes.childNodes);
  for (let i = 0; i < amount; i += 1) {
    let div = document.createElement('div');
    boxes.append(div);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
    size += 10;
  }

  return boxes;


}

