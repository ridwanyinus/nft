import { contacts, social } from "@/Data/data";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="py-5 sm:pt-8  lg:pt-10  xl:pt-16 largesceen:pt-20 px-5">
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

        <div className="flex justify-center gap-x-4 mt-12 desktop:mt-20 largesceen:mt-28">
          {social.map((item, idx: number) => (
            <div key={idx} className="bg-[#1A124F] p-2 lg:p-3 xl:p-4 rounded-full w-fit  sm:mb-4">
              <Link href="/" className="">
                <item.image className="text-white hover:text-gray-500 text-xl lg:text-2xl xl:text-3xl largesceen:text-4xl hover:rotate-12" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="line my-8 lg:my-12 desktop:my-16 largesceen:mt-20 "></div>
      <p className="opacity-80 text-white text-xs lg:text-sm  xl:text-base fourk:text-xl text-center">
        Copyright © 2024 Nazmul Shanto. All Rights Reserved | Designed by <Link href="https://ridwanyinus.is-a.dev">Ridwan</Link>
      </p>
    </footer>
  );
};

export default Footer;
