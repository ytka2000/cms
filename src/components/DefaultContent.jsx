import React from "react";
import { Navigate, useRouteLoaderData } from "react-router-dom";

const DefaultContent = () => {
  const { tabs } = useRouteLoaderData("main");

  return <Navigate to={`/${tabs[0].id}`} replace />;
};

export default DefaultContent;
