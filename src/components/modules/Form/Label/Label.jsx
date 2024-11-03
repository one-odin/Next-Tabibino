import React from "react";

const Label = ({ id, title }) => {
  return (
    <label htmlFor={id} className="absolute right-4 -top-2 max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
      {title}
    </label>
  );
};

export default Label;
