import React, { Suspense, lazy } from "react";
import { useOutletContext } from "react-router-dom";

import Loader from "./Loader";

const tabComponent = (tabPath) => lazy(() => import(`./${tabPath}`));

const Content = () => {
  const [tabs, activeTab] = useOutletContext();

  const TabComponent = tabComponent(activeTab.path);

  return (
    <Suspense fallback={<Loader />}>
      <TabComponent tabs={tabs} />
    </Suspense>
  );
};

export default Content;
