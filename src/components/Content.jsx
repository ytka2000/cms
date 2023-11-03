import React, { useMemo, Suspense, lazy } from "react";
import { useParams, useOutletContext } from "react-router-dom";

import Loader from "./Loader";

const tabComponent = (tabPath) => lazy(() => import(`./${tabPath}`));

const Content = () => {
  let { tabId } = useParams();
  const [tabs] = useOutletContext();

  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === tabId),
    [tabs, tabId]
  );

  const TabComponent = tabComponent(activeTab.path);

  return (
    <Suspense fallback={<Loader />}>
      <TabComponent tabs={tabs} />
    </Suspense>
  );
};

export default Content;
