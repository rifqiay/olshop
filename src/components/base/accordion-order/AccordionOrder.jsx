import React from "react";

const AccordionOrder = ({ icon, title, subtitle, subtitle2 }) => {
  return (
    <>
      <div>
        <img src={icon} alt={icon} />
      </div>
      <div>
        <input type="checkbox" id="item3" class="peer hidden" />
        <label
          htmlFor="item3"
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

export default AccordionOrder;
