import { Route, Routes } from "react-router-dom";
import CocktailPage from "../pages/CocktailPage";
import HomePage from "../pages/HomePage";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktail" element={<CocktailPage />} />
        <Route path="*" element={<>Página no encontrada</>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
