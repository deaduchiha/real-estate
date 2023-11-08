"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";
import React from "react";
import { CustomInputType } from "src/types";
import { signupSchema } from "@/app/validations";
import { PulseLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
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
    // toast.success
    const backData = await res.json();

    if (backData.status === 200) {
      router.push("/signin");
    }
    if (backData.status !== 200) {
      toast.error(backData.error, {
        duration: 4000,
        position: "top-left",
        style: {
          color: "#fff",
          background: "#A50203",
        },
      });
    }
  };

  return (
    <div className="w-1/2 md:w-5/6 sm:w-full h-[calc(100vh-117px)] mx-auto flex items-center justify-center">
      <Toaster />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-5/6 sm:w-full  gap-7 p-5 border-solid border-2 border-white-700 rounded-lg shadow-lg text-[1rem]"
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

        {isSubmitting ? (
          <PulseLoader color="#0369a1" size={10} className="mx-auto" />
        ) : (
          <button
            type="submit"
            className="hover:bg-gray-600 bg-gray-700 h-10 text-white rounded-md w-1/2 m-auto flex justify-center items-center"
          >
            submit
          </button>
        )}
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
