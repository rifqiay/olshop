import React from "react";

const MyOrder = () => {
  return (
    <div className="bg-white lg:w-10/12 mx-auto border border-black rounded-md shadow-lg my-20 w-11/12">
      <div className="p-5 h-[35rem]">
        <h1 className="text-2xl font-medium">My order</h1>
        <div className="flex mt-2 lg:gap-10 text-slate-500 font-medium flex-wrap gap-5">
          <p className="text-red-600 underline">All items</p>
          <p>Not yet paid</p>
          <p>Packed</p>
          <p>Sent</p>
          <p>Completed</p>
          <p>Order cancel</p>
        </div>
        <hr className="mt-1" />
      </div>
    </div>
  );
};

export default MyOrder;
