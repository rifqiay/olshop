import React from "react";
import Button from "../../base/button";

const Address = () => {
  return (
    <div className="border py-3 px-4 rounded-md shadow-md">
      <h2 className="text-lg font-medium my-2">Andreas Jane</h2>
      <p className="text-sm mb-5">
        Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
        Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab.
        Banyumas, 53181
      </p>
      <Button
        name="Choose another address"
        className="border-2 py-2 px-6 rounded-full text-gray-500 hover:bg-slate-200 transition-all"
      />
    </div>
  );
};

export default Address;
