import { companyImg } from "@/Data/data";
import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <main className="py-5 sm:py-8  lg:py-10  xl:py-16 largesceen:py-20 px-5">
      <div className="grid grid-cols-6 place-items-center ">
        {companyImg.map((item, idx: number) => (
          <div key={idx} className="">
            <Image src={item.img} alt="companies" className="object-contain  w-8 h-6 sm:w-12 sm:h-6 md:w-12 md:h-7 lg:w-16 lg:h-8  xl:w-20 xl:h-9 desktop:w-full desktop:h-12" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Companies;
