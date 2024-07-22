import React from "react";
import Image from "next/image";
import hero from "@/public/image 4.png";
import imageSix from "@/public/image 6.png";
const Hero = () => {
  return (
    <main className="py-5  md:py-8 lg:py-4 2xl:py-10 px-5 md:px-0">
      <section className="flex justify-between items-center flex-col lg:flex-row">
        <div className="relative">
          <h1 className=" text-center lg:text-start  text-[2.1rem] sm:text-[3rem] md:text-[3.5rem]  xl:text-[3.484rem] largesceen:text-7xl text-white leading-[130%]  xl:min-w-[39.5rem] font-black mb-4 xs:mb-6 sm:mb-8 md:mb-12">
            Buy, Create & <br /> Sell <span className="inline-block leading-normal font-light text-cyan italic">Unique NFTs </span> File.
          </h1>

          <p className="text-white text-center lg:text-start leading-[130%] text-base sm:text-lg md:text-xl text-opacity-[0.8] w-[85%] sm:w-[25rem] md:w-[20rem]  lg:w-[25rem] xl:w-[30.934rem] mb-12 mx-auto lg:mx-0">
            NFTs are used for digital art and collectibles, GameFi projects, metaverses, and more.
          </p>

          <Image src={imageSix} alt="icon" className="absolute w-[3rem]  sm:w-[4rem] xl:w-auto  md:right-0 lg:right-0 xl:right-24 bottom-0 sm:bottom-10" />

          <button type="button" className="max-lg:hidden text-white text-lg desktop:text-xl py-3 px-8 desktop:px-10 font-bold font-helvetica hover:text-cyan transition-colors btn-1 leading-[150%]">
            Explore NFTs
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
