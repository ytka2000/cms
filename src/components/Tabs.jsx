import React from "react";
import MuiTabs from "@mui/material/Tabs";
import Tab from "./Tab";
import DummyTable from "./DummyTable";
import DummyList from "./DummyList";
import DummyChart from "./DummyChart";

const Tabs = ({ tabs }) => {
  return (
    <>
      <MuiTabs
        value={false}
        onChange={() => console.log("change TABS")}
        centered
      >
        {tabs.map(({ id, title, path }) => (
          <Tab key={id} title={title} path={path} />
        ))}
      </MuiTabs>
      <DummyTable></DummyTable>
      <DummyList></DummyList>
      <DummyChart></DummyChart>
    </>
  );
};
export default Tabs;
