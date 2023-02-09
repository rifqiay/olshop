import React, { Fragment, useState } from "react";
import Input from "../../base/input/Input";
import Button from "../../base/button";
import OtherPhoto from "../../base/other-photo/OtherPhoto";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SellingProduct = () => {
  const [cover, setCover] = useState(null);
  const [previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCover(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handlePhoto = (e) => {
    const files = e.target.files;
    const newPreviews = [];

    for (let i = 0; i < 5; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newPreviews.push(reader.result);
        if (newPreviews.length === files.length) {
          setPreviews(newPreviews);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (index) => {
    setPreviews((prevPreviews) => {
      return prevPreviews.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="w-full flex flex-col gap-5" data-aos="fade-left">
      <div className="bg-white w-10/12 mx-auto border  rounded-md shadow-lg">
        <h1 className="mt-5 ml-5 text-2xl font-medium">Inventory</h1>
        <hr className="my-5 border-t-2" />
        <div className="flex flex-col gap-5 ml-5 mb-5">
          <label htmlFor="nama" className="">
            Name of goods
          </label>
          <Input
            type="text"
            className="border p-2 rounded-md focus:outline-none w-1/2"
          />
        </div>
      </div>

      <div className="bg-white w-10/12 mx-auto border  rounded-md shadow-lg">
        <h1 className="mt-5 ml-5 text-2xl font-medium">Item details</h1>
        <hr className="my-5 border-t-2" />
        <div className="flex flex-col gap-5 ml-5 mb-5">
          <label htmlFor="nama" className="">
            Unit price
          </label>
          <Input
            type="text"
            className="border p-2 rounded-md focus:outline-none w-1/2"
          />
        </div>
        <div className="flex flex-col gap-5 ml-5 mb-5">
          <label htmlFor="nama" className="">
            Stock
          </label>
          <div className="relative">
            <Input
              type="text"
              className="border p-2 rounded-md focus:outline-none w-1/2 pr-16"
            />
            <p className="text-slate-500 absolute right-[25rem] top-[9px]">
              Buah
            </p>
          </div>
        </div>
        <div className="ml-5 mb-5">
          <p>Condition</p>
          <div className="flex mt-1 gap-5">
            <div className="flex gap-2">
              <input type="radio" name="condition" id="new" />
              <label htmlFor="new">New</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="condition" id="second" />
              <label htmlFor="second">Second</label>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white w-10/12 mx-auto border  rounded-md shadow-lg"
        data-aos="fade-up"
      >
        <h1 className="mt-5 ml-5 text-2xl font-medium">Photo of goods</h1>
        <hr className="my-5 border-t-2" />
        <div>
          <div
            className="w-11/12 mx-auto gap-3 border-dashed rounded-lg p-5
       mb-5 border-2 border-gray-300 flex items-center"
          >
            <input
              type="file"
              name="photos1"
              id="photo1"
              className="hidden"
              onChange={handleChange}
            />
            <label
              htmlFor="photo1"
              className={
                cover
                  ? "w-32 h-32 flex justify-center items-center cursor-pointer"
                  : "bg-gray-100 w-32 h-32 rounded-lg flex justify-center items-center cursor-pointer"
              }
            >
              {cover ? <img src={cover} alt="img" /> : <p>Cover</p>}
            </label>

            {previews?.map((item, index) => (
              <Fragment key={index}>
                <OtherPhoto
                  item={item}
                  handleChange={handlePhoto}
                  handleRemove={handleRemove}
                  index={index}
                />
              </Fragment>
            ))}
            <input
              type="file"
              multiple
              onChange={handlePhoto}
              id="multiple"
              className="hidden"
            />
            {previews.length === 5 ? (
              ""
            ) : (
              <label
                htmlFor="multiple"
                className="bg-gray-200 rounded-lg w-20 h-20 flex justify-center items-center cursor-pointer"
              >
                <p className="text-xs text-center">add max 5 photo</p>
              </label>
            )}
          </div>
          <hr className="w-11/12 mx-auto mt-3 border-t-2" />
        </div>
      </div>

      <div
        className="bg-white w-10/12 h-[30rem] mx-auto border  rounded-md shadow-lg"
        data-aos="fade-up"
      >
        <h1 className="mt-5 ml-5 text-2xl font-medium">Description</h1>
        <hr className="mt-5 mb-10 border-t-2" />
        <div className="w-11/12 mx-auto mb-5">
          <ReactQuill className="h-64" />
        </div>
      </div>
      <Button
        name="Save"
        className="bg-red-500 w-40 rounded-full py-2 text-white font-medium relative -right-[42rem] top-12 hover:bg-red-600 transition-all"
      />
    </div>
  );
};

export default SellingProduct;
