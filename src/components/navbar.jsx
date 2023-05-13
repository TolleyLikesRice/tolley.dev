import Link from "next/link";
import React, { useState } from "react";
import ScrollSpy from 'react-scrollspy-navigation'

const MENU_LIST = [
  { text: "Projects", href: "#projects" },
];

const NavItem = React.forwardRef(function NavItem({ text, href }, ref) {
  return (
    <Link ref={ref} className="navItem w-auto h-9 rounded-lg flex justify-center /*hover:bg-slate-700/30*/" href={href}>
      <span className="text-gray-300 text-center px-4 m-auto hover:text-white">{text}</span>
    </Link>
  )
});

export default function Navbar({hide}) {

  let hidden = "";
  if (!hide) hidden = " navbar-shown";

  return (
    <div id="navbar" className={`fixed top-0 left-0 right-0 h-14 bg-slate-800/50 backdrop-filter backdrop-blur navbar${hidden}`}>
      <div className="h-full flex items-center justify-center space-x-4">
        <ScrollSpy duration={100}  offsetTop={150} className="navItem-active">
          {MENU_LIST.map((item) => (
            <NavItem key={item.text} text={item.text} href={item.href} ref={React.createRef()} />
          ))}
        </ScrollSpy>
      </div>
      {/* <div className="h-full fixed top-0 right-10 flex items-center justify-around">
        {SOCIAL_LIST.map((item) => (
          <SocialLink key={item.text} src={item.src} alt={item.alt} href={item.href} />
        ))}
      </div> */}
    </div>
  );
};
