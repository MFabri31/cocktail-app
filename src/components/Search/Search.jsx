import { useContext, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { CocktailContext } from "../../context/CocktailContext";
import SearchIcon from "../../assets/icons/search-icon.svg";

const Search = () => {
  const [form, setForm] = useState("");
  const { getData } = useContext(CocktailContext);

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.trim() === "") return;

    getData(form);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Button type="submit" variant="light" className="shadow-none">
            <img
              style={{ width: "1.5rem" }}
              src={SearchIcon}
              alt="search icon"
            />
          </Button>
          <Form.Control
            type="text"
            placeholder="Encuentra tus cocktails favoritos"
            name="cocktail"
            onChange={handleChange}
            className="py-2 shadow-none border-0"
          />
        </InputGroup>
      </Form>
    </>
  );
};
export default Search;
