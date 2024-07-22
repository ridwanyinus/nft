"use client";
import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { navItems } from "@/Data/data";
import Link from "next/link";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="pt-6 lg:pt-8 px-5 md:px-0  w-full  pb-14 lg:pb-20 relative z-10">
      <section className="flex justify-between items-center">
        <Link href="/" className="desktop:flex-1  text-[1.75rem] font-bold leading-[118.5%] logo relative z-[999]">
          KNFT.
        </Link>

        <div className="flex justify-center items-center gap-x-10 desktop:gap-x-12 2xl:gap-x-16 max-lg:hidden desktop:flex-[1.5] ">
          {navItems.map((navItems, idx: number) => (
            <ul key={idx}>
              <li>
                <Link href={navItems.link} className="flex text-sm xl:text-base 2xl:text-xl hover:text-opacity-100 text-white text-opacity-70  text-right transition-colors">
                  {navItems.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>

        <div className="desktop:flex-1 text-right">
          <button
            type="button"
            className="max-lg:hidden text-white text-lg desktop:text-xl py-3 px-8 desktop:px-10 border-[0.094rem] border-pink btn rounded-lg font-normal  hover:text-cyan hover:bg-dark transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
