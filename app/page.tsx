import { CTA } from "@/components/common/cta";
import FAQ from "@/components/sections/faq";
import Timeline from "@/components/sections/timeline";
import Image from "next/image";
import HeroImg from "@/public/img/hero2.jpeg";
export default function Home() {
  return (
    <div>
      <div className=" relative min-h-screen w-full">
        <h1 className=" text-7xl pt-24  px-20 max-w-4xl font-geist-sans font-semibold ">
          {/* Unleashing Innovation and Creativity in Mobile App Development.{" "} */}
        </h1>
        <Image
          src={HeroImg}
          alt=""
          width={1200}
          className=" absolute  inset-0  -z-10 object-cover w-full h-full"
        />
        {/* <div className=" absolute inset-0 h-full w-full  bg-gradient-to-r from-black"></div> */}
        <div className=" absolute inset-0 h-full w-full  bg-gradient-to-t from-black"></div>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ad
      minus accusamus explicabo voluptatem doloribus esse magni quos soluta
      voluptates blanditiis vero quaerat dolores, doloremque voluptatibus cumque
      odio, ducimus praesentium? Lorem ipsum dolor sit amet, consectetur
      <Timeline />
      <FAQ />
      <CTA headline="Reach out to us today" />
    </div>
  );
}
