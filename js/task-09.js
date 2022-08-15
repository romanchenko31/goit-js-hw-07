let field = document.querySelector('#boxes');
let square = document.createElement('div');

square.style.transition = '500ms transform';
square.style.width = '30px';
square.style.height = '30px';
square.style.border = '1px solid black';
square.style.borderRadius = '0%';
field.style.overflow = 'hidden';
field.style.margin = '0 auto';

field.append(square);

const inline = (e) => { 
    let x = e.offsetX-15,      
    y = e.offsetY-15;
    console.log(x, y);
    square.style.position = 'absolute';
    square.style.borderRadius = '30%';
    square.style.backgroundColor = 'yellow';
    square.style.transform = `translate(${x}px,${y}px)`;
}

field.addEventListener('mousemove', inline);


