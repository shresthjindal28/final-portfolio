import { track } from "@vercel/analytics";

/**
 * Safely dispatch an event to Google Analytics (gtag.js) if available in the browser environment.
 */
function safeGtag(eventName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    try {
      (window as any).gtag("event", eventName, params);
    } catch {
      // Gracefully catch any tracker failovers
    }
  }
}

/**
 * Safely dispatch an event to Vercel Analytics, ignoring script blockers.
 */
function safeVercelTrack(eventName: string, params?: Record<string, any>) {
  try {
    track(eventName, params);
  } catch {
    // Ignore block/network issues
  }
}

/**
 * Core event dispatcher that triggers both Vercel and Google Analytics.
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  safeVercelTrack(eventName, params);
  safeGtag(eventName, params);
}

// --- Specific Type-Safe Recruiter Conversion Trackers ---

export function trackResumeViewed() {
  trackEvent("resume_viewed");
}

export function trackResumeDownloaded() {
  trackEvent("resume_downloaded");
}

export function trackLawvrikshCaseStudyViewed() {
  trackEvent("lawvriksh_case_study_viewed");
}

export function trackLawvrikshPdfDownloaded() {
  trackEvent("lawvriksh_pdf_downloaded");
}

export function trackAiPdfGithubClicked() {
  trackEvent("ai_pdf_github_clicked");
}

export function trackAiPdfDemoClicked() {
  trackEvent("ai_pdf_demo_clicked");
}

export function trackProjectGithubClicked(projectSlug: string) {
  trackEvent("project_github_clicked", { project: projectSlug });
}

export function trackProjectDemoClicked(projectSlug: string) {
  trackEvent("project_demo_clicked", { project: projectSlug });
}

export function trackGithubClicked(context: string) {
  trackEvent("github_clicked", { context });
}

export function trackLinkedinClicked(context: string) {
  trackEvent("linkedin_clicked", { context });
}

export function trackEmailClicked(context: string) {
  trackEvent("email_clicked", { context });
}

export function trackContactSubmitted() {
  trackEvent("contact_submitted");
}

export function trackContactSubmissionFailed(errorReason: string) {
  trackEvent("contact_submission_failed", { reason: errorReason });
}

export function trackCommandMenuOpened() {
  trackEvent("command_menu_opened");
}

export function trackCommandMenuNavigation(targetRoute: string) {
  trackEvent("command_menu_navigation", { route: targetRoute });
}
