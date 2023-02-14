import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../api/api";
import { Recipe } from "../../common/types";
import { Card } from "../UI/Card";

export const Navbar = () => {
  //TODO: use react-query instead
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

  // const {
  //   id,
  //   name,
  //   content: { ingredients, instructions },
  // } = recipes[Number(index)];

  const location = useLocation();
  const paths = location.pathname.split("/").filter((word) => word !== "");

  return (
    <Card>
      <nav>
        {paths.map((path, i) => (
          <span>
            {path === "recipes" ? (
              <Link to={`/${paths.slice(0, i + 1).join("/")}`}>Recipes</Link>
            ) : path === "new" ? (
              <Link to="/recipes/new">New recipe</Link>
            ) : (
              <Link to={`/recipes/${path}`}>{recipes[Number(path)].name}</Link>
            )}
            {paths.length - 1 > i && <span>/</span>}
          </span>
        ))}
      </nav>
    </Card>
  );
};
