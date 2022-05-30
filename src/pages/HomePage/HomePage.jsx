import Search from "../../components/Search";
import { Container, Row, Col } from "react-bootstrap";
import CocktailList from "../../components/CocktailList";
import Banner from "../../components/Banner";
import Loading from "../../components/Loading/Loading";
import { useContext } from "react";
import { CocktailContext } from "../../context/CocktailContext";

const HomePage = () => {
  const { loading } = useContext(CocktailContext);

  return (
    <>
      <Container>
        <section className="py-3">
          <Banner>
            <Search />
          </Banner>
        </section>
        <section className="py-3 text-center">
          <h3 className=" py-5 text-muted">Cocktails</h3>

          {loading && <Loading />}
          <Row className="justify-content-center mt-5">
            <CocktailList />
          </Row>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
