import React from "react";

const OtherPhoto = () => {
  return (
    <div className="bg-gray-400 w-20 h-20 flex justify-center items-center cursor-pointer">
      <input type="file" name="photos1" id="photo1" className="hidden" />
      <label htmlFor="photo1">add</label>
    </div>
  );
};

export default OtherPhoto;
