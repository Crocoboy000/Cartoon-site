import { Navbar } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import "./Header.css";
import Searcher from "./Search";

export default function Header() {
  return (
    <Navbar expand="lg" className="py-2 mb-3 navbar">
      <Navbar.Brand href="#home" className="fs-4 fw-bold">
        <span className="Ftitle">REV</span>
        <i className="reset-logo">.TOON</i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end rounded-3"
      >
        <Searcher />

        <MdFavorite className="fav" />
      </Navbar.Collapse>
    </Navbar>
  );
}
