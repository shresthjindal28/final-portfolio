"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface AnalyticsOnMountProps {
  eventName: string;
  params?: Record<string, any>;
}

export default function AnalyticsOnMount({ eventName, params }: AnalyticsOnMountProps) {
  useEffect(() => {
    trackEvent(eventName, params);
  }, [eventName, params]);
  
  return null;
}
