import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { PlusCircleFill } from "react-bootstrap-icons";
const MyProfile = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex justify-content-end text-dropdown-item"
      >
        <Dropdown>
          <Dropdown.Toggle variant="trasparent" id="dropdown-autoclose-true">
            <img src="../src/assets/icons/stitch.jpg" className="stitch" />
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dropdown-menu-end bg-black"
            variant="secondary"
          >
            <Dropdown.Item>
              <Dropdown.Item className="d-flex flex-row dropdown-item align-items-center  p-0">
                <Link
                  className="dropdown-item text-secondary"
                  to="./profile.html"
                >
                  <PlusCircleFill className="plusCircleFill" />
                  Aggiungi Profilo
                </Link>
              </Dropdown.Item>
            </Dropdown.Item>

            <Dropdown.Item>
              <Link className="dropdown-item text-secondary" to="/profile">
                Modifica Profili
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="dropdown-item text-secondary" to="/impostazioni">
                Impostazioni App
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="dropdown-item text-secondary" to="/account">
                Account
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link className="dropdown-item text-secondary" to="/help-center">
                Assistenza
              </Link>
            </Dropdown.Item>

            <Dropdown.Item>
              <Link className="dropdown-item text-secondary" to="/exit">
                Esci
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </>
  );
};
export default MyProfile;
