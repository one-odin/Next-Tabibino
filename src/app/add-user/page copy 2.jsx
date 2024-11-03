"use client";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
// import { addPostValidationSchema } from "@/utils/validationSchema";
import { useRouter } from "next/navigation";
import DatePicker from "react-multi-date-picker";
import InputField from "@/components/Form/TextInput/InputField";
import countries from "@/app/countriesCode";
import { SlLocationPin } from "react-icons/sl";

export default function AddUser() {
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const navigate = useRouter();
  const initialValues = { first_name: "", last_name: "", national_code: "", is_foreign: 0, mobile: "", countryCode: "", gender: "", city: "", birthdate: new Date(), description: "" };

  const addPostHandler = async (values) => {
    setIsFormSubmit(true);

    const newPostData = {
      first_name: values.first_name,
      last_name: values.last_name,
      national_code: values.national_code,
      is_foreign: values.is_foreign,
      mobile: values.mobile,
      countryCode: values.countryCode,
      gender: values.gender,
      city: values.city,
      birthdate: values.birthdate,
      description: values.description,
    };

    console.log(newPostData);

    // const res = await fetch("/api/posts", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newPostData),
    // });
    // if (res.status === 201) {
    //   setIsFormSubmit(false);
    //   showToastSuccess("مقاله جدید با موفقیت افزوده شد");
    //   setTimeout(() => {
    //     navigate.push("/blog");
    //   }, 3000);
    // } else if (res.status === 422) {
    //   setIsFormSubmit(false);
    //   showToastError("اطلاعات وارد شده صحیح نیست، مجددا تلاش نمایید");
    // } else if (res.status === 500) {
    //   setIsFormSubmit(false);
    //   showToastError("یک خطا از سمت سرور وجود دارد، لطفا لحظاتی دیگر تلاش نمایید.");
    // }
  };

  return (
    <div className="container mx-auto text-center mt-20 pb-5">
      <Formik
        // validationSchema={addPostValidationSchema}
        initialValues={initialValues}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={(values) => {
          setIsFormSubmit(true);
          addPostHandler(values);
        }}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit} className="grid grid-cols-2 gap-x-4 gap-y-8 mx-auto px-3 mt-12 lg:w-2/3 w-full">
              <div className="w-full relative">
                <label htmlFor="first_name" className="absolute right-4 -top-2 max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
                  نام (اختیاری)
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="border border-gray-300 text-gray-600 rounded focus:outline-none focus:border-gray-400 w-full p-3"
                  placeholder="نام را وارد نمایید"
                  {...props.getFieldProps("first_name")}
                />
                <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">متن پشتیبانی</div>
              </div>

              <div className="w-full relative">
                <label htmlFor="last_name" className="absolute right-4 -top-2 max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
                  نام خانوادگی (اختیاری)
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="border border-gray-300 text-gray-600 rounded focus:outline-none focus:border-gray-400 w-full p-3"
                  placeholder="نام خانوادگی را وارد نمایید"
                  {...props.getFieldProps("last_name")}
                />
                <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">متن پشتیبانی</div>
              </div>

              <div className="w-full relative">
                <label htmlFor="national_code" className="absolute right-4 -top-2 max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
                  کد ملی (اختیاری)
                </label>
                <div className="absolute left-4 -top-2 flex gap-2 items-center max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
                  <input
                    type="checkbox"
                    {...props.getFieldProps("is_foreign")}
                    onChange={(e) => props.setFieldValue("is_foreign", e.target.checked ? 1 : 0)}
                    // checked={props.values.is_foreign}
                  />
                  اتباع خارجی
                </div>
                <input
                  type="text"
                  id="national_code"
                  className="border border-gray-300 text-gray-600 rounded focus:outline-none focus:border-gray-400 w-full p-3"
                  placeholder="کد ملی را وارد نمایید"
                  {...props.getFieldProps("national_code")}
                />
                <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">متن پشتیبانی</div>
              </div>

              <div className="w-full relative">
                <label htmlFor="mobile" className="absolute right-4 -top-2 max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
                  شماره موبایل *
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="mobile"
                    className="border border-gray-300 text-gray-600 rounded-s-md border-e-0 focus:outline-none focus:border-gray-400 w-full p-3 text-left"
                    placeholder="91..."
                    {...props.getFieldProps("mobile")}
                  />
                  <select
                    dir="ltr"
                    name="countryCode"
                    className="text-gray-600 ps-3 text-sm border border-e-0 border-gray-300 rounded-s-md focus:border-gray-400"
                    {...props.getFieldProps("countryCode")}
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        ({country.code}) {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">متن پشتیبانی</div>
              </div>

              <div className="w-full relative lg:col-span-2 lg:w-1/2">
                <label htmlFor="gender" className="absolute right-4 -top-2 max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
                  جنسیت *
                </label>
                <select name="gender" className="border border-gray-300 text-gray-400 rounded focus:outline-none focus:border-gray-400 m-auto w-full p-3" {...props.getFieldProps("gender")}>
                  <option value="-1">جنسیت را انتخاب نمایید</option>
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
                <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">متن پشتیبانی</div>
              </div>

              <div className="w-full relative">
                <label htmlFor="city" className="absolute right-4 -top-2 max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
                  شهر (اختیاری)
                </label>
                <button className="absolute left-4 -top-2 flex gap-1 items-center max-w-[90%] px-[0.37rem] text-cyan-600 bg-white text-[12px]">
                  روی نقشه انتخاب کنید
                  <SlLocationPin className="size-[0.9rem]" />
                </button>
                <select name="city" className="border border-gray-300 text-gray-400 rounded focus:outline-none focus:border-gray-400 w-full p-3" {...props.getFieldProps("city")}>
                  <option value="-1">شهر را انتخاب نمایید</option>
                  <option value="tehran">تهران</option>
                  <option value="qom">قم</option>
                </select>
                <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">متن پشتیبانی</div>
              </div>

              <div className="w-full relative" dir="rtl">
                <label htmlFor="birthdate" className="absolute right-4 -top-2 max-w-[90%] px-[0.37rem] text-neutral-900 bg-white text-[12px]">
                  تاریخ تولد (اختیاری)
                </label>
                <div className="border border-gray-300 text-gray-600 rounded focus:outline-none focus:border-gray-400 w-full p-3">
                  <DatePicker className="border-0" locale="fa" onChange={(data) => props.setFieldValue("birthdate", data)} name="birthdate" />
                </div>
                {/* <input
                  type="date"
                  id="birthdate"
                  className="border border-gray-300 text-gray-600 rounded focus:outline-none focus:border-gray-400 w-full p-3"
                  placeholder="1365/06/29"
                  {...props.getFieldProps("birthdate")}
                /> */}
                <div className="ms-4 mt-[0.1rem] text-[12px] text-orange-300 text-right">متن پشتیبانی</div>
              </div>

              <div className="w-full col-span-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-600">
                  توضيح كوتاه مقاله
                </label>
                <textarea
                  id="description"
                  rows="3"
                  className={`border ${
                    props.touched.description && Boolean(props.errors.description) && "border-red-500"
                  } border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-gray-50 focus:border-gray-50 block w-full p-2.5`}
                  {...props.getFieldProps("description")}
                />

                {props.touched.description && props.errors.description && <div className="invalid-feedback mt-1 text-sm font-light text-red-500">{props.errors.description}</div>}
              </div>
              <div className="text-center mt-4">
                {/* {isFormSubmit ? (
                    <button
                      disabled
                      type="button"
                      className="text-white bg-gradient-to-br from-green-400 to-green-600 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 inline-flex items-center"
                    >
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      تاييد ...
                    </button>
                  ) : ( */}
                <button
                  type="submit"
                  id="submit-button"
                  className="text-white bg-gradient-to-br from-green-400 to-green-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-green-200 rounded-lg text-sm px-10 py-2"
                >
                  تایید
                </button>
                {/* )} */}
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
