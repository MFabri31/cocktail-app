import { Button, Card } from "react-bootstrap";

const CockTailCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titulo</Card.Title>
        <Card.Text>Descripción</Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default CockTailCard;
