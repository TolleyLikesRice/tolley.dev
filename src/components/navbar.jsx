import Link from "next/link";
import React, { useState } from "react";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

function NavItem({ text, href, active }) {
  return (
    <Link className="w-20 h-10 bg-slate-700 rounded-lg text-center justify-center" href={href}>
      <span className="text-center align-middle">{text}</span>
    </Link>
  )
}

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-slate-900">
      <div className="h-full flex items-center justify-around">
        {MENU_LIST.map((item) => (
          <NavItem key={item} text={item.text} href={item.href} />
        ))}
      </div>
      <div className="h-full fixed top-0 right-0 flex items-center justify-around"></div>
    </div>
  );
};
