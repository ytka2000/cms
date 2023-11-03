import React from "react";

import MuiTabs from "@mui/material/Tabs";

import Tab from "./Tab";

const Tabs = ({ tabs, activeTabIndex }) => {
  return (
    <MuiTabs
      value={activeTabIndex}
      centered
      sx={{
        margin: "50px auto",
      }}
    >
      {tabs.map(({ id, title }) => (
        <Tab key={id} id={id} title={title} />
      ))}
    </MuiTabs>
  );
};
export default Tabs;
