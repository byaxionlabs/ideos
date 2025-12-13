import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Code, Flame, Heart, MessageSquare, Plus, Sparkles, Users } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="px-3 py-1 text-sm" variant="secondary">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Discover. Create. Collaborate.
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Where Ideas Become Projects
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join our community of creators, developers, and innovators to share project ideas and find
                  collaborators.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/projects">
                    Browse Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Share Your Idea
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trending Projects</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the most popular project ideas in our community right now.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {trendingProjects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="group">
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                          <CardDescription>{project.category}</CardDescription>
                        </div>
                        {project.trending && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Flame className="h-3 w-3 text-orange-500" />
                            Trending
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="line-clamp-3 text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 border-t flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={project.author.avatar} alt={project.author.name} />
                          <AvatarFallback>{project.author.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{project.author.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          <span className="text-sm">{project.likes}</span>
                        </div>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          <span className="text-sm">{project.comments}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span className="text-sm">{project.collaborators}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Find Your Perfect Collaborators
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Connect with talented individuals who share your passion and bring your project ideas to life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/collaborators">
                      Find Collaborators
                      <Users className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/projects/new">
                      Share Your Project
                      <Plus className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="grid gap-4">
                    <div className="rounded-lg bg-background p-6 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <Code className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">Developers</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Find skilled developers to bring your project to life.
                      </p>
                    </div>
                    <div className="rounded-lg bg-background p-6 shadow-sm">
                      <div className="flex items-center space-x-2">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                        <h3 className="font-semibold">Designers</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Connect with creative designers for stunning visuals.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-lg bg-background p-6 shadow-sm">
                      <div className="flex items-center space-x-2">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        <h3 className="font-semibold">Content Creators</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Find writers and content specialists for your project.
                      </p>
                    </div>
                    <div className="rounded-lg bg-background p-6 shadow-sm">
                      <div className="flex items-center space-x-2">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                        </svg>
                        <h3 className="font-semibold">Mentors</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Get guidance from experienced professionals in your field.
                      </p>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Connect with like-minded creators, share your ideas, and build amazing projects together.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button asChild className="w-full" size="lg">
                  <Link href="/register">Sign Up Now</Link>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="underline underline-offset-2">
                    Sign in
                  </Link>
                </p>
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

const trendingProjects = [
  {
    id: "1",
    title: "AI-Powered Recipe Generator",
    category: "Web Application",
    description:
      "Building an application that generates personalized recipes based on available ingredients, dietary restrictions, and nutritional goals using machine learning algorithms.",
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
    trending: true,
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
    },
    likes: 128,
    comments: 32,
    collaborators: 5,
  },
  {
    id: "2",
    title: "Sustainable Smart Home System",
    category: "IoT",
    description:
      "Creating an integrated smart home system focused on energy efficiency and sustainability, with solar integration and intelligent power management.",
    techStack: ["Arduino", "Python", "React Native", "AWS"],
    trending: true,
    author: {
      name: "Samantha Lee",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SL",
    },
    likes: 95,
    comments: 24,
    collaborators: 3,
  },
  {
    id: "3",
    title: "Decentralized Marketplace",
    category: "Blockchain",
    description:
      "Building a peer-to-peer marketplace using blockchain technology for secure, transparent transactions without intermediaries.",
    techStack: ["Solidity", "Ethereum", "Next.js", "IPFS"],
    trending: false,
    author: {
      name: "Marcus Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
    likes: 87,
    comments: 19,
    collaborators: 4,
  },
]
