import React from "react";
import h1Group from "@/public/Group 47474.svg";
import Image from "next/image";
const PopularNfts = () => {
  return (
    <main className="py-10  sm:py-14  lg:py-20  2xl:py-24 px-5 lg:px-0">
      <h1 className="text-white font-black leading-normal text-2xl sm:text-3xl md:text-[2.5rem] largesceen:text-5xl text-center">
        <span className="italic font-light text-cyan ">Most Popular</span> NFTs
      </h1>

      <section className="mt-8 md:mt-12 largesceen:mt-16 flex flex-wrap justify-between sm:justify-center items-center  sm:gap-x-12 md:gap-x-16 lg:gap-x-20">
        <div className="relative flex flex-col items-center justify-center w-fit">
          <Image src={h1Group} alt="group-eclipse" className="relative w-[3rem] sm:w-[5rem] md:w-[6rem] lg:w-[7rem] desktop:w-auto largesceen:h-[3.438rem]" />
          <h2 className="text-white font-medium text-xs xl:text-[1.375rem] largesceen:text-3xl w-fit absolute inset-0 mx-auto text-center md:top-1 xl:top-3 largesceen:top-2 opacity-80">All</h2>
        </div>
        <h2 className="text-white font-medium text-xs  xl:text-[1.375rem] largesceen:text-3xl  opacity-80">Hape prime</h2>{" "}
        <h2 className="text-white font-medium text-xs  xl:text-[1.375rem] largesceen:text-3xl  opacity-80">Lazy Lions</h2>{" "}
        <h2 className="text-white font-medium text-xs  xl:text-[1.375rem] largesceen:text-3xl  opacity-80">Peaceful ape</h2>
      </section>
    </main>
  );
};

export default PopularNfts;
