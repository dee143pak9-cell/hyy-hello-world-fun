import { EventsShowcase } from "@/components/EventsShowcase";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Stats Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Past Events</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-accent mb-2">2K+</div>
              <div className="text-muted-foreground">Memories Created</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-glow transition-all duration-300">
              <Calendar className="h-8 w-8 text-primary-glow mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary-glow mb-2">10+</div>
              <div className="text-muted-foreground">Years of Fun</div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Explore All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Main Event Container */}
      <main id="event-container">
        <EventsShowcase />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
