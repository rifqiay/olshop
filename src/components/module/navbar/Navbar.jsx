import React, { useState } from "react";
import search from "../../../asset/icon/search.svg";
import { Link } from "react-router-dom";
import logo from "../../../asset/icon/logo.svg";
import bell from "../../../asset/icon/bell.svg";
import filter from "../../../asset/icon/filter.svg";
import mail from "../../../asset/icon/mail.svg";
import shopping from "../../../asset/icon/shopping-cart .svg";
import img from "../../../asset/img/img.jpeg";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const handleCariClick = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <nav className="border-b shadow-md flex justify-between items-center px-10 pt-3 pb-14 sm:py-3 sm:pt-0 sm:pb-0 fixed top-0 bg-white w-full z-50">
        <div className="grow">
          {!showSearch && (
            <Link to="/" className="text-2xl font-bold underline italic">
              <img src={logo} alt="logo" className="h-8 " />
            </Link>
          )}
          <label
            for="cek"
            className="absolute top-16 cursor-pointer shadow-md sm:hidden"
          >
            <div className="bg-slate-700 h-0.5 w-6 mt-1"></div>
            <div className="bg-slate-700 h-0.5 w-6 mt-1"></div>
            <div className="bg-slate-700 h-0.5 w-6 mt-1"></div>
          </label>
        </div>
        <img
          src={search}
          alt="search-icon"
          className="lg:hidden w-8"
          onClick={handleCariClick}
        />
        <div
          className={`border py-2 pl-3 relative w-[25rem] lg:w-[30rem] rounded-full lg:block ${
            showSearch ? "" : "hidden"
          }`}
        >
          <input
            type="search"
            placeholder="Search"
            className="focus:outline-none w-10/12"
          />
          <div className="bg-gray-200 w-7 absolute top-0 w-[48px] h-[40px] right-0 rounded-r-full p-2 hover:bg-gray-300 transition-all cursor-pointer">
            <img
              src={search}
              alt="search-icon"
              className="w-8 absolute right-[10px] top-1"
            />
          </div>
        </div>
        <input type="checkbox" id="cek" className="peer hidden" />
        <div className="flex flex-col lg:grow items-center sm:justify-around gap-5 absolute left-0 top-0 -translate-x-[33rem] peer-checked:translate-x-0 transition duration-500 h-screen bg-white shadow-2xl w-10/12 p-5 sm:translate-x-0 sm:w-auto sm:flex-row sm:static sm:h-auto sm:bg-inherit sm:shadow-none z-50">
          <label
            for="cek"
            className="absolute top-6 cursor-pointer text-2xl right-6 sm:hidden"
          >
            X
          </label>
          <div className="flex gap-5 flex-col sm:items-center mt-24 sm:flex-row sm:mt-0">
            <Link to="/checkout" className="flex gap-2">
              <div>
                <img src={shopping} alt="shop" />
              </div>
              <p className="sm:hidden">Cart</p>
            </Link>
            <div className="flex gap-2">
              <div>
                <img src={bell} alt="bell" />
              </div>
              <p className="sm:hidden">Notificatin</p>
            </div>
            <div className="flex gap-2">
              <div>
                <img src={mail} alt="mail" />
              </div>
              <p className="sm:hidden">Chats</p>
            </div>
            <Link to="/seller" className="flex gap-2">
              <div>
                <img
                  src={img}
                  alt="img"
                  className="w-8 rounded-full object-cover"
                />
              </div>
              <p className="sm:hidden">Profile</p>
            </Link>
          </div>
          {/* <div className="flex gap-5 flex-col mt-24 sm:flex-row sm:mt-0">
            <Link
              to="login"
              className="bg-red-600 text-white w-24 py-1.5 text-center rounded-full hover:bg-red-500 transition-all cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="register"
              className="w-24 py-1.5 border border-gray-300 text-center rounded-full cursor-pointer hover:bg-gray-200 transition-all"
            >
              Sign up
            </Link>
            
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
