const btnEl = document.querySelector("#counter");
const btnDecrementEl = btnEl.firstElementChild;
const btnIncrementEl = btnEl.lastElementChild;
const counterValue = document.querySelector("#value");

btnDecrementEl.addEventListener("click", decrement);

btnIncrementEl.addEventListener("click", increment);

function decrement() {
  return (counterValue.textContent = Number(counterValue.textContent) - 1);
}

function increment() {
  return (counterValue.textContent = Number(counterValue.textContent) + 1);
}
