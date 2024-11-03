import React from "react";
import Label from "../Label/Label";

export default function TextInput({ label, id, register, errors, placeholder, children }) {
  return (
    <div className="w-full relative">
      <Label id={id} title={label} />
      <input
        type="text"
        id={id}
        className={`border border-gray-300 text-gray-600 rounded focus:outline-none focus:border-gray-400 w-full p-3 ${errors[id] ? "border-red-500" : ""}`}
        placeholder={placeholder}
        {...register(id)}
      />
      <div className="absolute left-4 -top-2 flex gap-2 items-center max-w-[90%] px-[0.37rem] bg-white text-[12px]">{children}</div>
      {/* {errors[id] && <div className="ms-4 mt-[0.1rem] text-[12px] text-red-500">{errors[id].message}</div>} */}
      {errors && <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">متن پشتیبانی</div>}
    </div>
  );
}
