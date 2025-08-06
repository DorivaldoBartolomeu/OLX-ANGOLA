import { useState } from "react";
import React from "react";
import Sigin from "../assest/signin.gif";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
import { Link } from "react-router-dom";

const Entrar = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => ({
      ...preve,
      [name]: value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do form", data);
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <section id="login">
      <div className="mx-auto my-7 container p-4">
        <div className="max-w-sm p-4 bg-white mx-auto rounded-lg shadow-lg ">
          <div className="w-20 y-20 mx-auto">
            <img src={Sigin} alt="Login" className="rounded-full" />
          </div>

          <form className="pt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid">
              <label htmlFor="email">Email:</label>
              <div className="bg-slate-100 p-2 flex justify-between items-center border active :border-red-500">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  placeholder="Digite seu email"
                  className="w-full h-full outline-none bg-transparent p-0.5"
                />
                <span>
                  <CiAt className="text-xl" />
                </span>
              </div>
            </div>
            <div className="grid">
              <label htmlFor="password">Senha:</label>
              <div className="bg-slate-100 p-2 flex justify-between items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  placeholder="Digite sua senha"
                  className="w-full h-full outline-none bg-transparent p-0.5"
                />
                <span
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Ocultar Senha" : "Mostrar Senha"}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <small className="flex justify-between items-center my-4">
                <div className="flex items-center">
                  <p>Lembre-se de mim</p>
                  <input type="checkbox" className="mx-2 accent-red-500 cursor-pointer" />
                </div>
                <p>
                  Esqueceu a senha?{" "}
                  <Link
                    to="/ForgotPassword"
                    className="font-bold underline text-red-500 hover:text-red-600"
                  >
                    Recuperar
                  </Link>
                </p>
              </small>

              <div className="mx-auto my-4 flex flex-col items-center">
                <button className=" bg-red-500 text-white font-bold px-14 py-2 mx-auto rounded-full hover:bg-red-600 hover:scale-105 transition-all duration-300">
                  Entrar
                </button>
              </div>
            </div>
          </form>
          <small className="text-center">
            <p>
              Não tem uma conta?{" "}
              <Link
                to="/Cadastrar"
                className="font-bold underline text-red-500 hover:text-red-600"
              >
                Cadastre-se
              </Link>
            </p>
          </small>
        </div>
      </div>
    </section>
  );
};

export default Entrar;
