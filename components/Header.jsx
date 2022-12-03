import Link from "next/link";
import Logo from "./icons/Logo";

const Header = () => (
  <header className="container py-6 rounded-b-lg bg-base">
    <div className="px-2">
      <Link href="/">
        <Logo fill="fill-text" stroke="stroke-text" />
      </Link>
    </div>
  </header>
);

export default Header;
