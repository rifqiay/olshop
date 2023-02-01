import React from "react";
import Card from "../../components/module/card/Card";

const Category = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-bold mb-5">T-Shirt</h1>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Category;