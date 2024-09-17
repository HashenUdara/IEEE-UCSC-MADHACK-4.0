import RevealMotion from "@/components/common/reveal-animation";
import TimelineSteps from "./timeline-steps";

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="relative isolate overflow-hidden bg-background   px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1  lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className=" sm:px-12  sticky top-0 overflow-hidden">
            <div className="sm:min-h-screen flex  max-w-xl flex-col mt-12 ">
              <RevealMotion>
                <p className=" text-xl text-brand-00">MADHACK Event Timeline</p>
                <h3 className="mt-4 sm:mt-6 font-semibold tracking-tighter text-3xl sm:text-6xl">
                  Your Journey from Awareness to the Final Hackathon
                </h3>
              </RevealMotion>
              <RevealMotion delay={0.3}>
                <p className=" mt-8 text-lg   font-geist-sans text-muted-foreground">
                  Follow the roadmap of MADHACK, starting with our awareness
                  session, leading into design workshops, Flutter training, and
                  culminating in the grand onsite hackathon. Stay tuned for
                  updates and be prepared for an unforgettable experience in
                  mobile app development.
                </p>
              </RevealMotion>
            </div>
          </div>

          <div className="mx-auto w-full space-y-20 max-w-7xl sm:px-8">
            <TimelineSteps />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
