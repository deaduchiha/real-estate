import Link from "next/link";
import { BiLogIn } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-sky-900 rounded-lg p-3 mt-3 text-[#fff]">
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

      <div className="bg-[#f0f9ff] p-2 text-sky-900 rounded-lg">
        <Link href={"/signin"} className="flex gap-2 items-center">
          <BiLogIn size="25px" />
          ورود
        </Link>
      </div>
    </header>
  );
};

export default Header;
