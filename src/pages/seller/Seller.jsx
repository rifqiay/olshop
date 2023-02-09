import React, { useState, useEffect, Fragment } from "react";
import cartorder from "../../asset/icon/cart-order.png";
import product from "../../asset/icon/product.png";
import store from "../../asset/icon/store.png";
import img from "../../asset/img/img.jpeg";
import AccordionOrder from "../../components/base/accordion-order/AccordionOrder";
import AccordionProduct from "../../components/base/accordion-product/AccordionProduct";
import AccordionStore from "../../components/base/accordion-store/AccordionStore";
import MyOrderSeller from "../../components/module/my-order-seller/MyOrderSeller";
import MyProduct from "../../components/module/my-product/MyProduct";
import MyStore from "../../components/module/my-store/MyStore";
import Navbar from "../../components/module/navbar/Navbar";
import SellingProduct from "../../components/module/selling-product/SellingProduct";

const Seller = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4">
        <div className="mt-28">
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
              <div className="flex gap-3 cursor-pointer">
                <AccordionStore
                  icon={store}
                  title="Store"
                  subtitle="Store profile"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
              <div className="flex gap-3 cursor-pointer">
                <AccordionProduct
                  icon={product}
                  title="Product"
                  subtitle="My products"
                  subtitle2="Selling products"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
              <div className="flex gap-3 cursor-pointer">
                <AccordionOrder
                  icon={cartorder}
                  title="Order"
                  subtitle="My order"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-gray-200 min-h-screen overflow-auto flex py-20 mt-16">
          {activeTab === "tab1" && <MyStore />}
          {activeTab === "tab2" && <MyProduct />}
          {activeTab === "tab3" && <SellingProduct />}
          {activeTab === "tab4" && <MyOrderSeller />}
        </div>
      </div>
    </>
  );
};

export default Seller;
