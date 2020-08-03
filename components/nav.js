import Link from "next/link";

const links = [
  {
    href: "/products/masks",
    label: "Masks",
    icon: "./images/masks.svg",
  },
  { href: "/products/tops", label: "Tops", icon: "../images/dress.svg" },
  { href: "/products/bags", label: "Bags", icon: "../images/shopping-bag.svg" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-6 bg-gray-200">
        <li>
          <Link href="/">
            <a className="text-lg font-semibold text-blue-700 no-underline">
              SimiStore
            </a>
          </Link>
        </li>
        <ul className="flex justify-around space-x-4">
          {links.map(({ href, label, icon }) => (
            <li key={`${href}${label}${icon}`}>
              <Link href={href}>
                <a className="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent rounded">
                  {/* <img width="8" src={icon}></img> */}
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
