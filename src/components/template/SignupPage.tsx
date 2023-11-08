"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";
import React from "react";
import { CustomInputType } from "src/types";
import { signupSchema } from "@/app/validations";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signupSchema>({ resolver: zodResolver(signupSchema) });

  const onSubmit: SubmitHandler<signupSchema> = async (data) => {
    const { email, password } = data;
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
    const backData = await res.json();
    console.log(backData);
  };

  return (
    <div className="w-1/2 md:w-full h-[calc(100vh-117px)] mx-auto flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-1/2 md:w-full gap-7 p-5 border-solid border-2 border-white-700 rounded-lg shadow-lg text-[1rem]"
      >
        <div>
          <label htmlFor="email">ایمیل</label>
          <div>
            <CustomInput type="text" id="email" {...register("email")} />
            <p className="text-xs italic text-red-500 my-2 h-8 border-transparent">
              {errors.email && errors.email?.message}
            </p>
          </div>
        </div>

        <div>
          <label htmlFor="password">رمز عبور</label>
          <div>
            <CustomInput
              id="password"
              type="password"
              {...register("password")}
            />
            <p className="text-xs italic text-red-500 my-2 h-8 border-transparent">
              {errors.password && errors.password?.message}
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="hover:bg-gray-600 bg-gray-700 p-2 text-white rounded-md w-1/2 m-auto"
        >
          {isSubmitting ? "loading" : "submit"}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;

const CustomInput = forwardRef<HTMLInputElement, CustomInputType>(
  function CustomInput(props, ref) {
    return (
      <input
        className="w-full py-2 px-2 bg-gray-100 border-dotted border-2 border-black"
        {...props}
        ref={ref}
      />
    );
  }
);
