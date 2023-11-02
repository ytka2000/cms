import React, { Suspense, lazy } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";

import Loader from "./Loader";
import { getTabById } from "../utils/getTabById";

const tabComponent = (tabPath) => lazy(() => import(`./${tabPath}`));

const Content = () => {
  let { tabId } = useParams();
  const { tabs } = useRouteLoaderData("main");

  const tabInfo = getTabById(tabs, tabId);

  const TabComponent = tabComponent(tabInfo.path);

  return (
    <Suspense fallback={<Loader />}>
      <TabComponent tabs={tabs} />
    </Suspense>
  );
};

export default Content;
