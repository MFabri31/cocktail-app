import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CockTailCard = ({ cocktail }) => {
  const { idDrink, strCategory } = cocktail;
  return (
    <Card className="shadow mb-4 text-start">
      <Card.Img variant="top" src={cocktail.strDrinkThumb} />
      <Card.Body>
        <Card.Title>{cocktail.strDrink}</Card.Title>
        <Card.Text>Categoría: {strCategory}</Card.Text>
        <Link className="btn btn-secondary" to={`/cocktail/${idDrink}`}>
          Ver detalles
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CockTailCard;
