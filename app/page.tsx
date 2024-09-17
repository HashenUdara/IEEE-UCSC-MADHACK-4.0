import { CTA } from "@/components/common/cta";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Timeline from "@/components/sections/timeline";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto">
        <Timeline />
        <FAQ />
        <CTA headline="Reach out to us today" />
      </div>
    </div>
  );
}
