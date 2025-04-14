import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Heart, Coffee, Sparkles } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      <section className="relative py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg text-muted-foreground">
              Passionate about creating beautiful and functional web experiences
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

            <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
              <p className="text-lg leading-relaxed mb-6">
                With over 5 years of experience in frontend development and UI/UX design, I specialize in creating modern, responsive, and user-friendly web applications. My approach combines technical expertise with an eye for design, ensuring that every project not only functions flawlessly but also delivers an exceptional user experience.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in the power of clean code, intuitive design, and continuous learning. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Passionate</h3>
                <p className="text-muted-foreground">About creating exceptional user experiences</p>
              </Card>

              <Card className="p-6 text-center">
                <Coffee className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Dedicated</h3>
                <p className="text-muted-foreground">To continuous learning and improvement</p>
              </Card>

              <Card className="p-6 text-center">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Creative</h3>
                <p className="text-muted-foreground">In solving complex problems</p>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-3">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Sass"].map((skill) => (
                      <Badge key={skill} variant="outline" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Design Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"].map((skill) => (
                      <Badge key={skill} variant="outline" className="px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3">Other Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "Jest", "Cypress", "Storybook", "Webpack", "GraphQL", "REST API"].map((skill) => (
                      <Badge key={skill} variant="outline" className="px-3 py-1">
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
  )
}