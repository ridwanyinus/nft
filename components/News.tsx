import React from "react";
import Image from "next/image";
import newspaper from "@/public/newspaper.png";
import { NewsInfo } from "@/Data/data";
const News = () => {
  return (
    <main className="py-8  lg:py-10  xl:py-16 largesceen:py-20 px-5">
      <section className="md:grid grid-cols-3 place-items-center gap-x-10">
        <div>
          <Image src={newspaper} alt="newspaper" className="w-10 xl:w-auto" />
          <h1 className="font-black text-white  text-2xl sm:text-3xl xl:text-[2.5rem]  largesceen:text-5xl mt-4 lg:mt-8 largesceen:mt-12 mb-4 lg:mb-6 largesceen:mb-8 lg:w-[18rem] xl:w-[22rem] desktop:w-[25.375rem] news-h1">
            <span className="text-cyan sm:text-2xl lg:text-3xl font-extralight italic leading-normal inline-block">Trending</span> Crypto Market News
          </h1>
          <p className="opacity-80 text-white text-xs lg:text-sm  xl:text-lg desktop:text-xl largesceen:text-2xl w-[17rem] md:w-[11rem] lg:w-[13rem] xl:w-[20rem] desktop:w-[23rem] largesceen:w-[35rem]">
            Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
          </p>
          <button
            type="button"
            className=" text-white text-sm sm:text-base lg:text-base px-5  desktop:text-xl py-2 sm:py-3 lg:px-8 desktop:px-10 font-bold font-helvetica hover:text-cyan transition-colors btn-1 leading-[150%] mt-6 lg:mt-12 ">
            Explore NFTs
          </button>
        </div>

        <div className="md:col-span-2 flex sm:flex-row flex-col gap-x-4  xl:gap-x-8 largesceen:gap-x-16 justify-center items-center md:justify-end mt-6 md:mt-0">
          {NewsInfo.map((item, idx: number) => (
            <div key={idx}>
              <Image
                src={item.img}
                alt="news image"
                className="rounded-lg sm:rounded-2xl desktop:rounded-3xl object-cover w-[15rem] h-[8rem] lg:w-[18rem] lg:h-[10rem] xl:w-[23rem] xl:h-[13rem] desktop:w-[25rem] desktop:h-[15rem] largesceen:w-[27.813rem] largesceen:h-[17.813rem] fourk:h-[70%] fourk:w-full opacity-100 hover:opacity-90 transition-all mt-6 sm:mt-0"
              />
              <p className="opacity-80 text-white text-xs lg:text-sm  xl:text-lg desktop:text-xl largesceen:text-2xl mt-4 w-fit">{item.date}</p>
              <h1 className="text-white font-semibold lg:text-2xl xl:text-[1.75rem] largesceen:text-3xl w-[11rem] lg:w-full xl:w-[22rem] desktop:w-[24rem] largesceen:w-[27.813rem] mt-4 largesceen:mt-6">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default News;
