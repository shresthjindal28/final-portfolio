"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  FileText,
  Briefcase,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Laptop,
} from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* Keyboard shortcut trigger hint floating on screen */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-card/80 backdrop-blur-md shadow-lg hover:border-accent transition-colors text-xs text-muted-foreground font-sans font-medium"
      >
        <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded border border-border">⌘</span>
        <span>+</span>
        <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded border border-border">K</span>
        <span>Menu</span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  router.push("/");
                  setTimeout(() => {
                    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                })
              }
            >
              <Laptop className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Go to Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  router.push("/experience/lawvriksh");
                })
              }
            >
              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Lawvriksh Internship Case Study</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  router.push("/");
                  setTimeout(() => {
                    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                })
              }
            >
              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Career History (Timeline)</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  router.push("/");
                  setTimeout(() => {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                })
              }
            >
              <FolderGit2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Things I&apos;ve Built (Projects)</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  router.push("/");
                  setTimeout(() => {
                    document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                })
              }
            >
              <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Resume & Credentials</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  router.push("/");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                })
              }
            >
              <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Let&apos;s Build Something (Contact)</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Flagship Project">
            <CommandItem
              onSelect={() =>
                runCommand(() => {
                  router.push("/projects/ai-pdf");
                })
              }
            >
              <FolderGit2 className="mr-2 h-4 w-4 text-accent" />
              <span>AI PDF Assistant (Featured)</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Other Projects">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/projects/google-drive-clone"))}
            >
              <FolderGit2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Google Drive Clone</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/projects/uber-clone"))}
            >
              <FolderGit2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Uber Clone</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/projects/employee-management-system"))}
            >
              <FolderGit2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Employee Management System</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/projects/offline-emergency-response"))}
            >
              <FolderGit2 className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Offline Emergency Response System</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Socials">
            <CommandItem
              onSelect={() =>
                runCommand(() => window.open("https://github.com/shresthjindal28", "_blank"))
              }
            >
              <Github className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>GitHub Profile</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() =>
                  window.open("https://www.linkedin.com/in/shresth-jindal-b074ba28b/", "_blank")
                )
              }
            >
              <Linkedin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>LinkedIn Profile</span>
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => window.open("https://x.com/shresth_ji76019", "_blank"))
              }
            >
              <Twitter className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>X / Twitter Profile</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
