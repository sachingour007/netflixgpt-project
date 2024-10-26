import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header, Homepage, Browse } from "./index";

import { useDispatch } from "react-redux";

import ComponentWrapper from "./ComponentWrapper";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <ComponentWrapper>
          <Homepage />
        </ComponentWrapper>
      ),
    },
    {
      path: "/browse",
      element: (
        <ComponentWrapper>
          <Browse />
        </ComponentWrapper>
      ),
    },
  ]);
  

  return <RouterProvider router={appRouter} />;
};

export default Body;
