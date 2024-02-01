import { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import CustomNavbar from "./components/organisms/CustomNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container fluid className="background bg-gradient">
        <CustomNavbar />
      </Container>
    </>
  );
}

export default App;
