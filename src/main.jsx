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
import { Categorias } from "./pages/Categorias/Categorias.jsx";
import Novidades from "./pages/Novidades/Novidades.jsx";
import Noticia from "./pages/Noticia/Noticia.jsx";
import Ingressos from "./pages/Ingressos/Ingressos.jsx";
import Inscricoes from "./pages/Inscricoes/Inscricoes.jsx";
import Contatos from "./pages/Contatos/Contatos.jsx";

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
      {
        path: "/categorias",
        element: <Categorias />,
      },
      {
        path: "/novidades",
        element: <Novidades />,
      },
      {
        path: "/noticia/:id",
        element: <Noticia />,
      },
      {
        path: "/ingressos",
        element: <Ingressos />,
      },
      {
        path: "/inscricoes",
        element: <Inscricoes />,
      },
      {
        path: "/contatos",
        element: <Contatos />,
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
