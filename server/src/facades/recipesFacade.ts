const importRecipe = (source: string) => {
  console.log("asd in import", source);

  return { ingredients: ["test"] };
};

export const recipesFacade = { importRecipe };
