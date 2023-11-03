import React, { useMemo } from "react";
import { Outlet, useLoaderData, useParams } from "react-router-dom";

import Tabs from "./Tabs";
import ErrorPage from "./ErrorPage";

function App() {
  const { tabs } = useLoaderData();
  let { tabId } = useParams();

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === tabId),
    [tabs, tabId]
  );

  const activeTabIndex = useMemo(
    () => (activeTab ? activeTab.order : 0),
    [activeTab]
  );

  if (!!tabId && !activeTab) return <ErrorPage message={"Not Found"} />;

  return (
    <div className="App">
      <Tabs tabs={tabs} activeTabIndex={activeTabIndex} />
      <Outlet context={[tabs, activeTab]} />
    </div>
  );
}

export default App;
