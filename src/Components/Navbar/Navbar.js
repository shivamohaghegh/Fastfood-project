import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { TiUser } from "react-icons/ti";
import SearchBox from "../SearchBox/SearchBox";
import NavbarList from "./NavbarList";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary pizza-navbar shadow rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          FastFood
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarList />
          <SearchBox />
          <div className="d-flex ms-5">
            <TiUser className="me-2 navbar-btn" />
            <PiShoppingCartSimpleFill className="navbar-btn" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
