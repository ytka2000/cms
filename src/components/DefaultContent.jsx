import React from "react";
import { Navigate, useOutletContext } from "react-router-dom";

const DefaultContent = () => {
  const [tabs] = useOutletContext();

  return <Navigate to={`/${tabs[0].id}`} replace />;
};

export default DefaultContent;
