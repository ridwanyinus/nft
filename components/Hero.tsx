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

        <div className="h-full relative">
          <div className="hero-bg p-8  w-[18rem] sm:w-[25rem] h-[20rem] md:w-[30rem] sm:h-[20rem] lg:w-[25rem] lg:h-[25rem] xl:w-[30rem] xl:h-[30rem] desktop:w-[35rem] desktop:h-[35rem] 2xl:w-[37.464rem] 2xl:h-[37.464rem]  lg:bg-hero-pattern bg-cover relative bg-top">
            <Image
              src={hero}
              alt="nft-character"
              className="rounded-xl lg:rounded-[30rem] w-[90%] h-[80%] lg:w-[82%] xl:w-[24.188rem]  desktop:w-[83%] 2xl:w-[80%]  lg:h-auto desktop:rounded-[37.464rem] absolute right-4 sm:right-5 md:right-6 lg:bottom-[3.2rem] lg:right-[3rem] xl:bottom-16 xl:right-16  2xl:bottom-20 desktop:right-[4rem] 2xl:right-20 "
              priority
              placeholder="blur"
            />

            <div className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 desktop:w-36 desktop:h-36 2xl:w-[11.063rem] 2xl:h-[11.063rem] bg-blue text-center text-white  leading-[118.5%] font-bold text-sm lg:text-base desktop:text-xl 2xl:text-2xl rounded-full flex justify-center items-center border border-pink absolute bottom-0 lg:bottom-8 xl:bottom-6">
              Cyber <br /> Samurai <br /> #177
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;