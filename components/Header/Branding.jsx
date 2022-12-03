import Link from "next/link";
import Logo from "../icons/Logo";
import HamburgerMenu from "./HamburgerMenu";

const Branding = ({ navVisibility, setNavVisibility }) => {
  return (
    <Link
      href="/"
      className="flex items-center justify-between w-full md:w-fit"
    >
      <Logo
        className="group my-5"
        fill="fill-text group-hover:fill-lavender"
        stroke="stroke-text group-hover:stroke-lavender"
      />
      <HamburgerMenu
        active={navVisibility}
        onClick={() => setNavVisibility((currentValue) => !currentValue)}
      />
    </Link>
  );
};

export default Branding;
