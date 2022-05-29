import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CockTailCard = ({ cocktail }) => {
  const { idDrink } = cocktail;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={cocktail.strDrinkThumb} />
      <Card.Body>
        <Card.Title>Titulo: {cocktail.strDrink}</Card.Title>
        <Card.Text>Descripción</Card.Text>
        <Link to={`/cocktail/${idDrink}`}>Detalles</Link>
      </Card.Body>
    </Card>
  );
};

export default CockTailCard;
