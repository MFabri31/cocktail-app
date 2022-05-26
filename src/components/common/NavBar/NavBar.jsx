import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar variant="light" className="py-3 shadow-sm">
        <Container>
          <Link className="text-decoration-none fs-4 text-dark" to="/">
            Cocktail App
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
