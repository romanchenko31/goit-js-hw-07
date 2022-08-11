


const conteiner = document.querySelector('#counter');

const btmIncrem = conteiner.lastElementChild;
const btmDicrem = conteiner.firstElementChild;
const value = btmDicrem.nextSibling;
let counterValue = 0;



btmIncrem.addEventListener('click', () => { 

    value.textContent = counterValue +=1;
});

btmDicrem.addEventListener('click', () => { 

    value.textContent = counterValue -=1;
});
