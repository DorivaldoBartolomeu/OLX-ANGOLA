import React from "react";
import Logo from "./logo";
import { CgSearch } from "react-icons/cg";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="h-16 overflow-hidden shadow-md bg-white static top-0 left-0 right-0 z-50">
        <div className="h-full container mx-auto flex items-center px-4 justify-between">
          <div className="">
            <Link to="/" className="flex items-center gap-2">
              <Logo w={100} h={50} />
            </Link>
          </div>

          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full pl-3 focus-within:shadow">
            <input
              type="text"
              placeholder="Pesquisar Produto..."
              className="outline-none w-full"
            />
            <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center text-white rounded-r-full cursor-pointer active:bg-red-700">
              <CgSearch />
            </div>
          </div>

          <div className="flex items-center gap-7">
            <div className="text-2xl text-gray-600 cursor-pointer flex items-center gap-4">
              <FaRegCircleUser />
            </div>
            <div className="text-2xl text-gray-600 cursor-pointer relative">
              <span>
                <FaShoppingCart />{" "}
              </span>
              <div className="w-5 bg-red-600 text-white border rounded-full absolute -top-3 -right-3 flex items-center justify-center">
                <p className="text-sm">0</p>
              </div>
            </div>

            <div>
              <Link
                to="/Entrar"
                className="px-6 p-1 border rounded-full bg-red-600 text-white active:bg-red-700"
              >
                Entrar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
