const sortByOrder = (a, b) => {
  if (a.order > b.order) {
    return 1;
  } else if (a.order < b.order) {
    return -1;
  }

  return 0;
};

const sortTabs = (tabs) => {
  return tabs.sort(sortByOrder);
};

export { sortTabs };
