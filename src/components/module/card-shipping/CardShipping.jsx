import React from "react";
import img from "../../../asset/img/img.jpeg";

const CardShipping = () => {
  return (
    <div className="border flex gap-5 p-3 rounded-md shadow-md">
      <div>
        <img src={img} alt="img" className="w-28 h-24 rounded-md" />
      </div>
      <div className="flex justify-between w-11/12 items-center">
        <div>
          <p className="text-lg font-medium">Men's formal Suit - Black</p>
          <p className="text-sm text-slate-500">Zalora cloth</p>
        </div>
        <div>
          <p className="font-medium text-lg">$ 20.0</p>
        </div>
      </div>
    </div>
  );
};

export default CardShipping;
