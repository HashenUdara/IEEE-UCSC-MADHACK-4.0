import RevealMotion from "@/components/common/reveal-animation";
import { RevealStats } from "../common/stats-values";

const Prizes = ({
  content,
}: {
  content: {
    name: string;
    value: string;
  }[];
}) => {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-background  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="mx-auto w-full space-y-20 max-w-7xl text-right sm:px-8">
            {content.map((stat, index) => (
              <RevealStats key={index} name={stat.name} value={stat.value} />
            ))}
          </div>
          <div className=" sm:px-12  sticky top-0 overflow-hidden">
            <div className="sm:min-h-screen flex  max-w-lg flex-col justify-center">
              <RevealMotion>
                <p className=" text-xl text-brand-00">MADHACK 4.0 Prizes</p>
                <h3 className="mt-4 tracking-tight sm:mt-6 font-semibold text-3xl sm:text-6xl">
                  Compete <br /> Innovate <br /> Win Big!
                </h3>
              </RevealMotion>
              <RevealMotion delay={0.3}>
                <p className=" mt-8 text-lg  font-geist-sans  text-muted-foreground">
                  MADHACK 4.0 offers generous cash prizes for the top teams who
                  demonstrate exceptional creativity and mobile app development
                  skills. Aim for the top and claim your reward!
                </p>
              </RevealMotion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
