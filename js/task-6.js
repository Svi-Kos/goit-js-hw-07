const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", onElementBlur);

function onElementBlur() {
  if (
    validationInputEl.value.length <
    Number(validationInputEl.getAttribute("data-length"))
  ) {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  } else {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  }
}
