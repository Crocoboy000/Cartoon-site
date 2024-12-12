import { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { MyContext } from "../Context/Context";
import "./Search.css";

function Searcher() {
  const [searchField, setSearchField] = useState("");
  const { cartoons, setDisplay } = useContext(MyContext);

  useEffect(() => {
    setDisplay(cartoons);
  }, [cartoons, setDisplay]);

  useEffect(() => {
    if (searchField === "") {
      setDisplay(cartoons);
    } else {
      const filteredCharacters = cartoons.filter((character) =>
        character.name.toLowerCase().includes(searchField.toLowerCase())
      );
      setDisplay(filteredCharacters);
    }
  }, [searchField, cartoons, setDisplay]);

  return (
    <Form className="d-flex position-relative me-3">
      <Form.Control
        type="search"
        className="me-2 bg-transparent text-white border-light rounded-4"
        placeholder="Search cartoons..."
        aria-label="Search"
        style={{ width: "250px" }}
        onChange={(event) => setSearchField(event.target.value)}
        onMouseUp={(event) => (event.placeholder = "")}
      />
      <span className="position-absolute end-0 search-icon top-3">
        <AiOutlineSearch />
      </span>
    </Form>
  );
}

export default Searcher;
