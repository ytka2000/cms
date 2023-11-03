import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

import MuiTabs from "@mui/material/Tabs";

import Tab from "./Tab";

const Tabs = ({ tabs }) => {
  let { tabId } = useParams();

  const activeTab = useMemo(
    () => (tabId ? tabs.findIndex((tab) => tab.id === tabId) : 0),
    [tabs, tabId]
  );

  return (
    <MuiTabs
      value={activeTab}
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
