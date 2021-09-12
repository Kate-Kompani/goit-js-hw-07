const refs = {
    input: document.querySelector('#name-input'),
    namelabel: document.querySelector('#name-output'),
}

console.log(refs.input.value);
console.log(refs.namelabel.textContent);
refs.namelabel.textContent
refs.input.addEventListener('input',onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value)
    if (refs.input.value !== '') {
       refs.namelabel.textContent = event.currentTarget.value;
    }       
    else {
        refs.namelabel.textContent = 'незнакомец'
    }
}