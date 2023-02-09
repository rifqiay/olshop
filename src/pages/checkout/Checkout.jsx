import React, { useState, useEffect } from "react";
import Button from "../../components/base/button";
import Address from "../../components/module/address/Address";
import CardShipping from "../../components/module/card-shipping/CardShipping";
import ModalPayment from "../../components/module/modal-payment/ModalPayment";
import Navbar from "../../components/module/navbar/Navbar";

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-3 gap-5 w-11/12 mx-auto my-32">
        <ModalPayment visible={showModal} onClose={handleCloseModal} />
        <div className="lg:col-span-2" data-aos="fade-right">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div>
            <h5 className="text-xl mb-2 mt-5">Shipping Address</h5>
            <Address />
          </div>
          <div className="mt-10 flex flex-col gap-5">
            <CardShipping />
            <CardShipping />
            <CardShipping />
            <CardShipping />
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="border mt-5 rounded-md shadow-md p-5">
            <h1 className="font-medium ">Shopping summary</h1>
            <div className="flex justify-between mt-5">
              <p className="text-slate-500">Order</p>
              <p>$40</p>
            </div>
            <div className="flex justify-between my-2">
              <p className="text-slate-500">Delivery</p>
              <p>$5.0</p>
            </div>
            <hr />
            <div className="flex justify-between my-2">
              <p>Shopping summary</p>
              <p>$45.0</p>
            </div>
            <Button
              name="Select payment"
              className="bg-red-600 w-full py-2 rounded-full text-white mt-2 font-medium hover:bg-red-700 transition-all"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
