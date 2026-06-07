"use client";

import React from "react";
import { trackEvent } from "@/lib/analytics";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  params?: Record<string, any>;
  children: React.ReactNode;
}

export default function TrackedLink({ eventName, params, children, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(eventName, params);
        if (props.onClick) props.onClick(e);
      }}
    >
      {children}
    </a>
  );
}
