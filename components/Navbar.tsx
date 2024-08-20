"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { navItems } from "@/Data/data";
import Link from "next/link";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <nav className={`pt-6 lg:pt-6 lg:pb-8 px-5 lg:px-[1.9rem] xl:px-10 desktop:px-12 2xl:px-0  w-full   relative z-10  py-4  ${scroll ? "is-sticky" : ""}`}>
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

        <section className="lg:hidden bg-transparent px-5 ">
          {toggleMenu ? (
            <IoClose size={30} color="#FFFFFF" onClick={() => setToggleMenu(false)} className="relative z-10" />
          ) : (
            <AiOutlineAlignLeft size={30} onClick={() => setToggleMenu(true)} className="relative z-10  stick text-white" />
          )}

          {toggleMenu && (
            <div className="fixed top-0 right-0 h-screen  w-full  ">
              <div className=" overflow-hidden  flex flex-col justify-start bg-hero items-start w-full h-full scale-up-ver-top transition-all pt-28 pl-2 sm:pl-12 bg-dark">
                {navItems.map((item, idx: number) => (
                  <ul key={`link=${idx}`}>
                    <li className="flex px-4 py-1 last:mb-4">
                      <Link href={item.link} className="text-2xl small:text-3xl transition-all text-left leading-none text-white font-medium ">
                        {item.name}
                      </Link>
                    </li>
                  </ul>
                ))}
                <button
                  type="button"
                  className=" text-white text-[1.25rem] py-3 px-5 small:px-10 border-[0.094rem] border-pink btn rounded-lg font-normal  hover:text-cyan hover:bg-dark transition-colors ml-2 sm:ml-4 mt-2 small:mt-4">
                  Get in Touch
                </button>
              </div>
            </div>
          )}
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
