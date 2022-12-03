import Link from "next/link";

const List = ({ items, col, visible }) => (
  <ul className={`${col ? "flex-col md:flex-row" : null} ${visible ? "flex" : "hidden md:flex"} items-center`}>
    {items.map((item, idx) => (
      <li
        key={item.href}
        className={`group border-b-transparent border-b-2 hover:text-lavender text-text ${col ? null : "hover:border-b-current" } md:hover:border-b-current translate-x-8 opacity-0 animate-fadeIn`}
        style={{animationDelay: `${idx * 100}ms`}}
      >
        {item.Icon ? (
          <a href={item.href} className="py-6 px-4 block font-bold" rel="noreferrer noopener" target="_blank">
            <item.Icon fill="fill-text group-hover:fill-lavender" />
          </a>
        ) : item.text ? (
          <Link href={item.href} className="py-6 px-4 block font-bold">
            {item.text}
          </Link>
        ) : null}
      </li>
    ))}
  </ul>
);

export default List;
