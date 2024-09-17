import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What is MadHack 4.0?",
    answer:
      "MadHack 4.0 is an exciting hackathon focused on mobile app development. It's a platform where developers, designers, and innovators come together to create groundbreaking mobile applications, learn new technologies, and compete in solving real-world problems.",
  },
  {
    question: "Who can participate in MadHack 4.0?",
    answer:
      "MadHack 4.0 is open to all undergraduate students and tech enthusiasts! Whether you're just getting started or you're an experienced mobile app developer, we welcome participants of all backgrounds and skill levels.",
  },
  {
    question: "How can I register for MadHack 4.0?",
    answer:
      "To register for MadHack 4.0, simply visit our official website and go to the registration page. Provide your details and those of your team members (if applicable) to confirm your participation.",
  },
  {
    question: "Do I need a team to participate?",
    answer:
      "Yes, to participate in the Initial Round and Final Hackathon, you need to form a team. Teams should consist of three to four members to ensure collaborative project development.",
  },
  {
    question: "I'm a beginner in coding. Can I still participate?",
    answer:
      "Definitely! MadHack 4.0 is designed for everyone, including beginners. It's a fantastic opportunity to learn from others, attend workshops, and gain hands-on experience in mobile app development.",
  },
  {
    question: "Is it mandatory to use Flutter for MadHack 4.0 projects?",
    answer:
      "No, using Flutter is not mandatory. While we offer Flutter workshops to help participants, you are free to use any framework or technology that suits your project best.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faqs"
      className="overflow-hidden relative bg-background  px-6  py-24 sm:py-32"
    >
      <div className="mx-auto  px-6 lg:px-8 gap-8 lg:grid grid-cols-2">
        <div className=" space-y-6">
          <h3 className=" text-4xl font-geist-sans   font-medium tracking-tight sm:text-6xl">
            Frequently <br /> Asked Questions
          </h3>
          <h4 className="text-muted-foreground  max-w-lg">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            customer support team.
          </h4>
        </div>

        <div className="not-prose mt-8 lg:mt-0  flex flex-col gap-4">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="group border-b border-dashed  hover:bg-muted/40 px-4 border-opacity-[0.9] dark:border-opacity-[0.2] first:border-t"
              >
                <AccordionTrigger className="text-left text-xl font-geist-sans font-medium  hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
