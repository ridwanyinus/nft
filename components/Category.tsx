"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import image1 from "@/public/category1.jpeg";
import image2 from "@/public/category2.jpeg";
import image3 from "@/public/category3.jpeg";
import image4 from "@/public/category4.jpeg";
const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <main data-aos="fade-up" data-aos-delay="0" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="400" className="py-5  sm:py-8  lg:py-10  xl:py-16 px-5">
      <h1 className="font-black text-white text-center  text-2xl sm:text-3xl xl:text-[2.5rem]  largesceen:text-5xl mb-2 sm:mb-4 xl:mb-8">
        <span className="text-cyan font-extralight italic inline-block">Browse by</span> Category
      </h1>
      <p className="opacity-80 text-white text-xs mx-auto text-center lg:text-sm  xl:text-lg desktop:text-xl largesceen:text-2xl w-[17rem] xs:w-[20rem] lg:w-[23rem] xl:w-[30rem] desktop:w-[33.75rem] largesceen:w-[40rem]">
        Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
      </p>

      <section className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8 mt-8 xl:mt-12 place-items-center">
        <Image priority src={image1} alt="Category" className="h-[9rem] md:h-[10rem] lg:h-[15rem] xl:h-[20rem] 2xl:h-[25.125rem] rounded-lg sm:rounded-2xl bg-cover " />
        <Image priority src={image2} alt="Category" className="col-span-2 h-[9rem] md:h-[10rem] lg:h-[15rem] xl:h-[20rem] 2xl:h-[25.125rem] rounded-lg sm:rounded-2xl bg-cover" />
        <Image priority src={image3} alt="Category" className="h-[9rem] md:h-[10rem] lg:h-[15rem] xl:h-[20rem] 2xl:h-[25.125rem] rounded-lg sm:rounded-2xl bg-cover col-span-2" />
        <Image priority src={image4} alt="Category" className="h-[9rem] md:h-[10rem] lg:h-[15rem] xl:h-[20rem] 2xl:h-[25.125rem] rounded-lg sm:rounded-2xl bg-cover " />
      </section>

      <button
        type="button"
        className=" text-white text-xs sm:text-sm md:text-base xl:text-xl px-4 sm:px-6 largesceen:text-2xl py-2 xl:py-3 lg:px-8 desktop:px-10 font-bold font-helvetica hover:text-cyan transition-colors btn-2 leading-[150%] mt-6 sm:mt-8 lg:mt-12 mx-auto block xl:mt-14 largesceen:mt-16">
        Explore NFTs Category
      </button>
    </main>
  );
};

export default Category;
