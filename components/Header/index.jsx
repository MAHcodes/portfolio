import Branding from "./Branding";
import List from "./List";
import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import Slack from "../icons/Slack";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

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
    href: "https://github.com/MAHcodes",
    Icon: GitHub,
  },
  {
    href: "https://www.linkedin.com/in/mah-codes-66b0671b7/",
    Icon: LinkedIn,
  },
  {
    href: "https://www",
    Icon: Slack,
  },
];

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false);
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  return (
    <header className="container rounded-b-lg bg-crust fixed top-0 left-0 right-0 mx-auto">
      <div className="px-2 flex items-center justify-between gap-4 flex-col md:flex-row">
        <Branding setNavVisibility={setNavVisibility} />
        <List items={navLinks} visible={navVisibility} col />
        <List items={icons} visible={navVisibility} />
      </div>
    </header>
  );
};

export default Header;
