import React from "react";
import Label from "../Label/Label";
import { IoIosArrowDown } from "react-icons/io";

const CustomSelect = ({ id, label, options, register, errors, children }) => {
  return (
    <div className="w-full relative">
      {/* Label */}
      <Label id={id} title={label} />

      {/* Select Input */}
      <select
        id={id}
        {...register(id)}
        className={`border border-gray-300 text-gray-600 rounded focus:outline-none focus:border-gray-400 w-full p-3 appearance-none ${errors[id] ? "border-red-500" : ""}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Custom Arrow Icon */}
      <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-purple-600">
        <IoIosArrowDown />
      </div>

      {/* Error Message */}
      {errors[id] && <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">{errors[id]?.message || "لطفاً مقدار معتبر وارد کنید"}</div>}

      {/* Custom Children (e.g., Map Button) */}
      <div className="absolute left-4 -top-2 flex gap-1 items-center max-w-[90%] px-[0.37rem] bg-white text-[12px]">{children}</div>
    </div>
  );
};

export default CustomSelect;
