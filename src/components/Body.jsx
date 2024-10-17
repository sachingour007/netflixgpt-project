import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Header, Homepage, Browse, } from "./index"

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
