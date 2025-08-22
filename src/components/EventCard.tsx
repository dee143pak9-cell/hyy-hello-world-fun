import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
}

interface EventCardProps {
  event: Event;
  index?: number;
}

export const EventCard = ({ event, index = 0 }: EventCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in opacity-0 [animation-fill-mode:forwards]" 
          style={{ animationDelay: `${index * 200}ms` }}>
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3 animate-slide-in-right opacity-0 [animation-fill-mode:forwards] group-hover:animate-none"
             style={{ animationDelay: `${index * 200 + 300}ms` }}>
          <Calendar className="h-4 w-4 text-accent transition-transform duration-300 group-hover:scale-110" />
          <span className="text-sm text-muted-foreground">{event.date}</span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-all duration-300 transform group-hover:scale-105">
          {event.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed transition-all duration-300 group-hover:text-foreground">
          {event.description}
        </p>
      </CardContent>
    </Card>
  );
};