import { Container } from "react-bootstrap";
import {
  HouseFill,
  Search,
  Plus,
  StarFill,
  Film,
  TvFill,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../atoms/Logo";
import MyProfile from "../atoms/MyProfile";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bgCustomNav d-flex flex-wrap">
      <Container fluid>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Logo />
            </Nav.Link>
            <Nav.Link href="#action1">
              <HouseFill />
              HOME
            </Nav.Link>
            <Nav.Link href="#action2">
              <Search />
              CERCA
            </Nav.Link>
            <Nav.Link href="#action1">
              <Plus />
              LA TUA LISTA
            </Nav.Link>
            <Nav.Link href="#action2" className="d-sm-none">
              <StarFill />
              ORIGINALS
            </Nav.Link>
            <Nav.Link href="#action2" className="d-sm-none">
              <Film />
              FILM
            </Nav.Link>
            <Nav.Link href="#action2" className="d-sm-none">
              <TvFill />
              SERIE
            </Nav.Link>

            <NavDropdown
              title={<ThreeDotsVertical />}
              id="responsive-navbar-nav"
              className="navDropdown"
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
              <Nav.Link href="#deets">{<MyProfile />}</Nav.Link>
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
