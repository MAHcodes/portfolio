import Link from "next/link";
import Logo from "../icons/Logo";

const Branding = ({setNavVisibility}) => {
  return <Link href="/" className="flex items-center justify-between w-full md:w-fit">
    <Logo
      className="group my-5"
      fill="fill-text group-hover:fill-lavender"
      stroke="stroke-text group-hover:stroke-lavender"
    />
    <h2 className="block md:hidden" onClick={() => setNavVisibility(currentValue => !currentValue)}>hello</h2>
  </Link>
};

export default Branding;
