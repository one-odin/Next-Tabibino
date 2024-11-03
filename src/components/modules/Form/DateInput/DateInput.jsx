"use client";
import React from "react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import "react-multi-date-picker/styles/colors/purple.css";

import { Controller } from "react-hook-form";

import Label from "../Label/Label";
import { PiCalendar } from "react-icons/pi";

export default function DateInput({ label, name, control, errors }) {
  return (
    <div className="w-full relative">
      <Label id={label} title={label} />
      <div className="border border-gray-300 text-gray-600 rounded focus:outline-none focus:border-gray-400 w-full p-3">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              className="purple"
              inputClass="absolute right-4 top-3 w-96 border-0 ms-0 text-gray-400 focus:outline-none focus:border-0 z-20 bg-transparent"
              arrow={false}
              calendar={persian}
              locale={persian_en}
              value={value}
              onChange={(date) => onChange(date?.format?.("YYYY/MM/DD") || date)}
              placeholder="انتخاب کنید"
            />
          )}
        />
      </div>
      <PiCalendar className="absolute left-4 top-4 text-purple-500" />
      {errors[name] && <div className="ms-4 mt-[0.1rem] text-[12px] text-red-500">{errors[name].message}</div>}
    </div>
  );
}
