import React, { useEffect, useState } from "react";
import { getCocktails } from "../services/getCocktails";

export const CocktailContext = React.createContext();
const { Provider } = CocktailContext;

const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);

  const getData = async (character = "gin") => {
    const data = await getCocktails(`search.php?s=${character}`);
    setCocktails(data.drinks);
  };

  useEffect(() => {
    getData();
  }, []);

  return <Provider value={{ cocktails, getData }}>{children}</Provider>;
};

export default CocktailProvider;
