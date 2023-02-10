import React, { useState } from "react";
import Input from "../../base/input/Input";
import Button from "../../base/button";
import img from "../../../asset/img/img.jpeg";
import SelectDay from "../../base/select-day/SelectDay";
import SelectMonth from "../../base/select-mont/SelectMonth";
import SelectYears from "../../base/select-years/SelectYears";

const MyAccount = () => {
  const [prevImg, setPrevImg] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPrevImg(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="bg-white lg:w-10/12 mx-auto border border-black rounded-md shadow-lg my-20 w-11/12">
      <div className="p-5">
        <h1 className="text-2xl font-medium">My Profile</h1>
        <p className="text-sm text-slate-500 mt-2">
          Manage your profile information
        </p>
      </div>
      <hr className="w-11/12 mx-auto border-t-2" />

      <div className="lg:grid grid-cols-3 gap-5">
        <div className="order-2">
          <div className="border-l-2">
            <img
              src={prevImg ? prevImg : img}
              alt="profil"
              className="w-24 h-24 rounded-full mx-auto mt-7 object-cover"
            />
            <input
              type="file"
              className="hidden"
              id="photos"
              onChange={handleChange}
            />
            <label
              htmlFor="photos"
              className="py-2 border-2 block mx-auto rounded-full mt-5 w-2/5 sm:w-1/4 lg:w-8/12 text-center hover:bg-slate-200 transition-all cursor-pointer"
            >
              Select image
            </label>
          </div>
        </div>

        <div className="col-span-2 p-5 order-1">
          <form>
            <div className="lg:flex gap-10 items-center">
              <label htmlFor="nama" className="text-slate-500 ml-auto">
                Name
              </label>
              <Input
                type="text"
                id="nama"
                className="border p-3 rounded-md focus:outline-none lg:w-8/12 ml-auto w-full"
                placeholder="Name"
              />
            </div>
            <div className="lg:flex gap-10 items-center mt-5">
              <label htmlFor="email" className=" text-slate-500 ml-auto">
                Email
              </label>
              <Input
                type="email"
                id="email"
                className="border p-3 rounded-md focus:outline-none lg:w-8/12 ml-auto w-full"
                placeholder="Email"
              />
            </div>
            <div className="lg:flex gap-10 items-center mt-5">
              <label htmlFor="phone" className=" text-slate-500">
                Phone Number
              </label>
              <Input
                type="text"
                id="phone"
                className="border p-3 rounded-md focus:outline-none lg:w-8/12 ml-auto w-full"
                placeholder="Phone Number"
              />
            </div>
            <div className="lg:flex gap-20 mt-5 text-slate-500">
              <p className="lg:ml-8 ">Gender</p>
              <div className="flex gap-8">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="laki-laki"
                  />
                  <label htmlFor="male">Laki-laki</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="perempuan"
                  />
                  <label htmlFor="female">Perempuan</label>
                </div>
              </div>
            </div>
            <div className="lg:flex mt-5 gap-[4.5rem]">
              <p className="text-slate-500">Date of birt</p>
              <div className="flex gap-5">
                <SelectDay />
                <SelectMonth />
                <SelectYears />
              </div>
            </div>
            <Button
              name="Save"
              className="bg-red-500 text-white px-8 py-2  mt-10 lg:ml-0 mb-5 rounded-full hover:bg-red-600 transition-all block ml-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
