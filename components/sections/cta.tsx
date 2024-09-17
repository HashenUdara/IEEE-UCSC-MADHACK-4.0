import { buttonVariants } from "@/components/ui/button";

import RevealMotion from "../common/reveal-animation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className=" bg-background  border border-dashed">
      <div className=" shadow-2xl relative  z-20  shadow-background bg-background py-12 sm:py-32  px-6 lg:px-20 rounded-3xl ">
        <div className="w-full max-w-screen-2xl mx-auto   space-y-12   sm:space-y-0  md:grid  grid-cols-12">
          <div className=" col-span-7">
            <RevealMotion>
              <p className=" text-lg  sm:text-xl   ">Ready to Innovate?</p>
            </RevealMotion>
            <RevealMotion delay={0.3}>
              <h2 className="mt-2 text-3xl font-semibold font-geist-sans tracking-tight  leading-10 sm:text-6xl">
                Join MADHACK 4.0 <br /> Today!
              </h2>
            </RevealMotion>
          </div>

          <div className="    justify-end  flex flex-col col-span-5  ">
            <RevealMotion>
              <p className=" text-xl  sm:text-end text-background ">
                Contact us via
              </p>
              <div className="   font-semibold sm:text-end tracking-tighter ">
                Whether you’re looking to learn, compete, or create
                groundbreaking mobile solutions, MADHACK 4.0 is your platform to
                shine. Collaborate with peers, gain industry insights, and
                showcase your creativity.
              </div>
              <div className=" mt-4 flex sm:justify-end">
                <Link href={"/contact"} className={cn(buttonVariants({}))}>
                  Register Now!
                </Link>
              </div>
            </RevealMotion>
          </div>
        </div>
      </div>
    </section>
  );
}
