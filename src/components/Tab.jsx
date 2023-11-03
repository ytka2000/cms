import React from "react";
import { Link } from "react-router-dom";

import MuiTab from "@mui/material/Tab";

const Tab = ({ id, title }) => (
  <Link to={id}>
    <MuiTab label={title} />
  </Link>
);

export default Tab;
