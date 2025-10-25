import Navigation from "@/components/Navigation";
import PageNavigator from "@/components/PageNavigator";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-slide-in-right">
      <Navigation />
      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold">
            About<span className="text-accent">.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 pt-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Who I Am</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate front-end developer with 7 years of experience creating 
                beautiful, functional, and user-friendly web applications. Based in London, 
                I work with modern technologies to bring ideas to life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise lies in React, TypeScript, and modern CSS frameworks. 
                I believe in writing clean, maintainable code and creating exceptional 
                user experiences.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Skills</h2>
              <div className="space-y-4">
                {["React & Next.js", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX Design"].map((skill) => (
                  <div key={skill} className="flex items-center gap-4">
                    <div className="h-1 w-12 bg-accent" />
                    <span className="text-lg">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <PageNavigator />
    </div>
  );
};

export default About;
