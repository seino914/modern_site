"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Code2, Home, User, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getTranslation } from "@/lib/i18n/translations";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const isActive = (path: string) => pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  const NavLink = ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: typeof Home;
    label: string;
  }) => (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors",
        "text-muted-foreground/80 hover:text-foreground",
        isActive(href) && "text-foreground"
      )}
      onClick={() => setIsOpen(false)}
    >
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );

  return (
    <nav className="fixed w-full z-50 top-0 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex justify-between h-14">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
            >
              <Code2 className="h-5 w-5" />
              <span className="text-base font-medium">Portfolio</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:gap-1">
            <NavLink
              href="/"
              icon={Home}
              label={getTranslation(language, "home")}
            />
            <NavLink
              href="/about"
              icon={User}
              label={getTranslation(language, "about")}
            />
            <NavLink
              href="/contact"
              icon={Send}
              label={getTranslation(language, "contact")}
            />
            <div className="h-5 w-px bg-border/50 mx-2" />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-sm font-medium text-muted-foreground/80 hover:text-foreground rounded-lg px-3 py-2 h-auto"
            >
              {language === "en" ? "日本語" : "English"}
            </Button>
            <div className="ml-1">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center gap-1 sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-sm font-medium text-muted-foreground/80 hover:text-foreground rounded-lg px-2 h-auto min-w-[40px]"
            >
              {language === "en" ? "JA" : "EN"}
            </Button>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground/80 hover:text-foreground"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="sm:hidden border-t border-border/50 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
          <div className="px-4 py-3 space-y-1">
            <NavLink
              href="/"
              icon={Home}
              label={getTranslation(language, "home")}
            />
            <NavLink
              href="/about"
              icon={User}
              label={getTranslation(language, "about")}
            />
            <NavLink
              href="/contact"
              icon={Send}
              label={getTranslation(language, "contact")}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
