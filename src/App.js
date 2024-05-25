import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine.js";

import Soda from "./Soda.js";
import Chips from "./Chips.js";
import Sardines from "./Sardines.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="soda" element={<Soda />} />
            <Route path="chips" element={<Chips />} />
            <Route path="sardines" element={<Sardines />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
