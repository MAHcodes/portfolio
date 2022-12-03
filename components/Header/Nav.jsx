import Link from "next/link";

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

const Nav = () => (
  <nav>
    <ul className="flex items-center">
      {navLinks.map((link) => (
        <li
          key={link.href}
          className="border-b-transparent hover:border-b-current border-b-2 hover:text-lavender"
        >
          <Link href={link.href} className="py-6 px-4 block">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
