import React from "react";
import Image from "next/image";
import HeroImg from "@/public/img/hero2.jpeg";
import { Button } from "../ui/button";
import RevealMotion from "../common/reveal-animation";

const Hero = () => {
  return (
    <section id="home" className=" relative flex items-end min-h-screen w-full">
      <div className="container block sm:grid grid-cols-5 mx-auto pb-16 px-10">
        <div className=" col-span-3">
          <RevealMotion delay={0.4}>
            <div className=" space-y-4  text-xl font-geist-sans tracking-tight ">
              Sri Lanka{"'"}s first ever App Development Hackerthon{" "}
            </div>
          </RevealMotion>

          <RevealMotion translateY={50}>
            <h1 className=" text-6xl sm:text-8xl  mt-2  max-w-4xl font-machina-sans font-bold ">
              MADHACK 4.0
            </h1>
          </RevealMotion>
          <RevealMotion>
            <Button>Register Now</Button>
          </RevealMotion>
        </div>
        <div className=" flex col-span-2  flex-col justify-items-end  w-full justify-end">
          <RevealMotion delay={0.8}>
            <div className="font-geist-sans  hidden sm:block text-lg  mb-2  text-right">
              Unleash your creativity and skills in MADHACK 4.0, the premier
              mobile development hackathon. Whether you’re a beginner or a
              seasoned developer, this is your chance to learn, collaborate, and
              build innovative mobile solutions for real-world challenges.
            </div>
          </RevealMotion>

          <RevealMotion delay={0.9}>
            <p className="  pt-2 font-geist-sans mt-6 sm:mt-0  text-left sm:text-right font-semibold">
              Organized By IEEE Student Branch of UCSC
            </p>
          </RevealMotion>
        </div>
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
