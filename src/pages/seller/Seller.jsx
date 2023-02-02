import React from "react";
import cartorder from "../../asset/icon/cart-order.png";
import product from "../../asset/icon/product.png";
import store from "../../asset/icon/store.png";
import img from "../../asset/img/img.jpeg";
import AccordionOrder from "../../components/base/accordion-order/AccordionOrder";
import AccordionProduct from "../../components/base/accordion-product/AccordionProduct";
import AccordionStore from "../../components/base/accordion-store/AccordionStore";
import Input from "../../components/base/input/Input";
import MyStore from "../../components/module/my-store/MyStore";
import search from "../../asset/icon/search.svg";
import noProductIcon from "../../asset/img/no-product.png";
import MyProduct from "../../components/module/my-product/MyProduct";
import Button from "../../components/base/button";
import OtherPhoto from "../../components/base/other-photo/OtherPhoto";
import SellingProduct from "../../components/module/selling-product/SellingProduct";

const Seller = () => {
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
              <AccordionStore
                icon={store}
                title="Store"
                subtitle="Store profile"
              />
            </div>
            <div className="flex gap-3 cursor-pointer">
              <AccordionProduct
                icon={product}
                title="Product"
                subtitle="My products"
                subtitle2="Selling products"
              />
            </div>
            <div className="flex gap-3 cursor-pointer">
              <AccordionOrder
                icon={cartorder}
                title="Order"
                subtitle="My order"
                subtitle2="Order cancel"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 bg-gray-200 min-h-screen overflow-auto flex py-20">
        <MyStore />
        {/* <MyProduct /> */}
        {/* <SellingProduct /> */}
      </div>
    </div>
  );
};

export default Seller;
