import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import Tabs from "./Tabs";

function App() {
  const { tabs } = useLoaderData();

  return (
    <div className="App">
      <Tabs tabs={tabs} />
      <Outlet context={[tabs]} />
    </div>
  );
}

export default App;
