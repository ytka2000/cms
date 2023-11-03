import React from "react";

import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const DummyList = ({ tabs }) => (
  <Paper
    sx={{
      maxWidth: "50%",
      margin: "100px auto",
    }}
  >
    {tabs.map((tab, index) => (
      <>
        <ListItem key={tab.id} component="div">
          <ListItemText primary={tab.title} />
        </ListItem>
        {tabs.length - 1 !== index && <Divider />}
      </>
    ))}
  </Paper>
);

export default DummyList;
