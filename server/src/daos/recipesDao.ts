import _ from "lodash";

type Recipe = {
  id: string;
  name: string;
  content: {
    ingredients: { id: string; name: string; value: string }[];
    instructions: string[];
  };
};

const recipes: Recipe[] = [
  {
    id: "0",
    name: "Tangzhong",
    content: {
      ingredients: [
        { id: "0", name: "bread flour", value: "2 tablespoons (20g)" },
        { id: "1", name: "water", value: "2 tablespoons (27g)" },
        { id: "2", name: "whole milk", value: "4 tablespoons (60g)" },
      ],
      instructions: [
        "Add all ingredients together in a pan",
        "Heat over medium, stirring constantly",
        "When liquid becomes like a paste, cut off heat and set aside",
      ],
    },
  },
  {
    id: "1",
    name: "Brioche Burger Buns",
    content: {
      ingredients: [
        {
          id: "0",
          name: "whole milk",
          value: "1/2 cup(120g) @ 95f (30c)",
        },
        { id: "1", name: "instant yeast", value: "1 tablespoon (9g)" },
        { id: "2", name: "Bread flour", value: "2.5 cups (320g)" },
        { id: "3", name: "fine sea salt", value: "1 teaspoon (7g)" },
        {
          id: "4",
          name: "granulated sugar",
          value: "2.5 tablespoons (35g)",
        },
        { id: "5", name: "egg", value: "1 whole" },
        { id: "6", name: "egg", value: "1 yolk" },
        {
          id: "7",
          name: "unsalted butter",
          value: "3 tablespoons (42g), softened",
        },
        { id: "8", name: "tangzhong", value: "1 mixture" },
      ],
      instructions: [
        "For the primed yeast mixture, add water, whole milk, and instant yeast, and mix together. Store in a warm area and let sit for 8 minutes. ",
        "In a stand mixer bowl, add the dry ingredients. Slowly add in milk and yeast mixture, the tangzhong mix. Let homogenize. When the dough starts coming together, add the egg and egg yolk. Then increase speed to medium-low until incorporated. Gradually add butter until incorporated meaning when the dough is mixed, nothing sticks to the sides. ",
        "Lightly grease a medium-sized bowl, gently fold and place seam side down. Place a damp towel on the dough and bring to a warm area to proof for 1 – 1.5 hours ",
        "To shape, punch the dough down then flour work surface",
        "Divide dough into six even pieces around 95 – 105 g",
        "To shape the individual buns, gently stretch flipped side down and fold to the center. Repeat this process for the whole segment of dough, then flip upside down.",
        "Rotate dough 90 degrees and pull towards you. Repeat two more times to complete rotation around the whole perimeter.",
        "Place shaped dough in a rimmed sheet tray lined with parchment paper. Leave 2.5 in of space or 6 cm apart.",
        "Cover with a similar-sized sheet tray that is flipped so that the dough will not dry out.",
        "Let rise at room temperature for another 1-2 hours, or until doubled.",
        "Before baking, brush with egg wash (1 whole egg plus a splash of milk)",
        "Bake at 375 degrees F or 190 C for 18 minutes until golden brown.",
      ],
    },
  },
];

const getAll = () => recipes;
const getById = (id: number) => _.find(recipes, (recipe) => recipe.id === id);

export const recipesDao = {
  getAll,
  getById,
};
