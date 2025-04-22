"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getPageTranslation } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Twitter, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = getPageTranslation(language, "contact", "title");
  }, [language]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {getPageTranslation(language, "contact", "title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {getPageTranslation(language, "contact", "description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {getPageTranslation(language, "contact", "name")}
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {getPageTranslation(language, "contact", "email")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {getPageTranslation(language, "contact", "message")}
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={6}
                      required
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? getPageTranslation(language, "contact", "sending")
                    : getPageTranslation(language, "contact", "send")}
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {getPageTranslation(language, "contact", "connectWithMe")}
                </h2>
                <div className="space-y-4">
                  <Link
                    href="mailto:tonosaki914@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>tonosaki914@gmail.com</span>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {getPageTranslation(language, "contact", "socialMedia")}
                </h2>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://github.com/seino914"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://x.com/seino914"
                      aria-label="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://qiita.com/seino_914"
                      aria-label="Qiita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BookOpen className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold mb-2">
                  {getPageTranslation(language, "contact", "officeHours")}
                </h3>
                <p className="text-muted-foreground">
                  {getPageTranslation(language, "contact", "officeHoursTime")}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
