import "./App.css";
import Tabs from "./components/Tabs";
import { tabs } from "./utils/getTabs";
import { sortTabs } from "./utils/sortTabs";

function App() {
  const sortedTabs = sortTabs(tabs);

  return (
    <div className="App">
      <Tabs tabs={sortedTabs} />
    </div>
  );
}

export default App;
