const listEl = document.querySelectorAll(".item");
console.log(`В списке ${listEl.length} категории.`);

listEl.forEach((element) =>
  console.log(
    `Категория: ${
      element.querySelector("h2").textContent
    }\nКоличество элементов: ${element.querySelector("ul").children.length}`
  )
);
