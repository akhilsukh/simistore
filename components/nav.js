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
      <ul className="flex justify-between items-center p-4 px-12 bg-blue-900">
        <li>
          <Link href="/">
            <a className="text-lg font-semibold text-white no-underline">
              simistore
            </a>
          </Link>
        </li>
        <ul className="flex justify-around space-x-4">
          {links.map(({ href, label, icon }) => (
            <li key={`${href}${label}${icon}`}>
              <Link href={href}>
                <a className="text-gray-100 font-semibold hover:underline py-2 px-4">
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
