import React from "react";
import Input from "../../base/input/Input";
import search from "../../../asset/icon/search.svg";
import noProductIcon from "../../../asset/img/no-product.png";

const MyProduct = () => {
  return (
    <div
      className="bg-white lg:w-10/12 mx-auto border border-black rounded-md shadow-lg my-20 w-11/12"
      data-aos="fade-left"
    >
      <div className="p-5">
        <h1 className="text-2xl font-medium">My product</h1>
        <div className="flex gap-10 text-slate-500 mt-5">
          <h5 className="text-red-600 underline font-semibold cursor-pointer">
            All items
          </h5>
          <h5 className="cursor-pointer">Sould out</h5>
          <h5 className="cursor-pointer">Archived</h5>
        </div>
        <hr className="my-5 border-t-2" />
        <div className="relative">
          <Input
            type="text"
            className="border p-2 rounded-full pl-12 focus:outline-none shadow-md"
          />
          <img
            src={search}
            alt="search-icon"
            className="w-[28px] absolute top-2 left-3"
          />
        </div>

        <div>
          <div className="flex bg-gray-200 py-3 px-10 justify-between rounded-t-md mt-5 ">
            <h5>Product name</h5>
            <div className="flex gap-32 ">
              <h5>Price</h5>
              <h5>Stock</h5>
            </div>
          </div>
          <div className="border border-gray-300 rounded-b-md flex justify-center items-center h-80">
            <img src={noProductIcon} alt="no-product-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
