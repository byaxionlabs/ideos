import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Code, Heart, MessageSquare, Users } from "lucide-react"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  About ProjectHub
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connecting creators, developers, and innovators to bring ideas to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    ProjectHub was created with a simple mission: to help people with great ideas find the right
                    collaborators to bring those ideas to life.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We believe that the best projects come from diverse teams with complementary skills and
                    perspectives. Our platform makes it easy to share your vision, connect with talented individuals,
                    and build something amazing together.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-center">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-center">10,000+</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">Active Members</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-center">
                        <Code className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-center">5,000+</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">Projects Created</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-center">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-center">2,500+</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">Completed Projects</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-center">
                        <Heart className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-center">95%</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">Satisfaction Rate</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  How ProjectHub came to be and where we're headed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">The Beginning</h3>
                  <p className="text-muted-foreground">
                    ProjectHub started in 2022 when our founders, a group of developers and designers, realized how
                    difficult it was to find the right people to collaborate with on side projects. They built the first
                    version of the platform to solve their own problem.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Growing Community</h3>
                  <p className="text-muted-foreground">
                    What began as a small community quickly grew as more creators discovered the platform. We expanded
                    our features based on user feedback, always focusing on making collaboration easier and more
                    effective.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Looking Forward</h3>
                  <p className="text-muted-foreground">
                    Today, ProjectHub is home to thousands of innovative projects and talented individuals. We're
                    constantly improving the platform to better serve our community and help bring more amazing ideas to
                    life.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[400px] rounded-xl bg-background p-4 shadow-lg">
                <div className="space-y-4">
                  <div className="rounded-lg bg-primary/10 p-6">
                    <MessageSquare className="h-10 w-10 text-primary mb-4" />
                    <p className="italic text-muted-foreground">
                      "ProjectHub completely changed how I approach side projects. Instead of trying to do everything
                      myself, I can now find talented collaborators who bring fresh perspectives and complementary
                      skills."
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Sarah Miller</p>
                        <p className="text-xs text-muted-foreground">UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Meet the people behind ProjectHub.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-square w-full">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The principles that guide everything we do.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge className="h-8 w-8 rounded-full p-1">1</Badge>
                    <CardTitle>Collaboration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe that diverse teams create better outcomes. Our platform is designed to bring together
                    people with different skills, backgrounds, and perspectives.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge className="h-8 w-8 rounded-full p-1">2</Badge>
                    <CardTitle>Innovation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're passionate about new ideas and creative solutions. We strive to create an environment where
                    innovation can flourish and ideas can become reality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge className="h-8 w-8 rounded-full p-1">3</Badge>
                    <CardTitle>Community</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're building more than a platform; we're building a community. We value respectful communication,
                    constructive feedback, and mutual support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Ready to bring your ideas to life or find exciting projects to contribute to?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/register">Sign Up Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">Browse Projects</Link>
                </Button>
              </div>
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

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Former software engineer with a passion for connecting people and ideas.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Samantha Lee",
    role: "Co-Founder & CTO",
    bio: "Full-stack developer who loves building tools that help people collaborate.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Chen",
    role: "Head of Product",
    bio: "Product manager focused on creating intuitive and powerful user experiences.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Community",
    bio: "Community builder dedicated to fostering meaningful connections between creators.",
    image: "/placeholder.svg?height=400&width=400",
  },
]
