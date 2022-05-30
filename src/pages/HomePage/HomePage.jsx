import Search from "../../components/Search";
import { Container, Row, Col } from "react-bootstrap";
import CocktailList from "../../components/CocktailList";
import Banner from "../../components/Banner";

const HomePage = () => {
  return (
    <>
      <Container>
        <section className="py-3">
          <Banner>
            <Search />
          </Banner>
        </section>
        <section className="py-3">
          <h3 className="text-center py-5 text-muted">Cocktails</h3>
          <Row className="justify-content-center">
            <CocktailList />
          </Row>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
