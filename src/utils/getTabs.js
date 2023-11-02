import mainTabs from "../tabs.json";
import { sortTabs } from "../utils/sortTabs";

const getTabs = async () => {
  const tabs = await new Promise((resolve) => {
    setTimeout(() => {
      const sortedTabs = sortTabs(mainTabs);
      resolve(sortedTabs);
    }, 1000);
  });

  return { tabs };
};

// loader: async ({ params }) => {
//   return fetch(`/api/teams/${params.teamId}.json`);
// },

export { getTabs };
