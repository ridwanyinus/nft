// CardComponent.tsx
"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardComponentProps {
  img: string | StaticImageData;
}

const CardComponent: React.FC<CardComponentProps> = ({ img }) => {
  return <Image src={img} alt="companies" className="object-contain w-8 h-6 sm:w-12 sm:h-6 md:w-12 md:h-7 lg:w-16 lg:h-8 xl:w-20 xl:h-9 desktop:w-full desktop:h-12" />;
};

export default CardComponent;
