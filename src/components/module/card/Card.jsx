import React from "react";
import img from "../../../asset/img/img.jpeg";
import Rating from "../../../asset/img/Rating.svg";

const Card = () => {
  return (
    <div className="border w-full rounded-lg">
      <img src={img} alt="product" className="w-full h-40 rounded-t-md" />
      <div className="px-2 py-3">
        <p className="text-lg font-medium tracking-wider leading-6">
          Men's formal suit - Black & White
        </p>
        <p className="mt-2 font-medium text-red-600">$ 40.0</p>
        <p className="font-medium text-sm text-slate-500 mb-3">Zalora Cloth</p>
        <img src={Rating} alt="rating" />
      </div>
    </div>
  );
};

export default Card;
