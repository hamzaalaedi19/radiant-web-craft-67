import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  direction?: "left" | "right";
}

const PageTransition = ({ children, direction = "right" }: PageTransitionProps) => {
  return (
    <div className={`${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}`}>
      {children}
    </div>
  );
};

export default PageTransition;
