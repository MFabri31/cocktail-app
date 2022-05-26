import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CockTailCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titulo</Card.Title>
        <Card.Text>Descripción</Card.Text>
        <Link to="/cocktail">Detalles</Link>
      </Card.Body>
    </Card>
  );
};

export default CockTailCard;
