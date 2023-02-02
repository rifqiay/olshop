import React from "react";
import MyAccount from "../../components/module/my-account/MyAccount";
import MyAddress from "../../components/module/my-address/MyAddress";
import MyOrder from "../../components/module/my-order/MyOrder";
import img from "../../asset/img/img.jpeg";
import imyaccount from "../../asset/icon/my-account.png";
import imaps from "../../asset/icon/maps.png";
import imyorder from "../../asset/icon/my-order.png";

const Custommer = () => {
  return (
    <div className="grid grid-cols-4">
      <div>
        <div className="w-9/12 ml-auto">
          <div className="flex gap-3 items-center">
            <img
              src={img}
              alt="profile-icon"
              className="w-16 h-16 rounded-full"
            />
            <p className="text-lg font-medium">Jhohanes Mikael</p>
          </div>

          <div className="mt-12 flex flex-col gap-5 text-xl text-slate-500">
            <div className="flex gap-3 cursor-pointer text-black">
              <img src={imyaccount} alt="my-account-icon" />
              <p>My account</p>
            </div>
            <div className="flex gap-3 cursor-pointer">
              <img src={imaps} alt="maps-icon" />
              <p>Shipping address</p>
            </div>
            <div className="flex gap-3 cursor-pointer">
              <img src={imyorder} alt="my-order-icon" />
              <p>My order</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-gray-200 h-screen flex items-center">
        <div className="bg-white w-10/12 mx-auto border border-black rounded-md shadow-lg">
          <MyAccount />
          {/* <MyAddress /> */}
          {/* <MyOrder /> */}
        </div>
      </div>
    </div>
  );
};

export default Custommer;
