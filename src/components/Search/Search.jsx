import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { CocktailContext } from "../../context/CocktailContext";

const Search = () => {
  const { getData } = useContext(CocktailContext);

  const handleChange = (e) => {
    let character = e.target.value;
    getData(character);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Ingrese su cocktail favorito</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej. vodka"
            name="cocktail"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </>
  );
};
export default Search;
