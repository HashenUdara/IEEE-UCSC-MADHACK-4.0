import Image, { StaticImageData } from "next/image";
import RevealMotion from "../common/reveal-animation";

function IntroductionModel({
  headline,
  description,
  img,
}: {
  headline: string;
  description: string;
  img: StaticImageData;
}) {
  return (
    <div className=" -z-50 min-h-screen sticky top-0   border border-dashed bg-background">
      <div className="mx-auto    lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6  pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <RevealMotion delay={0}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight  text-foreground sm:text-4xl">
                {headline}
              </h2>
            </RevealMotion>
            <RevealMotion delay={0}>
              <p className="mt-6 text-lg font-geist-sans leading-8 text-muted-foreground">
                {description}
              </p>
            </RevealMotion>
          </div>
        </div>
        <div className="relative lg:col-span-5  p-10 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full   bg-background object-cover   lg:inset-0 lg:aspect-auto lg:h-full"
            src={img}
            alt={headline}
          />
        </div>
      </div>
    </div>
  );
}

export default function Introduction({
  content,
}: {
  content: {
    name: string;
    description: string;
    img: StaticImageData;
  }[];
}) {
  return content.map((item) => (
    <>
      <IntroductionModel
        headline={item.name}
        description={item.description}
        img={item.img}
      />
    </>
  ));
}
