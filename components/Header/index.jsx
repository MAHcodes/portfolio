import Branding from "./Branding";
import List from "./List";
import GitHub from "../icons/GitHub";

const navLinks = [
  {
    href: "#projects",
    text: "Projects",
  },
  {
    href: "#skills",
    text: "Skills",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

const icons = [
  {
    href: "https://github.com/mhmdali102",
    Icon: GitHub,
  },
];

const Header = () => (
  <header className="container rounded-b-lg bg-crust">
    <div className="px-2 flex items-center justify-between gap-4">
      <Branding />
      <List items={navLinks} />
      <List items={icons} />
    </div>
  </header>
);

export default Header;
