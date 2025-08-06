import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import Sigin from "../assest/signin.gif";
import { FaEye } from "react-icons/fa6";
import { CiAt } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import ImageTobase from "../helpers/imageTobase";


const Cadastrar = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await ImageTobase(file);
    
    setData((prev) => ({
      ...prev,
      profilePic: imagePic,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do form", data);
  };
  
  // const [showPassword, setShowPassword] = useState(false); // Removed duplicate
 return (
     <section id="login">
       <div className="mx-auto my-7 container p-4">
         <div className="max-w-sm p-4 bg-white mx-auto rounded-lg shadow-lg">
           <div className="w-20 y-20 mx-auto relative rounded-full overflow-hidden">
             <div>
              <img src={data.profilePic || Sigin} alt="Login" className="rounded-full" />
             </div>
             <form action="">
              <label htmlFor="profile-pic" className="cursor-pointer">
                <div className="text-center font-bold text-xs bg-slate-100 absolute bottom-0 left-0 right-0 w-full py-8 bg-opacity-75 cursor-pointer">
                  Carregar foto
                </div>
              </label>
              <input
                type="file"
                id="profile-pic"
                name="profilePic"
                onChange={handleUploadPic}
                className="hidden"
              />
             </form>
           </div>
 
           <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
             <div>
               <label htmlFor="email">Nome:</label>
                <div className="bg-slate-100 p-2 flex justify-between items-center ">
                  <input

                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    required
                    placeholder="Digite seu nome"
                    className=" focus:border-red-500 w-full h-full outline-none bg-transparent p-0.5"
                  />
                  <span>
                    <IoPerson className="text-xl"/>
                  </span>
                </div>
               </div>
             <div>
               <label htmlFor="email">Email:</label>
               <div className="bg-slate-100 p-2 flex justify-between items-center ">
                 <input

                   type="email"
                   id="email"
                   name="email"
                   onChange={handleChange}
                   value={data.email}
                   required
                   placeholder="Digite seu email"
                   className=" focus:border-red-500 w-full h-full outline-none bg-transparent p-0.5"
                 />
                 <span>
                   <CiAt className="text-xl" />
                 </span>
               </div>
             </div>
             <div>
               <label htmlFor="password">Senha:</label>
               <div className="bg-slate-100 p-2 flex justify-between items-center ">
                 <input

                   type={showPassword ? "text" : "password"}
                   id="password"
                   name="password"
                   onChange={handleChange}
                   value={data.password}
                   required
                   placeholder="Digite sua senha"
                   className=" focus:border-red-500 w-full h-full outline-none bg-transparent p-0.5"
                 />
                 <span
                   className="cursor-pointer text-xl"
                   onClick={() => setShowPassword(!showPassword)}
                   title={showPassword ? "Ocultar Senha" : "Mostrar Senha"}
                 >
                   {showPassword ? <FaEye /> : <FaEyeSlash />}
                 </span>
               </div>
               </div>
             <div>
               <label htmlFor="password">Confirmar senha:</label>
               <div className="bg-slate-100 p-2 flex justify-between items-center ">
                 <input

                   type={showConfirmPassword ? "text" : "password"}
                   id="confirm-password"
                   name="confirmPassword"
                   onChange={handleChange}
                   value={data.confirmPassword}
                   required
                   placeholder="Confirme sua senha"
                   className="  w-full h-full outline-none bg-transparent p-0.5"
                 />
                 <span
                   className="cursor-pointer text-xl"
                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                   title={setShowConfirmPassword ? "Ocultar Senha" : "Mostrar Senha"}
                 >
                   {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                 </span>
               </div>
               <div className="mx-auto my-4 flex flex-col items-center">
                 <button className=" bg-red-500 text-white font-bold px-14 py-2 mx-auto rounded-full hover:bg-red-600 hover:scale-105 transition-all duration-300">
                   Cadastrar
                 </button>
               </div>
             </div>
           </form>
           <small className="text-center">
             <p>
               Já possui uma conta?{" "}
               <Link
                 to="/Entrar"
                 className="font-bold underline text-red-500 hover:text-red-600"
               >
                 Entrar
               </Link>
             </p>
           </small>
         </div>
       </div>
     </section>
   );
 };
export default Cadastrar;