const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector("#ingredients");

const makeIngredientsList = (options) => {
  return options.map((element) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = element;

    return ingredientEl;
  });
};

const elements = makeIngredientsList(ingredients);

ingredientsListEl.append(...elements);
