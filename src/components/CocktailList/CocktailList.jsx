import { Col } from "react-bootstrap";
import CockTailCard from "../CocktailCard";

const CocktailList = () => {
  const cocktailCards = [1, 2, 3, 4].map((elem) => (
    <Col>
      <CockTailCard />
    </Col>
  ));

  return <>{cocktailCards}</>;
};

export default CocktailList;
