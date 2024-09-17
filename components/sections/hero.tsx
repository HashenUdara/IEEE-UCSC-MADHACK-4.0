import React from "react";
import Image from "next/image";
import HeroImg from "@/public/img/hero2.jpeg";

const Hero = () => {
  return (
    <section className=" relative flex items-end min-h-screen w-full">
      <div className="container mx-auto pb-24 pl-10">
        <h1 className=" text-7xl   max-w-4xl font-geist-sans font-semibold ">
          Unleashing Innovation and Creativity in Mobile App Development.{" "}
        </h1>
      </div>

      <Image
        src={HeroImg}
        alt=""
        width={1200}
        className=" absolute  inset-0  -z-20 object-cover w-full h-full"
      />
      {/* <div className=" absolute inset-0 h-full w-full  bg-gradient-to-r from-black"></div> */}
      <div className=" absolute inset-0 h-full w-full  -z-10 bg-gradient-to-t  from-background"></div>
    </section>
  );
};

export default Hero;
