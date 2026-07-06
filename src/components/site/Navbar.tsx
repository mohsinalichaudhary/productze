import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";
import { GlowButton } from "./GlowButton";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex max-w-7xl items-center gap-4 rounded-2xl glass px-4 py-3 sm:px-6">
        <Link to="/">
          <Logo />
        </Link>

        <div className="mx-auto hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <GlowButton to="/contact" variant="outline" className="px-5 py-2.5">
            Book Call
          </GlowButton>
          <GlowButton to="/contact" className="px-5 py-2.5">
            Get Started
          </GlowButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-xl glass lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl glass p-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                activeProps={{ className: "text-foreground bg-accent/30" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <GlowButton to="/contact" variant="outline" className="w-full justify-center py-2.5">
              Book Call
            </GlowButton>
            <GlowButton to="/contact" className="w-full justify-center py-2.5">
              Get Started
            </GlowButton>
          </div>
        </div>
      )}
    </header>
  );
}
