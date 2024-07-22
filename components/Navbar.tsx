"use client";
import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { navItems } from "@/Data/data";
import Link from "next/link";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="pt-6 lg:pt-8 px-5   w-full  pb-14 lg:pb-20 relative z-10 flex gap-x-10 bg-green-900">
      <Link href="/" className="desktop:flex-1  text-[1.75rem] font-bold leading-[118.5%] logo relative z-[999]">
        KNFT.
      </Link>
      <Link href="/">add</Link>
      <Link href="/">add</Link>
      <Link href="/">add</Link>
    </nav>
  );
};

export default Navbar;
