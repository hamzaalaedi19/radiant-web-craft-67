import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageNavigation } from "@/hooks/usePageNavigation";

const PageNavigator = () => {
  const { goToNextPage, goToPrevPage, hasPrevPage, currentPage, totalPages } = usePageNavigation();

  return (
    <div className="fixed bottom-12 left-6 md:left-12 z-40 flex items-center gap-6">
      <Button
        onClick={goToPrevPage}
        variant="ghost"
        size="icon"
        disabled={!hasPrevPage}
        className="h-12 w-12 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-accent hover:text-background transition-all disabled:opacity-30"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>

      <div className="flex items-center gap-4">
        <span className="text-sm text-accent font-medium">
          {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
        </span>
        <div className="relative w-24 h-0.5 bg-accent/30 overflow-hidden">
          <div className="absolute h-full w-8 bg-accent animate-scroll-line" />
        </div>
      </div>

      <Button
        onClick={goToNextPage}
        variant="ghost"
        size="icon"
        className="h-12 w-12 rounded-full bg-accent hover:bg-accent/90 hover:scale-110 transition-all animate-pulse-slow"
      >
        <ArrowRight className="h-5 w-5 text-background" />
      </Button>
    </div>
  );
};

export default PageNavigator;
