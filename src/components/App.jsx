import { Outlet, useLoaderData } from "react-router-dom";

import "../App.css";
import Tabs from "./Tabs";

function App() {
  const { tabs } = useLoaderData();

  return (
    <div className="App">
      <Tabs tabs={tabs} />
      <Outlet />
    </div>
  );
}

export default App;
