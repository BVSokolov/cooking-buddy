import { Context } from "koa";
import { recipesDao } from "../daos/recipesDao";
import { recipesFacade } from "../facades/recipesFacade";

const getRecipes = async (ctx: Context) => {
  ctx.status = 200;
  ctx.body = recipesDao.getAll();
  return ctx;
};

const getRecipe = async (ctx: Context) => {
  const { recipeId } = ctx.params;
  ctx.status = 200;
  ctx.body = recipesDao.getById(recipeId);
  return ctx;
};

// const importRecipe = async (ctx: Context) => {
//   //@ts-ignore
//   const source = ctx.request.body; //TODO: something here is fishy
//   ctx.status = 200;
//   ctx.body = recipesFacade.importRecipe(source);
//   return ctx;
// };

export const recipesController = {
  getRecipes,
  getRecipe,
  // importRecipe,
};
