import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import Content from "./components/Content";
import DefaultContent from "./components/DefaultContent";
import { getTabs } from "./utils/getTabs";

import "./assets/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: getTabs,
    children: [
      { index: true, element: <DefaultContent /> },
      {
        path: ":tabId",
        element: <Content />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
