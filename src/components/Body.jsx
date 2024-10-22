import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header, Homepage, Browse } from "./index";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
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
  useEffect(() => {
    //Use Handle from Top Level by Redux

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
