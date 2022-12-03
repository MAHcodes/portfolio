import Branding from "./Branding";
import List from "./List";
import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import { useState } from "react";

const navLinks = [
  {
    href: "#hero",
    text: "Home",
  },
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
    href: "https://github.com/MAHcodes",
    Icon: GitHub,
  },
  {
    href: "https://www.linkedin.com/in/mah-codes-66b0671b7/",
    Icon: LinkedIn,
  },
];

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false);

  return (
    <header className="container rounded-b-lg bg-crust fixed z-10 top-0 left-0 right-0 mx-auto">
      <div className="flex items-center justify-between gap-4 flex-col md:flex-row">
        <Branding
          setNavVisibility={setNavVisibility}
          navVisibility={navVisibility}
        />
        <List items={navLinks} visible={navVisibility} setVisible={setNavVisibility} col />
        <List items={icons} visible={navVisibility} setVisible={setNavVisibility} />
      </div>
    </header>
  );
};

export default Header;
