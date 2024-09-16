import Logo from "@/public/img/logo.png";

import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";

import RevealMotion from "./reveal-animation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Parallax from "./parallax";

export function CTA({ headline }: { headline?: string }) {
  return (
    <section className=" bg-background">
      <div className=" shadow-2xl relative  z-20  shadow-background bg-white py-12 sm:py-32  px-6 lg:px-20 rounded-3xl ">
        <div className="w-full max-w-screen-2xl mx-auto   space-y-12   sm:space-y-0  md:grid  grid-cols-12">
          <div className=" col-span-5">
            <RevealMotion>
              <p className=" text-lg  sm:text-xl  text-background ">
                {headline || "Is your factory ready for an upgrade?"}
              </p>
            </RevealMotion>
            <RevealMotion delay={0.3}>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight  leading-10 text-background sm:text-6xl">
                Our experts are here for you.
              </h2>
            </RevealMotion>
          </div>

          <div className="   justify-end  flex flex-col col-span-7  text-black">
            <RevealMotion>
              <p className=" text-xl  sm:text-end text-background ">
                Contact us via
              </p>
              <div className=" text-4xl sm:text-6xl  font-semibold sm:text-end tracking-tighter ">
                {process.env.CONTACT_EMAIL}
              </div>
              <div className=" mt-4 flex sm:justify-end">
                <Link
                  href={"/contact"}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    " bg-transparent"
                  )}
                >
                  Let{"'"}s Work Together
                </Link>
              </div>
            </RevealMotion>
          </div>
        </div>
      </div>

      <div className="  mt-10 sm:-mt-2   relative ">
        <div className="bg-blend-screen -mt-12 z-10 absolute h-full bg-gradient-to-b  to-transparent  from-background/75  w-full"></div>
        <Parallax>
          <Image
            className="w-full max-w-5xl  mx-auto  opacity-75 duration-1000"
            src={Logo}
            alt="Clofel Tech"
          />
        </Parallax>
      </div>
    </section>
  );
}
