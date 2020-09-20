const rangeInputEl = document.querySelector("#font-size-control");
const textOutputEl = document.querySelector("#text");

rangeInputEl.addEventListener("input", changeTextStyle);

function changeTextStyle() {
  textOutputEl.style.fontSize = `${rangeInputEl.value}px`;
}
