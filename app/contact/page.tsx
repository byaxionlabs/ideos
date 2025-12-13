"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    console.log({ name, email, subject, message })
    setSubmitted(true)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're here to help with any questions you might have about our platform, features, or community.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Our team will get back to you within 24 hours.
                      </p>
                      <a
                        href="mailto:support@projecthub.com"
                        className="text-primary hover:underline mt-1 inline-block"
                      >
                        support@projecthub.com
                      </a>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-sm text-muted-foreground mt-1">Available Monday to Friday, 9am to 5pm PST.</p>
                      <a href="tel:+1-555-123-4567" className="text-primary hover:underline mt-1 inline-block">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Visit Us</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Our headquarters are located in San Francisco.
                      </p>
                      <address className="not-italic text-primary mt-1">
                        123 Innovation Street
                        <br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Community Support</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Join our community forum for peer-to-peer support.
                      </p>
                      <Link href="/community" className="text-primary hover:underline mt-1 inline-block">
                        Visit Community Forum
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="flex flex-col items-center justify-center space-y-4 py-6">
                        <div className="rounded-full bg-primary/10 p-3 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-medium">Message Sent!</h3>
                        <p className="text-center text-muted-foreground">
                          Thank you for reaching out. We'll get back to you as soon as possible.
                        </p>
                        <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select value={subject} onValueChange={setSubject} required>
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Your message"
                            className="min-h-[150px]"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about ProjectHub.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>How do I create a project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To create a project, log in to your account and click on the "Share Your Idea" button in the
                    navigation bar or on the homepage. Fill out the project details form with information about your
                    idea, required skills, and other relevant details.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I find collaborators?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can find potential collaborators by browsing the "Collaborators" section, where you can filter
                    by skills and expertise. Additionally, when you create a project, interested collaborators can send
                    you requests to join your team.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Is ProjectHub free to use?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, ProjectHub offers a free tier that includes basic features for creating projects and finding
                    collaborators. We also offer premium plans with additional features for more serious project
                    creators and teams.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How do I join an existing project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To join an existing project, browse the "Projects" section and find one that interests you. On the
                    project page, click the "Request to Collaborate" button and explain why you'd like to join and what
                    skills you can contribute.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 ProjectHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
