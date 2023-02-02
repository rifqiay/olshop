import React from "react";

const AccordionStore = ({ icon, title, subtitle }) => {
  return (
    <>
      <div>
        <img src={icon} alt="my-store-icon" />
      </div>
      <div>
        <input type="checkbox" id="item1" class="peer hidden" />
        <label
          htmlFor="item1"
          className="flex justify-between hover:cursor-pointer peer-checked:text-blue-600"
        >
          {title}
        </label>
        <div class="border-t mt-3 hidden peer-checked:block transition-all">
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default AccordionStore;
