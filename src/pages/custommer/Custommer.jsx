import React, { useState, useEffect } from "react";
import Button from "../../components/base/button";
import MyAccount from "../../components/module/my-account/MyAccount";
import MyAddress from "../../components/module/my-address/MyAddress";
import MyOrder from "../../components/module/my-order/MyOrder";
import img from "../../asset/img/img.jpeg";
import imyaccount from "../../asset/icon/my-account.png";
import imaps from "../../asset/icon/maps.png";
import imyorder from "../../asset/icon/my-order.png";
import Navbar from "../../components/module/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Custommer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="lg:grid grid-cols-4">
        <div className="mt-32">
          <div className="w-9/12 ml-5 lg:ml-auto">
            <div className="flex gap-3 items-center">
              <img
                src={img}
                alt="profile-icon"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-medium">Jhohanes Mikael</p>
              </div>
            </div>

            <div className="mt-12 flex lg:flex-col gap-5 text-xl text-slate-500 overflow-auto flex-wrap mb-10">
              <div
                className={
                  activeTab === "tab1"
                    ? "flex gap-3 cursor-pointer text-black"
                    : "flex gap-3 cursor-pointer"
                }
                onClick={() => setActiveTab("tab1")}
              >
                <img
                  src={imyaccount}
                  alt="my-account-icon"
                  className="w-8 h-8 "
                />

                <p className="hidden sm:block">My account</p>
              </div>
              <div
                className={
                  activeTab === "tab2"
                    ? "flex gap-3 cursor-pointer text-black"
                    : "flex gap-3 cursor-pointer"
                }
                onClick={() => setActiveTab("tab2")}
              >
                <img src={imaps} alt="maps-icon" />
                <p className="hidden sm:block">Shipping address</p>
              </div>
              <div
                className={
                  activeTab === "tab3"
                    ? "flex gap-3 cursor-pointer text-black"
                    : "flex gap-3 cursor-pointer"
                }
                onClick={() => setActiveTab("tab3")}
              >
                <img src={imyorder} alt="my-order-icon" />
                <p className="hidden sm:block">My order</p>
              </div>
            </div>
            <Button
              name="log out"
              className="bg-red-600 text-white mb-5 block px-4 py-2 rounded-md hover:bg-red-500 transition-all"
              onClick={handleLogout}
            />
          </div>
        </div>
        <div className="col-span-3 bg-gray-200 min-h-screen flex lg:items-center overflow-auto items-start">
          {activeTab === "tab1" && <MyAccount />}
          {activeTab === "tab2" && <MyAddress />}
          {activeTab === "tab3" && <MyOrder />}
        </div>
      </div>
    </>
  );
};

export default Custommer;
