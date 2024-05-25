import { Link } from "react-router-dom";
import React from "react";
import Soda from "./Soda.js";
import Chips from "./Chips.js";
import Sardines from "./Sardines.js";

function VendingMachine() {
  return (
    <div>
      <div>
        <h1>This is Vending Machine</h1>
        <h3>Choose what you want</h3>
      </div>
      <div>
        <Link to="/soda">
          <Soda />
        </Link>
        <Link to="/chips">
          <Chips />
        </Link>
        <Link to="/sardines">
          <Sardines />
        </Link>
      </div>
    </div>
  );
}

export default VendingMachine;
