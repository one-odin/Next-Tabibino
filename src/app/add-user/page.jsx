"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "@/components/modules/Form/TextInput/TextInput";
import SelectInput from "@/components/modules/Form/SelectInput/SelectInput";
import DateInput from "@/components/modules/Form/DateInput/DateInput";
import MobileInput from "@/components/modules/Form/MobileInput/MobileInput";
import { SlLocationPin } from "react-icons/sl";
import Button from "@/components/modules/Button/Button";

export default function AddUser() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const addPostHandler = async (data) => {
    setIsFormSubmit(true);
    console.log(data);
    // submit data here
  };

  return (
    <div className="container mx-auto text-center mt-20 pb-5">
      <form onSubmit={handleSubmit(addPostHandler)} className="grid grid-cols-2 gap-x-4 gap-y-8 mx-auto px-3 mt-12 lg:w-3/4 w-full">
        <TextInput label="نام (اختیاری)" id="first_name" register={register} errors={errors} placeholder="نام را وارد کنید" />

        <TextInput label="نام خانوادگی (اختیاری)" id="last_name" register={register} errors={false} placeholder="نام خانوادگی را وارد کنید" />

        <TextInput label="کد ملی (اختیاری)" id="national_code" register={register} errors={false} placeholder="کد ملی را وارد کنید">
          <input type="checkbox" id="is_foreign" {...register("is_foreign")} onChange={(e) => setValue("is_foreign", e.target.checked ? 1 : 0)} className="cursor-pointer" />
          <label className="text-neutral-900" htmlFor="is_foreign">
            اتباع خارجی
          </label>
        </TextInput>

        <MobileInput label="شماره موبایل *" register={register} errors={errors} />

        <div className="lg:col-span-2 lg:w-1/2">
          <SelectInput
            label="جنسیت *"
            id="gender"
            register={register}
            options={[
              { value: "", label: "جنسیت را انتخاب کنید" },
              { value: "male", label: "مرد" },
              { value: "female", label: "زن" },
            ]}
            errors={errors}
          />
        </div>

        <SelectInput
          label="شهر (اختیاری)"
          id="city"
          register={register}
          options={[
            { value: "", label: "شهر را انتخاب کنید" },
            { value: "tehran", label: "تهران" },
            { value: "qom", label: "قم" },
          ]}
          errors={errors}
        >
          <button className="text-cyan-500 flex">
            روی نقشه انتخاب کنید
            <SlLocationPin className="size-[0.9rem]" />
          </button>
        </SelectInput>

        <DateInput label="تاریخ تولد (اختیاری)" name="birthdate" control={control} errors={errors} />

        <div className="lg:col-span-2">
          <TextInput label="آدرس (اختیاری)" id="address" register={register} errors={errors} placeholder="آدرس محل سکونت خود را وارد کنید">
            <button className="text-cyan-500 flex">
              روی نقشه انتخاب کنید
              <SlLocationPin className="size-[0.9rem]" />
            </button>
          </TextInput>
        </div>

        <div className="text-left mt-4 col-span-2">
          <Button type="submit" className="w-full lg:w-2/5">
            ذخیره
          </Button>
        </div>
      </form>
    </div>
  );
}
