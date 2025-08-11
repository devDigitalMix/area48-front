/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import { GlobalStyled } from "./GlobalStyled.jsx";
import UserProvider from "./Context/UserContent.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
