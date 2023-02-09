import React, { useEffect } from "react";
import img from "../../asset/img/img.jpeg";
import Rating from "../../asset/img/Rating.svg";
import minus from "../../asset/icon/minus.svg";
import plus from "../../asset/icon/plus.svg";
import Button from "../../components/base/button";
import review from "../../asset/img/review.png";
import review2 from "../../asset/img/review2.png";
import Card from "../../components/module/card/Card";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/module/navbar/Navbar";

const Detail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto mt-32">
        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <img src={img} alt="img" className=" rounded-md" />
            <div className="flex gap-5 mt-5 overflow-scroll overflow-x-auto overflow-y-hidden">
              <img src={img} alt="img" className="w-20" />
              <img src={img} alt="img" className="w-20" />
              <img src={img} alt="img" className="w-20" />
              <img src={img} alt="img" className="w-20" />
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-medium">Baju muslim pria</h1>
            <p className="text-slate-500">zalora clotch</p>
            <img src={Rating} alt="rating" />
            <div className="mt-5">
              <p className="text-slate-500">price</p>
              <h2 className="text-2xl font-medium">$ 20.0</h2>
            </div>
            <div className="mt-5">
              <p>Color</p>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-500 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex gap-16 mt-5">
              <div>
                <p>size</p>
                <p className="mt-3">XL</p>
              </div>
              <div className="w-32">
                <p className="text-center">jumlah</p>
                <div className="flex justify-between mt-3">
                  <div className="bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full">
                    <img src={minus} alt="minus" className="w-6 " />
                  </div>
                  <p>1</p>
                  <div className="bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full">
                    <img src={plus} alt="plus" className="w-6 " />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Button
                name="Chat"
                className="border-2 py-2 w-40 rounded-full border-black hover:bg-gray-200 transition-all"
              />
              <Button
                name="Add bag"
                className="border-2 py-2 w-40 rounded-full border-black hover:bg-gray-200 transition-all"
              />
              <Button
                name="Buy Now"
                className="bg-red-600 py-2 w-full sm:w-96 rounded-full text-white hover:bg-red-700 transition-all"
                onClick={() => navigate("/checkout")}
              />
            </div>
          </div>
        </div>
        {/* informasi produk */}
        <div className="mt-10 mb-7">
          <h1 className="text-3xl">Informasi Produk</h1>
          <div className="mt-5">
            <h5 className="text-xl">Condition</h5>
            <p className="uppercase text-red-600">new</p>
          </div>
          <div className="mt-10">
            <h5 className="text-2xl mb-3">Deskripsi</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              deserunt.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptatem deleniti officiis perferendis similique impedit
              reprehenderit. Nemo voluptatum sed ea.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem autem incidunt ut odio eum tempore explicabo nisi,
              doloremque unde consectetur.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
              error?
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl mb-4">Produk review</h1>
            <div className="flex gap-5">
              <div>
                <img src={review} alt="review" />
              </div>
              <div>
                <img src={review2} alt="review" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-10 mb-7">
          <h1 className="text-2xl font-medium">You can also like this</h1>
          <p className="text-sm text-slate-500">You've never seen it before!</p>
        </div>
        <div
          className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          data-aos="fade-up"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Detail;
