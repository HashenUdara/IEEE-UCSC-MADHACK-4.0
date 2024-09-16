import { Check } from "lucide-react";
import { RevealStats } from "@/components/common/scroll-blur-animation";

const steps = [
  {
    name: "Discovery & Consultation",
    description:
      "A case study about your business to get a clear idea about what's going on and what should be done.",
    points: [
      {
        name: "In-depth Consultation",
        label:
          " We dive deep to understand your unique business challenges and goals",
      },
      {
        name: "Strategic Roadmap",
        label:
          "Collaboratively craft a detailed plan that aligns with your vision and leverages market opportunities.",
      },
      {
        name: "Targeted Solutions",
        label:
          "We develop tailored solutions to address your specific needs, driving growth and innovation",
      },
    ],
  },
  {
    name: " Planning & Strategy",
    description:
      "Achieve peak performance with our streamlined strategic planning process.",
    points: [
      {
        name: "Resource Optimization",
        label:
          "We strategically allocate resources to maximize efficiency and minimize costs.",
      },
      {
        name: "Actionable Strategies",
        label:
          "Translate insights into concrete steps that propel your business forward.",
      },
      {
        name: "Data-Driven Decisions",
        label:
          "Leverage data analysis to inform planning and ensure optimal results.",
      },
    ],
  },
  {
    name: "Project Development",
    description:
      "Elevate user experience with cutting-edge design and seamless development.",
    points: [
      {
        name: "User-Centric Design",
        label:
          "We prioritize user experience, creating intuitive and engaging solutions.",
      },
      {
        name: "Iterative Development",
        label:
          "Continuously refine and enhance your product through testing and feedback.",
      },
      {
        name: "Seamless Integration",
        label:
          "Ensure smooth implementation, minimizing disruptions and maximizing impact.",
      },
    ],
  },

  {
    name: "Quality Assurance",
    description:
      "Guarantee flawless results with our rigorous testing and quality assurance protocols.",
    points: [
      {
        name: "Rigorous Testing",
        label:
          "We employ comprehensive testing protocols to identify and address potential issues.",
      },
      {
        name: "Performance Optimization",
        label:
          " Fine-tune your product to deliver optimal speed, reliability, and user satisfaction.",
      },
      {
        name: "Continuous Improvement",
        label:
          " We remain committed to ongoing enhancements, keeping your product ahead of the curve.",
      },
    ],
  },
];

export default function WorkflowSteps() {
  return (
    <div className="flow-root max-w-md">
      <ul role="list" className="-mb-8 mt-8">
        {steps.map((step, index) => (
          <li key={index + 1}>
            <div className="relative pb-8">
              {index !== steps.length - 1 ? (
                <span
                  className="absolute left-4 top-4 ml-[7px] h-full w-0.5 bg-muted"
                  aria-hidden="true"
                />
              ) : (
                <span
                  className="absolute left-4 top-4 ml-[7px] h-full w-0.5   bg-gradient-to-b from-muted"
                  aria-hidden="true"
                />
              )}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={
                      "size-12 rounded-full flex items-center    font-bold bg-background justify-center ring-2 ring-muted"
                    }
                  >
                    0{index + 1}
                  </span>
                </div>
                <div className="flex min-w-0 min-h-44 py-32 flex-1 justify-between space-x-4 pt-1.5">
                  <RevealStats>
                    <div className=" ml-1">
                      <h4 className="text-2xl font-semibold ">{step.name}</h4>
                      <p className="font-medium   text-muted-foreground mt-4">
                        {step.description}
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7  text-muted-foreground lg:max-w-none">
                        {step.points.map((point) => (
                          <div
                            key={point.name}
                            className="relative text-sm pl-8"
                          >
                            <dt className="inline font-semibold ">
                              <Check
                                className="absolute left-1 top-1 size-4 text-brand-600"
                                aria-hidden="true"
                              />
                              {point.name}
                            </dt>{" "}
                            <dd className="inline">{point.label}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </RevealStats>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
