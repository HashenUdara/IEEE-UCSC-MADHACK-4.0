import { RevealStats } from "@/components/common/scroll-blur-animation";

const timeline = [
  {
    title: "Awareness Session",
    place: "Virtual",
    date: "January 6th",
    description:
      "Kick off MADHACK with an interactive awareness session! Learn about the hackathon's goals, how to participate, and what you can expect. This session will cover event details, timelines, and key resources to help you get started on your mobile app development journey.",
  },
  {
    title: "Mobile App Designing Session",
    place: "Virtual",
    date: "January 10th",
    description:
      "Get your creative juices flowing in our mobile app designing session! We'll guide you through best practices in UI/UX, key considerations for designing mobile applications, and how to create user-friendly and visually stunning interfaces for your hackathon submission.",
  },
  {
    title: "Flutter Workshop - Basics",
    place: "Virtual",
    date: "February 4th",
    description:
      "Dive into mobile app development with Flutter! This beginner-friendly workshop will cover the fundamentals of building cross-platform mobile apps using Flutter, helping you get started with hands-on coding experience and prepare you for future sessions.",
  },
  {
    title: "Flutter Workshop - Advanced",
    place: "Virtual",
    date: "February 18th",
    description:
      "Take your Flutter skills to the next level! This advanced session is designed for participants who want to build more complex mobile applications, covering advanced features, best practices, and optimizing performance in Flutter development.",
  },
  {
    title: "Open Initial Round Submissions",
    place: "Virtual",
    date: "March 4th",
    description:
      "It's time to showcase your progress! Submissions for the initial round open on March 4th. Ensure your mobile app meets all the criteria and get ready to compete for a spot in the final round. Submit early to avoid last-minute rushes!",
  },
  {
    title: "Close Initial Round Submissions",
    place: "Virtual",
    date: "March 16th",
    description:
      "The submission window closes on March 16th. Make sure your app is fully functional, tested, and submitted before the deadline. Late submissions will not be accepted, so double-check all requirements!",
  },
  {
    title: "Announcement of Finalists",
    place: "Virtual",
    date: "Postponed",
    description:
      "Due to unforeseen circumstances, the announcement of finalists has been postponed. Keep an eye on your email for updates. The selected teams will be notified soon and will move on to the final stage of MADHACK.",
  },
  {
    title: "Final Hackathon",
    place: "Onsite",
    date: "Postponed",
    description:
      "The onsite hackathon has been postponed. We are working to finalize the new dates and will inform all participants as soon as possible. Stay tuned for more information.",
  },
  {
    title: "Final Hackathon & Award Ceremony",
    place: "Onsite",
    date: "Postponed",
    description:
      "Along with the final hackathon, the award ceremony will also be postponed. Once the event is rescheduled, we will celebrate the hard work and creativity of our MADHACK participants with a grand award ceremony.",
  },
];

export default function TimelineSteps() {
  return (
    <div className="flow-root max-w-md">
      <ul role="list" className="-mb-8 mt-8">
        {timeline.map((step, index) => (
          <li key={index + 1}>
            <div className="relative pb-8">
              {index !== timeline.length - 1 ? (
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
                      <h4 className="text-2xl font-semibold ">{step.title}</h4>
                      <p className="text-lg  text-muted-foreground font-semibold   ">
                        ({step.place}) - {step.date}
                      </p>
                      <p className="  font-geist-sans text-lg  text-muted-foreground mt-4">
                        {step.description}
                      </p>
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
