export const getCocktails = async (character) => {
  let URL = `https://thecocktaildb.com/api/json/v1/1/${character}`;
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};
