import { Form } from "react-bootstrap";

const Search = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingrese su cocktail favorito</Form.Label>
          <Form.Control type="text" placeholder="Ej. vodka" />
        </Form.Group>
      </Form>
    </>
  );
};
export default Search;
