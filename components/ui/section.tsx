import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  divider?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Component = "section", divider = false, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "py-16 md:py-24 lg:py-32 w-full relative overflow-hidden",
          {
            "border-b border-border": divider,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";
