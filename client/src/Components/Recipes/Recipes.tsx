import React, { useEffect, useState } from "react";
import { api } from "../../api/api";

type Recipe = {
  id: string;
  name: string;
};

export const Recipes = () => {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);
  useEffect(() => {
    const getRecipes = async () => {
      const res = await api.recipes.getRecipes();
      if (res.status === 200) {
        setRecipes(res.data);
      }
    };
    getRecipes();
  }, []);

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};
