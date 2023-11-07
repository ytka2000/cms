import { sortTabs } from "../utils/sortTabs";

const requestTabs = async () => {
  try {
    const response = await fetch("./tabs.json");
    const tabs = await response.json();
    return tabs;
  } catch (error) {
    console.error("Error:", error);
  }
};

const getTabs = async () => {
  const tabs = await requestTabs();
  const sortedTabs = sortTabs(tabs);

  return { tabs: sortedTabs };
};

export { getTabs };
