import React from "react";

const OtherPhoto = ({ handlePhoto, item, handleRemove, index }) => {
  return (
    <div className="relative">
      <input
        type="file"
        name="photos1"
        id="photos1"
        className="hidden"
        onChange={handlePhoto}
      />
      <label
        htmlFor="photos1"
        className="rounded-lg bg-gray-100 w-20 h-20 flex justify-center items-center cursor-pointer"
      >
        {item ? <img src={item} alt="img" /> : <p>add</p>}
      </label>
      <div
        className="bg-red-600 text-white absolute -right-[2px] -top-[13px] h-[17px] w-[15px] rounded-full cursor-pointer"
        onClick={() => handleRemove(index)}
      >
        <p className="absolute -top-[4px] right-[3px] ">&times;</p>
      </div>
    </div>
  );
};

export default OtherPhoto;
