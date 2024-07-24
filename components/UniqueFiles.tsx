import React from "react";
import Image from "next/image";
import { Unique } from "@/Data/data";

const UniqueFiles = () => {
  return (
    <main className="py-5  sm:py-8  lg:py-10  2xl:py-16 px-5 ">
      <p className="text-white font-bold text-center text-opacity-[0.8] unique-bg w-fit py-2 px-4 largesceen:px-6 mx-auto text-xs md:text-sm  xl:text-xl largesceen:text-2xl">UNIQUE FILES</p>

      <h1 className="mt-4 md:mt-6 xl:mt-8 largesceen:mt-12 font-black text-white text-center text-xl sm:text-2xl md:text-3xl xl:text-[2.5rem]  largesceen:text-5xl">
        How to <span className="text-cyan font-extralight italic inline-block">Create & Sell</span> <br className="unique-h1 hidden" /> Your NFT Files.
      </h1>

        <section className="mt-8 lg:mt-12 largesceen:mt-16">
        <div className="grid sm:grid-cols-2 w-full sm:gap-x-4 lg:gap-x-10 desktop:gap-x-20 2xl:gap-x-0 gap-y-4 sm:gap-y-0 md:gap-y-6 lg:gap-y-0 desktop:gap-y-8 largesceen:gap-y-10  place-items-center">
          {Unique.map((item, idx: number) => (
            <div
              key={idx}
                className="bg-unique-bg bg-no-repeat  bg-contain flex flex-col  h-[6rem] sm:h-[8rem] md:h-[9rem] lg:h-[13.438rem] largesceen:h-full largesceen:max-w-[50rem]  px-4 lg:px-6 xl:px-8 desktop:px-10 largesceen:px-12 pt-4 md:pt-8  lg:pt-10 xl:pt-12  desktop:pt-12 largesceen:py-16 relative">
              <h1 className="text-white font-semibold text-sm sm:text-base lg:text-lg  xl:text-[1.375rem] largesceen:text-[1.7rem] mb-1 md:mb-4 lg:mb-6 xl:mb-9 largesceen:mb-10 w-fit  largesceen:w-full">{item.title}</h1>

              <p className="opacity-80 text-white text-xs   xl:text-lg desktop:text-xl largesceen:text-2xl w-[16rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] desktop:w-[33.75rem] largesceen:w-[40rem]">{item.text}</p>

              <Image src={item.Img} alt={item.title} className="w-8 md:w-10 lg:w-12 xl:w-16 desktop:w-[4rem]  largesceen:w-[4.5rem] absolute top-0 right-6 sm:right-4 md:right-4 lg:right-8 xl:right-6 desktop:right-8 largesceen:right-[3rem]" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default UniqueFiles;
