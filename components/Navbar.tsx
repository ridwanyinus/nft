"use client";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="pt-6 lg:pt-8 px-5   w-full  pb-14 lg:pb-20 relative z-10 flex gap-x-10 bg-green-900">
      <Link href="/">add</Link>
      <Link href="/">add</Link>
      <Link href="/">add</Link>
    </nav>
  );
};

export default Navbar;
