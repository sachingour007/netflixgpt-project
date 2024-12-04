import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header, Homepage, Browse, Login } from "./index";

import { useDispatch } from "react-redux";

import ComponentWrapper from "./ComponentWrapper";
import SingleMoviePage from "../pages/SingleMoviePage";

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
    {
      path: "/movie/:id",
      element: (
        <ComponentWrapper>
          <SingleMoviePage />
        </ComponentWrapper>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
