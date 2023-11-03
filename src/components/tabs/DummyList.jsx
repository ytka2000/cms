import React from "react";

import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const DummyList = ({ tabs }) => (
  <Paper
    sx={{
      maxWidth: "50%",
      margin: "100px auto",
    }}
  >
    {tabs.map((tab) => (
      <ListItem key={tab.id} component="div" divider={true}>
        <ListItemText primary={tab.title} />
      </ListItem>
    ))}
  </Paper>
);

export default DummyList;
