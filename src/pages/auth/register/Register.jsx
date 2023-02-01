import React, { useState } from "react";
import logo from "../../../asset/icon/logo.svg";
import Button from "../../../components/base/button";
import Custommer from "../../../components/module/custommer/Custommer";
import Seller from "../../../components/module/seller/Seller";

const Register = () => {
  const [active, setActive] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center my-10">
      <div className="w-10/12 max-w-md">
        <img src={logo} alt="logo" className="block mx-auto" />
        <p className="text-center mt-3">Please login with your account</p>
        <div className="mt-5 flex justify-center w-auto">
          <div>
            <Button
              name="Custommer"
              className={
                active
                  ? "border p-3 bg-[#DB3022] text-white"
                  : "border p-3  text-[#9B9B9B]"
              }
              onClick={() => setActive(true)}
            />
            <Button
              name="Seller"
              className={
                active
                  ? "border p-3  text-[#9B9B9B]"
                  : "border p-3 bg-[#DB3022] text-white"
              }
              onClick={() => setActive(false)}
            />
          </div>
        </div>
        <div className="mt-12">
          <form>
            {active ? (
              <Custommer
                showPassword={showPassword}
                handleShowPassword={handleShowPassword}
              />
            ) : (
              <Seller
                showPassword={showPassword}
                handleShowPassword={handleShowPassword}
              />
            )}
            <p className="mt-5 text-end">Forgot password?</p>
            <Button
              name="Register"
              className="bg-[#DB3022] p-3 w-full text-white mt-5 rounded-full hover:bg-[#f43928] transition-all"
            />
          </form>
          <p className="mt-10 text-center">
            Already have Blanja account? Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
