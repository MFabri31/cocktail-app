import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import CocktailDetails from "../../components/CocktailDetails";

const CocktailPage = () => {
  return (
    <>
      <section className="py-3">
        <Container>
          <Link to="/">Volver</Link>
          <Row className="justify-content-center">
            <CocktailDetails />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CocktailPage;
