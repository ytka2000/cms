import { Outlet, useLoaderData } from "react-router-dom";

import "../App.css";
import Tabs from "./Tabs";
import { sortTabs } from "../utils/sortTabs";
import { useMemo } from "react";

function App() {
  const { tabs } = useLoaderData();
  const sortedTabs = useMemo(() => sortTabs(tabs), [tabs]);

  return (
    <div className="App">
      <Tabs tabs={sortedTabs} />
      <Outlet />
    </div>
  );
}

export default App;
