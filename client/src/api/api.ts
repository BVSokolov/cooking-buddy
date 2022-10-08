import axios from "axios";

const recipes = {
  getRecipes: async () => await axios.get("http://localhost:3000/recipes"),
};

const api = {
  recipes,
};

export { api };
