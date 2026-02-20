"use client"

import { NAVBAR_ITEMS } from "@/mock/navbar-item";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="my-10 text-white px-10">
      <div className="flex justify-between">
        {`Hi, I'm Huy`}
        <nav className="flex gap-5">
          {NAVBAR_ITEMS.map((i) => (
            <ul key={i.id}>
              <Link
                href={i.href}
                className={`px-3 py-1 rounded-full relative`}
              >
                {i.name}
              </Link>
            </ul>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
