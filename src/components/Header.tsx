export const Header = () => {
  return (
    <header className="text-center py-12 px-6 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4 animate-bounce-in">
        🎉 EventifyCampus
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
        Explore past college events and memories!
      </p>
    </header>
  );
};