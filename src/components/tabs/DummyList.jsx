import React from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

const DummyList = ({ tabs }) => {
  return (
    <Paper
      sx={{
        maxWidth: "50%",
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
};

export default DummyList;
