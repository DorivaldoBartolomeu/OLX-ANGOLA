import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import React from "react";
import Home from "../pages/Home";
import Entrar from "../pages/Entrar";
import Cadastrar from "../pages/Cadastrar";
import RecuperarSenha from "../pages/RecuperarSenha";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Entrar",
        element: <Entrar />,
      },
      {
        path: "Cadastrar",
        element: <Cadastrar />,
      },
      {
        path: "RecuperarSenha",
        element: <RecuperarSenha />,
      },
    ],
  },
]);

export default router;
