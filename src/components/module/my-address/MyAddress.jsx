import React from "react";

const MyAddress = () => {
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-medium">Choose another address</h1>
        <p className="text-slate text-sm">Manage your shipping address</p>
      </div>
      <hr className="w-11/12 border-t-2 mx-auto" />
      <div className="p-5">
        <div className="border-2 border-dashed border-gray-400 rounded-md h-28 flex items-center justify-center mt-5 cursor-pointer">
          <h1 className="text-2xl font-bold text-slate-500">Add new address</h1>
        </div>
        <div className="mt-10 border-2 border-red-500 rounded-md p-5">
          <h4 className="text-xl font-medium ">Andreas Jane</h4>
          <p className="mt-2">
            Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
            Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
            Kab. Banyumas, 53181
          </p>
          <h2 className="text-red-600 font-medium mt-5 cursor-pointer hover:underline transition-all">
            Change address
          </h2>
        </div>
      </div>
    </>
  );
};

export default MyAddress;
