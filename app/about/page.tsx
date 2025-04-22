"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getPageTranslation } from "@/lib/i18n/translations";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heart, Coffee, Sparkles } from "lucide-react";

export default function About() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = getPageTranslation(language, "about", "title");
  }, [language]);

  return (
    <main className="min-h-screen pt-16">
      <section className="relative py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {getPageTranslation(language, "about", "title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {getPageTranslation(language, "about", "description")}
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[16/9] mb-12">
              <img
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=2070"
                alt="Workspace"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  {getPageTranslation(language, "about", "passionate")}
                </h3>
                <p className="text-muted-foreground">
                  {getPageTranslation(language, "about", "passionateDesc")}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Coffee className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  {getPageTranslation(language, "about", "dedicated")}
                </h3>
                <p className="text-muted-foreground">
                  {getPageTranslation(language, "about", "dedicatedDesc")}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">
                  {getPageTranslation(language, "about", "creative")}
                </h3>
                <p className="text-muted-foreground">
                  {getPageTranslation(language, "about", "creativeDesc")}
                </p>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">
                {getPageTranslation(language, "about", "technicalSkills")}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    {getPageTranslation(language, "about", "frontendSkills")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "TypeScript",
                      "React",
                      "Next.js",
                      "Tailwind CSS",
                      "Panda CSS",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    {getPageTranslation(language, "about", "backendSkills")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "Python",
                      "FastAPI",
                      "SQLAlchemy",
                      "Prisma",
                      "Drizzle ORM",
                      "PostgreSQL",
                      "MySQL",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">
                    {getPageTranslation(language, "about", "otherSkills")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git, Github, Gitlab",
                      "Linux, Ubuntu",
                      "VSCode, Cursor",
                      "Figma",
                      "Notion",
                      "Slack",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
