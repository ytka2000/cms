import React from "react";
import { tabs } from "../utils/getTabs";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

const DummyList = () => (
  <Paper
    sx={{
      maxWidth: "50%",
      maxHeight: "50%",
      margin: "100px auto",
    }}
  >
    {tabs.map((tab) => (
      <ListItemButton key={tab.id} component="a" href={tab.path}>
        <ListItemText primary={tab.title} />
      </ListItemButton>
    ))}
  </Paper>
);

export default DummyList;
