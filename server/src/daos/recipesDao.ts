import _ from "lodash";

const recipes = [
  { id: "1", name: "Burger buns", recipe: { ingredients: [], steps: [] } },
  { id: "2", name: "Pizza dough", recipe: { ingredients: [], steps: [] } },
];

const getAll = () => recipes;
const getById = (id: number) => _.find(recipes, (recipe) => recipe.id === id);

export const recipesDao = {
  getAll,
  getById,
};
