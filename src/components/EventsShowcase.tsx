import { EventCard } from "./EventCard";
import techFestImage from "@/assets/techfest2023.jpg";
import culturalNightImage from "@/assets/cultural2022.jpg";

const events = [
  {
    title: "Tech Fest 2023",
    date: "March 10, 2023",
    description: "Annual college tech fest with coding and robotics competitions.",
    image: techFestImage
  },
  {
    title: "Cultural Night 2022", 
    date: "December 22, 2022",
    description: "Dance, drama and music performances by students.",
    image: culturalNightImage
  }
];

export const EventsShowcase = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 animate-scale-in">
            Past Events & Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            Relive the amazing moments from our vibrant campus events and celebrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};