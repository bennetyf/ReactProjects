import {FilterTypes} from "../filtertypes";
import Link from "./link";
import React from "react";

const view = () => {
  return (
    <p className="filters">
      <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
      <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
      <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
    </p>
  );
};

export default view;
