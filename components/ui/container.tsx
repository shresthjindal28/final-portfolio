import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "narrow" | "wide";
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant = "default", as: Component = "div", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto px-4 sm:px-6 lg:px-8",
          {
            "max-w-7xl": variant === "default",      // 1280px
            "max-w-3xl": variant === "narrow",       // 768px (ideal for content/70ch reading)
            "max-w-[1440px]": variant === "wide",    // 1440px (full layouts)
          },
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
