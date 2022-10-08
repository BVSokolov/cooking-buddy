import { recipesController } from "./controllers/recipesController";
const router = require("koa-router")();

router.get("/recipes", recipesController.getRecipes);
router.get("/recipes/:recipeId", recipesController.getRecipe);
// router.post("/recipes/import", recipesController.importRecipe);

export { router };
