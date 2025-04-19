import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Layout, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064')] bg-cover bg-center opacity-10 dark:opacity-5" />
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Frontend Engineer &
            <span className="block text-primary mt-2">UI/UX Designer</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Crafting beautiful, intuitive, and performant web experiences with
            modern technologies
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button size="lg" className="text-base" asChild>
              <Link href="/projects" className="flex items-center">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2">
              <Code2 className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Building responsive and accessible web applications with modern
                frameworks
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  React
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  TailwindCSS
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Panda CSS
                </Badge>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2">
              <Layout className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Creating intuitive and beautiful user interfaces with attention
                to detail
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Figma
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Design Systems
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Prototyping
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  User Research
                </Badge>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2">
              <Sparkles className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                Backend Technologies
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Building robust and scalable backend systems with modern
                technologies
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Python
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  FastAPI
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  SQLAlchemy
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  PostgreSQL
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  MySQL
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Prisma
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Drizzle ORM
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
