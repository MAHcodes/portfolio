import Link from "next/link";
import Logo from "../icons/Logo";

const Branding = () => (
  <Link href="/">
    <Logo
      className="group"
      fill="fill-text group-hover:fill-lavender"
      stroke="stroke-text group-hover:stroke-lavender"
    />
  </Link>
);

export default Branding;
