import "./App.css";
import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./PAGES/Registration";
import Login from "./PAGES/Login";
import Home from "./PAGES/Home";
import Apiproduct from "./COMPONENTS/Apiproduct";
import Apiproduct02 from "./COMPONENTS/Apiproduct02";
import Pro01 from "./Routingpages/Pro01";
import Pro02 from "./Routingpages/Pro02";
import Pro03 from "./Routingpages/Pro03";
import Pro04 from "./Routingpages/Pro04";
import Pro05 from "./Routingpages/Pro05";
import Cart from "./PAGES/Cart";
// import Privateroute from "./Privateroute";

const routes = createBrowserRouter([
  { path: "/", Component: Registration },
  { path: "/loginpage", Component: Login },
  { path: "/home", Component: Home },
  { path: "/apiproducts", Component: Apiproduct },
  {path : '/cart' , Component:Cart},
  {
    path: "/apiproduct02",
    Component: Apiproduct02,
    children: [
      { path: "", Component: Pro01 },
      { path: "/apiproduct02/pro02", Component: Pro02 },
      { path: "/apiproduct02/pro03", Component: Pro03 },
      { path: "/apiproduct02/pro04", Component: Pro04 },
      { path: "/apiproduct02/pro05", Component: Pro05 },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
