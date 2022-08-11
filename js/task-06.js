const input = document.querySelector('#validation-input[data-length="6"]');
const borderInp = document.querySelector('#validation-input');


input.addEventListener('blur', (event) => { 

    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        borderInp.classList.add('valid');
        borderInp.classList.remove('invalid');

    } else { 
        borderInp.classList.add('invalid');
        borderInp.classList.remove('valid');
    }        
    
});

