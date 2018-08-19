import {Filtertypes} from "./Filtertypes";
import Link from "./Link/Link";
import React from "react";
import "./style.css";

const Filters = () => {
  return (
    <div className="filters">
      <Link filter={Filtertypes.ALL}> {Filtertypes.ALL} </Link>
      <Link filter={Filtertypes.COMPLETED}> {Filtertypes.COMPLETED} </Link>
      <Link filter={Filtertypes.UNCOMPLETED}> {Filtertypes.UNCOMPLETED} </Link>
    </div>
  );
};

export default Filters;
