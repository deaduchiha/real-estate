"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";

const Header = () => {
  const { data } = useSession();
  console.log(data);

  return (
    <header className="flex justify-between items-center bg-sky-900 rounded-lg p-3 mt-3 text-[#fff] relative z-1">
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/residenetials"}>آگهی ها</Link>
          </li>
        </ul>
      </div>

      {data ? (
        <Link href={"/dashboard"}>
          <div className="flex justify-between items-center gap-2 cursor-pointer">
            <span>داشبورد</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </Link>
      ) : (
        <div className="bg-[#f0f9ff] p-2 text-sky-900 rounded-lg">
          <Link href={"/signin"} className="flex gap-2 items-center">
            <BiLogIn size="25px" />
            ورود
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
