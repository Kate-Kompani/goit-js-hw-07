const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur',onInputBlur)

function onInputBlur() {
    let length = inputRef.value.length
    const condition = inputRef.dataset.length
    if (length !== Number(condition)) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }       
    else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
}