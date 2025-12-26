"use client";

import { SectionContext } from "@/contexts/sectionContext";
import Link from "next/link";
import { useContext } from "react";

const NAVBAR_ITEMS = [
  {
    id: "about",
    name: "About",
    href: "#about",
  },
  {
    id: "skill",
    name: "Skill",
    href: "#skill",
  },
  {
    id: "project",
    name: "Project",
    href: "#project",
  },
  {
    id: "contact",
    name: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  
  const section = useContext(SectionContext)

  return (
    <header className="px-40 py-4 fixed right-0 left-0 z-999 bg-black">
      <nav className="flex justify-center text-md gap-10">
        {NAVBAR_ITEMS.map((i) => (
          <Link
            onClick={() => section?.setSection(i.id)}
            key={i.id}
            href={i.href}
            className={`px-3 py-1 rounded-full relative font-bold ${section?.section === i.id ? 'text-white' : 'text-gray-be'}`}
          >
            {i.name}
            <span className={`absolute left-0 w-0 ${section?.section === i.id && 'w-full'} bottom-0 h-0.5 bg-white transition-all`}></span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
