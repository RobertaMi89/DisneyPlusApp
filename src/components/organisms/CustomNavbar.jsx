import {
  HouseFill,
  Search,
  Plus,
  StarFill,
  Film,
  TvFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../atoms/Logo";
import MyProfile from "../atoms/MyProfile";

const CustomNavbar = () => {
  return (
    <Navbar className="bgCustomNav">
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex flex-row my-2 my-lg-0">
          <Nav.Link href="#action1" className="me-2 text-light">
            <Logo />
          </Nav.Link>
          <Link to={"/"} className="me-2">
            <HouseFill />
            HOME
          </Link>
          <Link to={"search"} className="me-2">
            <Search />
            CERCA
          </Link>
          <Link to={"laTuaLista"} className="me-2">
            <Plus />
            LA TUA LISTA
          </Link>
          <Link to={"originals"} className="d-sm-none">
            <StarFill />
            ORIGINALS
          </Link>
          <Link to={"film"} className="d-sm-none">
            <Film />
            FILM
          </Link>
          <Link to={"serie"} className="d-sm-none">
            <TvFill />
            SERIE
          </Link>

          <NavDropdown
            title={<ThreeDotsVertical />}
            id="responsive-navbar-nav"
            className="navDropdown justify-content-end"
          >
            <NavDropdown.Item href="#action3">
              <StarFill />
              ORIGINALS
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              <Film />
              FILM
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              <TvFill />
              SERIE
            </NavDropdown.Item>
          </NavDropdown>
          <Nav>
            <NavDropdown title={<MyProfile />} id="responsive-navbar-nav">
              <NavDropdown.Item href="#action3">
                <StarFill />
                ORIGINALS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Film />
                FILM
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                <TvFill />
                SERIE
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default CustomNavbar;
