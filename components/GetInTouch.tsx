import React from "react";

const GetInTouch = () => {
  return (
    <main className="py-5 sm:py-8  lg:py-10  xl:py-16 largesceen:py-20 px-5 flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl  xl:text-5xl desktop:text-6xl 2xl:text-7xl text-white text-center  relative">
        Get in Touch <span className="font-bold xl:text-5xl desktop:text-6xl 2xl:text-7xl text-white text-center get absolute mx-auto inset-0">Get in Touch</span>
      </h1>
      <p className="opacity-80 text-white text-xs mx-auto text-center lg:text-sm  xl:text-lg desktop:text-xl largesceen:text-2xl w-[17rem] xs:w-[20rem] lg:w-[23rem] xl:w-[30rem] desktop:w-[33rem] largesceen:w-[40rem] mt-4 xl:mt-6 desktop:mt-8">
        Set a secondary sales fee and add social links, a description, profile and banner images, and a description.
      </p>

      <div className="w-[18rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem] desktop:w-[35rem] largesceen:w-[44.75rem] mt-4 sm:mt-6 md:mt-8 desktop:mt-12">
        <input
          type="email"
          placeholder="Enter your email address"
          className="placeholder:text-[#FFFFFF8F] outline-none bg-[#0D0D2D] w-full text-white text-xs sm:text-sm lg:text-base largesceen:placeholder:text-[1.375rem] largesceen:text-[1.375rem] py-2 sm:py-4 pl-6 lg:pl-8 xl:pl-10 desktop:p-6  largesceen:p-8 rounded sm:rounded-lg lg:rounded-xl"
        />
      </div>

      <button
        type="button"
        className=" text-white text-sm sm:text-base lg:text-base px-5  desktop:text-xl py-2 sm:py-3 lg:px-8 desktop:px-10 font-bold font-helvetica hover:text-cyan transition-colors btn-1 leading-[150%] mt-6 lg:mt-12 ">
        Contact Us
      </button>
    </main>
  );
};
export default GetInTouch;
