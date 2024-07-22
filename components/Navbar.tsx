"use client";
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex gap-x-4 *:text-green-900 bg-slate-600">
      <Link href="/">add</Link>
      <Link href="/">add</Link>
      <Link href="/">add</Link>
    </nav>
  );
};

export default Navbar;
