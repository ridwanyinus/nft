import { companyImg } from "@/Data/data";
import React from "react";
import InfiniteMovingCards from "@/components/InfinityMovingCard";

const Companies = () => {
  return (
    <main className="py-5 sm:py-8 lg:py-10 xl:py-16 largesceen:py-20 px-5">
      <div className="flex place-items-center">
        <InfiniteMovingCards items={companyImg} />
      </div>
    </main>
  );
};

export default Companies;
