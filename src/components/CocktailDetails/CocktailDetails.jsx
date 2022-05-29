import { useContext } from "react";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CocktailContext } from "../../context/CocktailContext";

const CockailDetails = () => {
  const { cocktails } = useContext(CocktailContext);
  let { id } = useParams();

  const findCocktail = cocktails.find((cocktail) => cocktail.idDrink === id);

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
    strGlass,
    strIngredient1,
    strIngredient2,
  } = findCocktail;

  return (
    <>
      <Col md={3}>
        <img style={{ maxWidth: "100%" }} src={strDrinkThumb} alt={strDrink} />
      </Col>
      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroupItem>Nombre: {strDrink}</ListGroupItem>
          <ListGroupItem>Categoría: {strCategory}</ListGroupItem>
          <ListGroupItem>Info:</ListGroupItem>
          <ListGroupItem>Glass: {strGlass}</ListGroupItem>
          <ListGroupItem>Instrucciones: {strInstructions}</ListGroupItem>
          <ListGroupItem>
            Ingredientes: {strIngredient1}, {strIngredient2}
          </ListGroupItem>
        </ListGroup>
      </Col>
    </>
  );
};

export default CockailDetails;
