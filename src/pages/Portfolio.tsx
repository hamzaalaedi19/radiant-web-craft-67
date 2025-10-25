import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with interactive animations",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates",
      tech: ["Next.js", "TypeScript", "Supabase"],
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business metrics",
      tech: ["React", "D3.js", "Express"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="space-y-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold">
            Portfolio<span className="text-accent">.</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover-lift cursor-pointer"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-secondary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
