import mainTabs from "../tabs.json";

const getTabs = async () => {
  const tabs = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(mainTabs);
    }, 1000);
  });

  return { tabs };
};

// loader: async ({ params }) => {
//   return fetch(`/api/teams/${params.teamId}.json`);
// },

export { getTabs };
