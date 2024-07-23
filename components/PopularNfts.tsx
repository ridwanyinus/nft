import React from "react";
import h1Group from "@/public/Group 47474.svg";
import Image from "next/image";
import { Nfts } from "@/Data/data";
const PopularNfts = () => {
  return (
    <main className="py-10  sm:py-14  lg:py-20  2xl:py-24 px-5 lg:px-0">
      <h1 className="text-white font-black leading-normal text-2xl sm:text-3xl md:text-[2.5rem] largesceen:text-5xl text-center">
        <span className="italic font-light text-cyan ">Most Popular</span> NFTs
      </h1>

      <section className="my-8 md:my-10 largesceen:my-16 flex flex-wrap justify-between sm:justify-center items-center  sm:gap-x-12 md:gap-x-16 lg:gap-x-20">
        <div className="relative flex flex-col items-center justify-center w-fit">
          <Image src={h1Group} alt="group-eclipse" className="relative w-[3rem] sm:w-[5rem] md:w-[6rem] lg:w-[7rem] desktop:w-auto largesceen:h-[3.438rem]" />
          <h2 className="text-white font-medium text-xs xl:text-[1.375rem] largesceen:text-3xl w-fit absolute inset-0 mx-auto text-center md:top-1 xl:top-3 desktop:top-5 largesceen:top-2 opacity-80">
            All
          </h2>
        </div>
        <h2 className="text-white font-medium text-xs  xl:text-[1.375rem] largesceen:text-3xl  opacity-80">Hape prime</h2>{" "}
        <h2 className="text-white font-medium text-xs  xl:text-[1.375rem] largesceen:text-3xl  opacity-80">Lazy Lions</h2>{" "}
        <h2 className="text-white font-medium text-xs  xl:text-[1.375rem] largesceen:text-3xl  opacity-80">Peaceful ape</h2>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 fourk:grid-cols-6 gap-y-12 gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-12 xl:gap-x-10 desktop:gap-x-14 largesceen:gap-x-28 fourk:gap-x-8">
        {Nfts.map((items, idx: number) => (
          <div key={idx} className="">
            <div className="card-bg w-fit p-3  md:p-4 lg:p-6 desktop:p-8">
              <Image
                src={items.img}
                alt="nft"
                className="max-md:object-cover w-[10rem] h-[10rem] sm:w-[21.313rem] sm:h-[12rem] md:h-[15.313rem] lg:h-[19rem] xl:h-[21.201rem] largesceen:w-[23rem] mb-4 md:mb-6 rounded-xl md:rounded-2xl"
              />

              <div className="flex  xs:space-x-4 sm:space-x-3 md:space-x-6 lg:space-x-6 xl:space-x-8 desktop:space-x-10 2xl:space-x-12 mb-1 sm:mb-2 items-center">
                <h4 className="text-white font-semibold text-[11px] md:text-xs lg:text-base xl:text-xl desktop:text-[1.375rem] largesceen:text-2xl ">{items.name}</h4>

                <div className="inline-flex items-center justify-center">
                  <Image src={items.ethImg} alt="eth" className="w-3 h-full sm:w-4 lg:w-6 desktop:w-8" />
                  <h4 className="text-white font-semibold text-[11px] md:text-xs lg:text-base xl:text-xl desktop:text-[1.375rem] largesceen:text-2xl">{items.Eth}</h4>
                </div>
              </div>

              <div className="flex">
                <Image src={items.star} alt="star" className="w-3 md:w-[1.125rem] h-auto " />
                <Image src={items.star} alt="star" className="w-3 md:w-[1.125rem] h-auto " />
                <Image src={items.star} alt="star" className="w-3 md:w-[1.125rem] h-auto " />
                <Image src={items.starBlack} alt="star" className="w-3 md:w-[1.125rem] h-auto " />
                <Image src={items.starBlack} alt="star" className="w-3 md:w-[1.125rem] h-auto " />
              </div>

              <button
                type="button"
                className="mt-4 md:mt-6 lg:mt-8 text-white text-xs md:text-sm lg:text-base max-md:rounded-md xl:text-xl py-1 md:py-2 xl:py-3   font-bold font-helvetica hover:text-cyan transition-colors btn-1 leading-[150%] w-full">
                Buy Product
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default PopularNfts;
