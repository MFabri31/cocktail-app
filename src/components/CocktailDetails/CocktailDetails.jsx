import { Col, ListGroup, ListGroupItem } from "react-bootstrap";

const CockailDetails = () => {
  return (
    <>
      <Col md={4}>
        <img src="" alt="img cocktail" />
      </Col>
      <Col md={4}>
        <ListGroup variant="flush">
          <ListGroupItem>Nombre:</ListGroupItem>
          <ListGroupItem>Categoría:</ListGroupItem>
          <ListGroupItem>Info:</ListGroupItem>
          <ListGroupItem>Glass:</ListGroupItem>
          <ListGroupItem>Instrucciones:</ListGroupItem>
          <ListGroupItem>Ingredientes:</ListGroupItem>
        </ListGroup>
      </Col>
    </>
  );
};

export default CockailDetails;
