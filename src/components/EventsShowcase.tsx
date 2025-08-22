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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
            Our Amazing Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the vibrant campus life through our tech competitions and cultural celebrations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};