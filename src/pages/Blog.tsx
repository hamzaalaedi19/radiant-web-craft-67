import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Building Modern Web Applications",
      date: "March 15, 2024",
      excerpt: "Exploring the latest trends and best practices in modern web development...",
      readTime: "5 min read",
    },
    {
      title: "The Power of TypeScript",
      date: "March 10, 2024",
      excerpt: "Why TypeScript has become an essential tool for building scalable applications...",
      readTime: "4 min read",
    },
    {
      title: "Optimizing React Performance",
      date: "March 5, 2024",
      excerpt: "Tips and techniques for improving the performance of your React applications...",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="space-y-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold">
            Blog<span className="text-accent">.</span>
          </h1>
          
          <div className="space-y-8 pt-8">
            {posts.map((post, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover-lift cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-semibold">{post.title}</h3>
                  <p className="text-lg text-muted-foreground">{post.excerpt}</p>
                  <div className="pt-2">
                    <span className="text-accent hover:underline">Read more →</span>
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

export default Blog;
