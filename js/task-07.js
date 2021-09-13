const refs = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
}

refs.input.addEventListener('input', onInputScroll)

function onInputScroll() {
    let textSize = refs.input.value
    refs.span.style.fontSize = `${textSize}px`;
}