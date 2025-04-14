import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Tailwind CSS, featuring a responsive design and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and a clean, intuitive interface.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2666",
    tags: ["React", "GraphQL", "Framer Motion", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Design System",
    description: "A comprehensive design system with reusable components and detailed documentation for scalable applications.",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2670",
    tags: ["React", "Storybook", "Styled Components", "Jest"],
    demoUrl: "#",
    githubUrl: "#"
  }
]

export default function Projects() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Featured Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work showcasing web development and design expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-2 group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.demoUrl} className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Source
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}