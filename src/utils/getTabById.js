const getTabById = (tabs, id) => {
  return tabs.find((tab) => tab.id === id);
};

export { getTabById };
