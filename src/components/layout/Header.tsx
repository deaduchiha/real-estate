import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <ul>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/residenetials"}>آگهی ها</Link>
          </li>
        </ul>
      </div>

      <div>
        <Link href={"/signin"}>ورود</Link>
      </div>
    </header>
  );
};

export default Header;
