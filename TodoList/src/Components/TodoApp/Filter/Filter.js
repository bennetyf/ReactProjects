import {Filtertypes} from "./Filtertypes";
import Link from "./Link/Link";
import React from "react";

const Filters = () => {
  return (
    <p className="filters">
      <Link filter={Filtertypes.ALL}> {Filtertypes.ALL} </Link>
      <Link filter={Filtertypes.COMPLETED}> {Filtertypes.COMPLETED} </Link>
      <Link filter={Filtertypes.UNCOMPLETED}> {Filtertypes.UNCOMPLETED} </Link>
    </p>
  );
};

export default Filters;
