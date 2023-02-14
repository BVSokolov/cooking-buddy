import { Route, Routes } from "react-router-dom";
import { Recipes } from "./Recipes/Recipes";

export const Home = () => (
  <Routes>
    <Route path="/recipes/*" element={<Recipes />} />
  </Routes>
);
