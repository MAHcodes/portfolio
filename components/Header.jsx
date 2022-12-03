import Link from "next/link";
import Logo from "./icons/Logo";

const Header = () => (
  <header className="container py-6 rounded-b-lg bg-crust">
    <div className="px-2">
      <Link href="/">
        <Logo className="group" fill="fill-text group-hover:fill-lavender" stroke="stroke-text group-hover:stroke-lavender" />
      </Link>
    </div>
  </header>
);

export default Header;
