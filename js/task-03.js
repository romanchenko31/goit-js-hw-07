const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('#gallery');



for (let i = 0; i < images.length; i += 1) {
  const item = document.createElement('li');
  const addItem = list.append(item);
  const addCls = item.classList.add('item');

  const img = document.createElement('img');
  const addImg = item.append(img);
  const atrSrc = img.setAttribute('src', images[i].url);
  const atrAlt = img.setAttribute('alt', images[i].alt);
  const atrWidth = img.setAttribute('width', 500);
}

console.log(list);