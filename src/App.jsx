import CocktailProvider from "./context/CocktailContext";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  return (
    <>
      <main>
        <CocktailProvider>
          <PublicRoutes />
        </CocktailProvider>
      </main>
    </>
  );
};

export default App;
