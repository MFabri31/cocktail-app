import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktail:id" element={<>Cocktail page</>} />
        <Route path="*" element={<>Página no encontrada</>} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
