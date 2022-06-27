import { useContext } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import Search from "../../components/Search";
import Loading from "../../components/Loading/Loading";
import CocktailList from "../../components/CocktailList";
import { CocktailContext } from "../../context/CocktailContext";

const HomePage = () => {
  const { loading, cocktails } = useContext(CocktailContext);

  return (
    <>
      <Container>
        <section className="py-3">
          <Banner>
            <Search />
          </Banner>
        </section>
        <main>
          <section className="py-3 text-center">
            {!cocktails ? (
              <Alert className="mx-auto w-50 lead" variant="warning">
                Cocktail no encontrado
              </Alert>
            ) : (
              <h3 className="py-5 text-muted">Cocktails</h3>
            )}

            {loading && <Loading />}

            <Row className="mt-3">
              <CocktailList />
            </Row>
          </section>
        </main>
      </Container>
    </>
  );
};

export default HomePage;
