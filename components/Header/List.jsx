import Link from "next/link";

const List = ({ items }) => (
  <ul className="flex items-center">
    {items.map((item) => (
      <li
        key={item.key}
        className="border-b-transparent hover:border-b-current border-b-2 hover:text-lavender text-text"
      >
        {item.Icon ? (
          <a href={item.href} className="py-6 px-4 block font-bold">
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
