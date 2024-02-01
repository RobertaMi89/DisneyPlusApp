import { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container fluid className="background bg-gradient"></Container>
    </>
  );
}

export default App;
