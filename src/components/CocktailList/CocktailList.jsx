import { useContext } from "react";
import { Col } from "react-bootstrap";
import CockTailCard from "../CocktailCard";
import { CocktailContext } from "../../context/CocktailContext";

const CocktailList = () => {
  const { cocktails } = useContext(CocktailContext);

  const cocktailCards = cocktails?.map((cocktail) => (
    <Col md="3" key={cocktail.idDrink}>
      <CockTailCard cocktail={cocktail} />
    </Col>
  ));

  return <>{cocktailCards}</>;
};

export default CocktailList;
