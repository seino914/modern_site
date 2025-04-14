"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={6}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
                <div className="space-y-4">
                  <Link
                    href="mailto:hello@example.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>hello@example.com</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Schedule a call</span>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Card className="p-6 bg-muted/50">
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM (GMT+9)
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}