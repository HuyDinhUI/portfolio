"use client";

import { useActiveSection } from "@/hooks/useScrollActiveSection";
import { NAVBAR_ITEMS } from "@/mock/navbar-item";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const activeSection = useActiveSection(NAVBAR_ITEMS.map((i) => i.id));

  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [pill, setPill] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    if (!activeSection) return;

    const el = itemRefs.current[activeSection];
    const container = navRef.current;

    if (!el || !container) return;

    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setPill({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      opacity: 1,
    });
  }, [activeSection]);

  return (
    <header
      className={`px-40 py-4 sticky top-0 z-999 transition-transform duration-300 bg-black`}
    >
      <nav ref={navRef} className="flex justify-center text-md gap-10 relative">
        <span
          className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full
            bg-white/20 backdrop-blur
            transition-all duration-300 ease-out"
          style={{
            left: pill.left,
            width: pill.width,
            opacity: pill.opacity,
          }}
        />
        {NAVBAR_ITEMS.map((i) => (
          <Link
            key={i.id}
            href={i.href}
            className={`px-3 py-1 rounded-full relative font-bold transition-colors ${activeSection === i.id ? "text-white" : "text-gray-be"}`}
            ref={(el) => {
              itemRefs.current[i.id] = el;
            }}
          >
            {i.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
