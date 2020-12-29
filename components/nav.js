import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home",
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-evenly items-center p-4 px-12 bg-gray-800 ">
        {/* <li>
          <Link href="/">
            <a className="text-gray-100 font-semibold no-underline">
              simistore
            </a>
          </Link>
        </li> */}
        {/* <ul className="flex justify-around"> */}
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href}>
              <a className="text-gray-200 hover:text-gray-300 font-semibold hover:underline py-2 px-8">
                {label}
              </a>
            </Link>
          </li>
        ))}
        {/* </ul> */}
      </ul>
    </nav>
  );
}
