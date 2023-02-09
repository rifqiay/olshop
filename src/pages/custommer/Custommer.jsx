import React, { useState, useEffect } from "react";
import MyAccount from "../../components/module/my-account/MyAccount";
import MyAddress from "../../components/module/my-address/MyAddress";
import MyOrder from "../../components/module/my-order/MyOrder";
import img from "../../asset/img/img.jpeg";
import imyaccount from "../../asset/icon/my-account.png";
import imaps from "../../asset/icon/maps.png";
import imyorder from "../../asset/icon/my-order.png";
import Navbar from "../../components/module/navbar/Navbar";

const Custommer = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4">
        <div className="mt-32">
          <div className="w-9/12 ml-auto">
            <div className="flex gap-3 items-center">
              <img
                src={img}
                alt="profile-icon"
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="text-lg font-medium">Jhohanes Mikael</p>
            </div>

            <div className="mt-12 flex flex-col gap-5 text-xl text-slate-500">
              <div
                className={
                  activeTab === "tab1"
                    ? "flex gap-3 cursor-pointer text-black"
                    : "flex gap-3 cursor-pointer"
                }
                onClick={() => setActiveTab("tab1")}
              >
                <img src={imyaccount} alt="my-account-icon" />
                <p>My account</p>
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
                <p>Shipping address</p>
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
                <p>My order</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-gray-200 h-screen flex items-center">
          <div className="bg-white w-10/12 mx-auto border border-black rounded-md shadow-lg mt-20">
            {activeTab === "tab1" && <MyAccount />}
            {activeTab === "tab2" && <MyAddress />}
            {activeTab === "tab3" && <MyOrder />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Custommer;
