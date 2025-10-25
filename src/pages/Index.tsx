import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PageNavigator from "@/components/PageNavigator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PageNavigator />
    </div>
  );
};

export default Index;
