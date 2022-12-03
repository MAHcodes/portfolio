import Link from "next/link";
import Logo from "./icons/Logo";

const Header = () => (
  <header className="container py-4 rounded-b-lg bg-surface1">
    <Link href="/">
      <Logo className="select-none" />
    </Link>
  </header>
);

export default Header;
