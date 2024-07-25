import { contacts } from "@/Data/data";
import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

const Footer = () => {
  return (
    <footer className="py-5 sm:py-8  lg:py-10  xl:py-16 largesceen:py-20 px-5">
      <section>
        <div className="sm:grid sm:grid-cols-3 sm:place-items-center  sm:place-content-center">
          {contacts.map((item, idx: number) => (
            <div key={idx} className="max-sm:flex items-center gap-x-4 mb-2">
              <div className="bg-[#1A124F] p-2 lg:p-3 xl:p-4 rounded-full w-fit sm:mx-auto sm:mb-4">
                <Link href="/" className="">
                  <item.image className="text-white hover:text-gray-500 text-xl lg:text-2xl xl:text-3xl largesceen:text-4xl" />
                </Link>
              </div>
              <p className="opacity-80 text-white text-xs lg:text-sm  xl:text-lg desktop:text-xl largesceen:text-2xl">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
