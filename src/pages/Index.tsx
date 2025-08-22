import { EventsShowcase } from "@/components/EventsShowcase";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 leading-tight">
            Campus Events
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience the vibrant spirit of our campus through incredible tech competitions and cultural celebrations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              View All Events
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2K+</div>
              <div className="text-muted-foreground">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-glow mb-2">10+</div>
              <div className="text-muted-foreground">Years Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Showcase */}
      <EventsShowcase />
    </div>
  );
};

export default Index;
