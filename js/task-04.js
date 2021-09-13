const valueBtn = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')


decrementBtn.addEventListener('click', () => {
    let count = productCounter.decrement(1);
    valueBtn.textContent = count;
})

incrementBtn.addEventListener('click', () => {
    let count = productCounter.increment(1)
    valueBtn.textContent = count;
})

const productCounter = createCounter()

function createCounter() {
    
    let counterValue = 0;
    function increment(value) {
        return counterValue += value;
    }

    function decrement(value) {
        return counterValue -= value;
    }
    return {increment, decrement}
}