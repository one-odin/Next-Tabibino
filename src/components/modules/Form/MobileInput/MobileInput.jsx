import React from "react";
import countriesCode from "@/app/countriesCode";
import Label from "../Label/Label";
import { IoIosArrowDown } from "react-icons/io";

export default function MobileInput({ label, register, errors }) {
  return (
    <div className="w-full relative">
      <Label id={label} title={label} />
      <div className="flex">
        <input
          type="text"
          id="mobile"
          className={`border border-gray-300 text-gray-600 rounded-s-md border-e-0 focus:outline-none focus:border-gray-400 w-full p-3 text-left ${errors.mobile ? "border-red-500" : ""}`}
          placeholder="...91"
          {...register("mobile")}
        />
        <select
          dir="ltr"
          name="countryCode"
          className={`text-gray-600 ps-3 pe-4 text-sm border border-e-0 border-gray-300 rounded-s-md focus:border-gray-400 appearance-none focus:outline-none focus:border-0 ${
            errors.mobile ? "border-red-500" : ""
          }`}
          {...register("countryCode")}
        >
          {countriesCode.map((country) => (
            <option key={country.code} value={country.code}>
              ({country.code}) {country.name}
            </option>
          ))}
        </select>

        {/* Custom Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 left-20 flex items-center px-2 text-purple-600">
          <IoIosArrowDown />
        </div>
      </div>
      {errors.mobile && <div className="ms-4 mt-[0.1rem] text-[12px] text-red-500">{errors.mobile.message}</div>}
    </div>
  );
}
