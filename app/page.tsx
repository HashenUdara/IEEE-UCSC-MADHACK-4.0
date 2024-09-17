import { CTA } from "@/components/common/cta";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import Timeline from "@/components/sections/timeline";
import { IntroductionData } from "@/data/intro-data";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <Introduction content={IntroductionData} />
        <Timeline />
        <FAQ />
        <CTA headline="Reach out to us today" />
      </div>
    </div>
  );
}
