import { Routes, Route } from "react-router-dom";
import NavBar from "../components/common/NavBar/NavBar";
import HomePage from "../pages/HomePage";
import CocktailPage from "../pages/CocktailPage";

const PublicRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktail" element={<CocktailPage />} />
        <Route path="*" element={<>Página no encontrada</>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
