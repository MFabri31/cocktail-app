import React, { useEffect, useState } from "react";
import { getCocktails } from "../services/getCocktails";

export const CocktailContext = React.createContext();
const { Provider } = CocktailContext;

const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (character = "gin") => {
    setLoading(true);
    const data = await getCocktails(`search.php?s=${character}`);
    setCocktails(data.drinks);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Provider value={{ cocktails, loading, getData }}>{children}</Provider>
  );
};

export default CocktailProvider;
