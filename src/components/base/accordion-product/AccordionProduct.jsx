import React from "react";

const AccordionProduct = ({ icon, title, subtitle, subtitle2 }) => {
  return (
    <>
      <div>
        <img src={icon} alt="my-store-icon" />
      </div>
      <div>
        <input type="checkbox" id="item2" class="peer hidden" />
        <label
          htmlFor="item2"
          className="flex justify-between hover:cursor-pointer peer-checked:text-blue-600"
        >
          {title}
        </label>
        <div class="border-t mt-3 hidden peer-checked:block transition-all">
          <p>{subtitle}</p>
          <p>{subtitle2}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionProduct;
