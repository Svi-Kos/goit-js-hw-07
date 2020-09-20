const inputNameEl = document.querySelector("input#name-input");
const outputNameEl = document.querySelector("span#name-output");

inputNameEl.addEventListener("input", changeName);

function changeName() {
  if (inputNameEl.value === "") {
    outputNameEl.textContent = "незнакомец";
  } else {
    outputNameEl.textContent = inputNameEl.value;
  }

  return outputNameEl.textContent;
}
