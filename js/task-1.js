const listEl = document.querySelectorAll(".item");
console.log(`В списке ${listEl.length} категории.`);

const titleEl = document.querySelectorAll(".item h2");

titleEl.forEach((title) => console.log("Категория: ", title.textContent));

const numberEl = document.querySelectorAll(".item ul");

numberEl.forEach((list) =>
  console.log("Количество элементов: ", list.querySelectorAll("li").length)
);
