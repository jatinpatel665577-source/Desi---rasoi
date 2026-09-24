const recipes = [
  {
    name: "Aloo Tamatar Sabzi",
    category: "Sabzi",
    emoji: "🥔",
    time: "30 min",
    difficulty: "Easy",
    servings: "3",
    ingredients: [
      "4 potatoes",
      "2 tomatoes",
      "1 onion",
      "2 tbsp oil",
      "1/2 tsp cumin",
      "1/2 tsp turmeric",
      "1/2 tsp red chilli powder",
      "Salt to taste"
    ],
    steps: [
      "Wash and peel the potatoes. Cut them into small pieces.",
      "Heat oil in a pan and add cumin seeds.",
      "Add chopped onion and cook until lightly golden.",
      "Add chopped tomatoes and spices.",
      "Cook until the tomatoes become soft.",
      "Add potatoes and mix well.",
      "Add some water and cover the pan.",
      "Cook until potatoes become soft and serve hot."
    ]
  },

  {
    name: "Dal Tadka",
    category: "Dal",
    emoji: "🍲",
    time: "35 min",
    difficulty: "Easy",
    servings: "4",
    ingredients: [
      "1 cup yellow dal",
      "1 tomato",
      "1 onion",
      "2 tbsp ghee",
      "1/2 tsp cumin",
      "2 garlic cloves",
      "1/2 tsp turmeric",
      "Salt to taste"
    ],
    steps: [
      "Wash the dal properly.",
      "Cook dal with turmeric, salt and water until soft.",
      "Heat ghee in another pan.",
      "Add cumin and chopped garlic.",
      "Add onion and cook until golden.",
      "Add tomato and cook until soft.",
      "Pour the tadka over the cooked dal.",
      "Mix well and serve hot."
    ]
  },

  {
    name: "Jeera Rice",
    category: "Rice",
    emoji: "🍚",
    time: "25 min",
    difficulty: "Easy",
    servings: "3",
    ingredients: [
      "1 cup basmati rice",
      "2 tbsp ghee",
      "1 tsp cumin",
      "2 cups water",
      "Salt to taste"
    ],
    steps: [
      "Wash the rice properly.",
      "Soak the rice for 15 minutes.",
      "Heat ghee and add cumin.",
      "Add the drained rice.",
      "Add water and salt.",
      "Cover and cook until rice is tender.",
      "Fluff the rice gently.",
      "Serve hot."
    ]
  },

  {
    name: "Paneer Masala",
    category: "Paneer",
    emoji: "🧀",
    time: "35 min",
    difficulty: "Medium",
    servings: "3",
    ingredients: [
      "250 g paneer",
      "2 tomatoes",
      "1 onion",
      "2 tbsp oil",
      "1/2 tsp cumin",
      "1/2 tsp turmeric",
      "1 tsp chilli powder",
      "1 tsp garam masala"
    ],
    steps: [
      "Cut paneer into cubes.",
      "Lightly fry the paneer.",
      "Heat oil and add cumin.",
      "Add onion and cook until golden.",
      "Add tomatoes and spices.",
      "Cook the masala properly.",
      "Add paneer and a little water.",
      "Cook for 5 to 7 minutes and serve."
    ]
  },

  {
    name: "Poha",
    category: "Breakfast",
    emoji: "🥣",
    time: "15 min",
    difficulty: "Easy",
    servings: "2",
    ingredients: [
      "2 cups poha",
      "1 onion",
      "1 green chilli",
      "1/2 tsp mustard seeds",
      "1/2 tsp turmeric",
      "2 tbsp oil",
      "Salt to taste"
    ],
    steps: [
      "Wash poha gently and drain it.",
      "Heat oil in a pan.",
      "Add mustard seeds.",
      "Add onion and green chilli.",
      "Cook until onion becomes soft.",
      "Add turmeric and salt.",
      "Add poha and mix gently.",
      "Cook for a few minutes and serve."
    ]
  },

  {
    name: "Aloo Paratha",
    category: "Breakfast",
    emoji: "🫓",
    time: "35 min",
    difficulty: "Medium",
    servings: "3",
    ingredients: [
      "2 cups wheat flour",
      "3 boiled potatoes",
      "1 green chilli",
      "1/2 tsp chilli powder",
      "1/2 tsp garam masala",
      "Salt to taste",
      "Ghee or oil"
    ],
    steps: [
      "Prepare a soft dough using wheat flour and water.",
      "Mash the boiled potatoes.",
      "Mix potatoes with spices and salt.",
      "Roll a portion of dough.",
      "Place the potato filling in the centre.",
      "Close and roll into a paratha.",
      "Cook on a hot tawa.",
      "Cook both sides until golden."
    ]
  },

  {
    name: "Samosa",
    category: "Snacks",
    emoji: "🥟",
    time: "50 min",
    difficulty: "Medium",
    servings: "4",
    ingredients: [
      "2 cups maida",
      "3 potatoes",
      "1/2 cup peas",
      "1 tsp cumin",
      "1/2 tsp chilli powder",
      "1/2 tsp garam masala",
      "Salt to taste",
      "Oil"
    ],
    steps: [
      "Prepare a firm dough using maida and water.",
      "Boil and mash potatoes.",
      "Mix potatoes with peas and spices.",
      "Roll a small portion of dough.",
      "Cut it into two halves.",
      "Make a cone and add the filling.",
      "Seal the edges properly.",
      "Deep fry until golden and crisp."
    ]
  },

  {
    name: "Chole Masala",
    category: "Sabzi",
    emoji: "🍛",
    time: "45 min",
    difficulty: "Medium",
    servings: "4",
    ingredients: [
      "2 cups boiled chickpeas",
      "2 tomatoes",
      "1 onion",
      "2 tbsp oil",
      "1 tsp cumin",
      "1 tsp coriander powder",
      "1/2 tsp chilli powder",
      "1 tsp garam masala"
    ],
    steps: [
      "Heat oil and add cumin.",
      "Add chopped onion and cook until golden.",
      "Add tomatoes and spices.",
      "Cook until the masala becomes thick.",
      "Add boiled chickpeas.",
      "Add some water.",
      "Cover and simmer for 10 to 15 minutes.",
      "Add garam masala and serve."
    ]
  }
];

const grid = document.getElementById("recipeGrid");
const empty = document.getElementById("empty");
const home = document.getElementById("home");
const detail = document.getElementById("detail");

function displayRecipes(list) {

  grid.innerHTML = "";

  if (list.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";

  list.forEach((recipe) => {

    const card = document.createElement("div");

    card.className = "recipe-card";

    card.innerHTML = `
      <div class="recipe-image">
        ${recipe.emoji}
      </div>

      <div class="recipe-info">
        <div class="recipe-name">
          ${recipe.name}
        </div>

        <div class="recipe-meta">
          ⏱️ ${recipe.time} • ${recipe.difficulty}
        </div>
      </div>
    `;

    card.addEventListener("click", function() {
      openRecipe(recipe);
    });

    grid.appendChild(card);
  });
}

function openRecipe(recipe) {

  home.style.display = "none";
  detail.style.display = "block";

  document.getElementById("detailEmoji").textContent =
    recipe.emoji;

  document.getElementById("detailTitle").textContent =
    recipe.name;

  document.getElementById("detailTime").textContent =
    recipe.time;

  document.getElementById("detailDifficulty").textContent =
    recipe.difficulty;

  document.getElementById("detailServings").textContent =
    recipe.servings;

  document.getElementById("detailIngredients").innerHTML =
    recipe.ingredients
      .map(item => "• " + item)
      .join("<br>");

  document.getElementById("detailSteps").innerHTML =
    recipe.steps
      .map(step => `<li>${step}</li>`)
      .join("");

  window.scrollTo(0, 0);
}

document.getElementById("backBtn").addEventListener("click", function() {

  detail.style.display = "none";
  home.style.display = "block";

  window.scrollTo(0, 0);
});

document.querySelectorAll(".category").forEach(button => {

  button.addEventListener("click", function() {

    document.querySelectorAll(".category")
      .forEach(btn => btn.classList.remove("active"));

    this.classList.add("active");

    const category = this.dataset.category;

    if (category === "All") {
      displayRecipes(recipes);
    } else {

      const filtered = recipes.filter(
        recipe => recipe.category === category
      );

      displayRecipes(filtered);
    }
  });
});

document.getElementById("search").addEventListener("input", function() {

  const text = this.value.toLowerCase().trim();

  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(text) ||
    recipe.category.toLowerCase().includes(text)
  );

  displayRecipes(filtered);
});

displayRecipes(recipes);
