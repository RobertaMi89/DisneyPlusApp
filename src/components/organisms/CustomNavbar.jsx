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
import { Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar className="bgCustomNav">
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="d-flex flex-row justify-content-between align-items-center ">
          <Nav.Link href="#home" className="me-2 text-light">
            <Logo />
          </Nav.Link>
          <Container className="d-flex align-items-center">
            <Link to={"/"} className="a mx-2 text-light">
              <HouseFill className="icon" />
              HOME
            </Link>
            <Link to={"search"} className="a mx-2 text-light">
              <Search className="icon" />
              CERCA
            </Link>
            <Link to={"laTuaLista"} className="a mx-2 text-light">
              <Plus className="icon" />
              LA TUA LISTA
            </Link>
            <Link
              to={"originals"}
              className="a mx-2 text-light d-lg-block  d-sm-none"
            >
              <StarFill className="icon" />
              ORIGINALS
            </Link>
            <Link
              to={"film"}
              className="a mx-2 text-light d-lg-block d-sm-none"
            >
              <Film className="icon" />
              FILM
            </Link>
            <Link
              to={"serie"}
              className="a mx-2 text-light d-lg-block d-sm-none"
            >
              <TvFill className="icon" />
              SERIE
            </Link>

            <NavDropdown
              title={<ThreeDotsVertical />}
              id="responsive-navbar-nav"
              className="navDropdown text-light"
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
              <MyProfile />
            </Nav>
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
