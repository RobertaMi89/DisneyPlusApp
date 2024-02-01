import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import WatchList from "./components/pages/WatchList";
import Originals from "./components/pages/Originals";
import Film from "./components/pages/Film";
import Serie from "./components/pages/Serie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home page="Homepage" />} />
          <Route path="/search" element={<Search page="Search" />} />
          <Route
            path="laTuaLista"
            element={<WatchList page="La tua Lista" />}
          />
          <Route path="/originals" element={<Originals page="Originals" />} />
          <Route path="/film" element={<Film page="Film" />} />
          <Route path="/serie" element={<Serie page="Serie" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
