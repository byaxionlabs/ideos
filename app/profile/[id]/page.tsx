import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Calendar, Github, Globe, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ProfilePage({ params }) {
  // In a real app, you would fetch the user data based on the ID
  const user = {
    id: params.id,
    name: "Alex Johnson",
    role: "Full Stack Developer",
    bio: "Passionate about creating innovative solutions that make everyday life easier. I specialize in React, Node.js, and cloud architecture. Always looking for interesting projects to collaborate on.",
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    website: "https://alexjohnson.dev",
    github: "alexjohnson",
    twitter: "alexjohnson",
    linkedin: "alexjohnson",
    joinedDate: "January 2022",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS", "GraphQL", "Next.js", "Express", "Docker", "CI/CD"],
    projects: [
      {
        id: "1",
        title: "AI-Powered Recipe Generator",
        description:
          "Building an application that generates personalized recipes based on available ingredients, dietary restrictions, and nutritional goals using machine learning algorithms.",
        role: "Project Lead",
        techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
        status: "In Progress",
      },
      {
        id: "5",
        title: "Community Garden Management",
        description:
          "Creating a platform for community gardens to manage plots, schedule volunteers, track harvests, and share knowledge about sustainable gardening practices.",
        role: "Frontend Developer",
        techStack: ["Vue.js", "Express", "PostgreSQL", "Leaflet"],
        status: "Completed",
      },
      {
        id: "8",
        title: "Ethical Fashion Marketplace",
        description:
          "Creating a platform that connects consumers with ethical and sustainable fashion brands, providing transparency about production methods and materials.",
        role: "Backend Developer",
        techStack: ["Next.js", "Strapi", "PostgreSQL", "Stripe"],
        status: "In Progress",
      },
    ],
    collaborations: [
      {
        id: "2",
        title: "Sustainable Smart Home System",
        description:
          "Creating an integrated smart home system focused on energy efficiency and sustainability, with solar integration and intelligent power management.",
        role: "Frontend Developer",
        techStack: ["React Native", "Python", "AWS"],
        status: "Completed",
      },
      {
        id: "4",
        title: "Language Learning Game",
        description:
          "Developing a gamified language learning application that uses spaced repetition and interactive challenges to make learning new languages fun and effective.",
        role: "Full Stack Developer",
        techStack: ["Flutter", "Firebase", "TensorFlow Lite"],
        status: "In Progress",
      },
    ],
    avatar: "/placeholder.svg?height=128&width=128",
    initials: "AJ",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 border">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>
                    <h1 className="mt-4 text-2xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">{user.role}</p>
                    <div className="flex items-center mt-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {user.location}
                    </div>
                    <div className="flex items-center mt-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Joined {user.joinedDate}
                    </div>
                    <div className="flex justify-center gap-2 mt-4">
                      <Button variant="outline" size="sm" className="w-full">
                        Message
                      </Button>
                      <Button size="sm" className="w-full">
                        Collaborate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{user.bio}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a href={`mailto:${user.email}`} className="text-sm hover:underline">
                      {user.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                    >
                      {user.website.replace("https://", "")}
                    </a>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <a
                      href={`https://github.com/${user.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={`https://twitter.com/${user.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`https://linkedin.com/in/${user.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="projects">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="projects">Projects ({user.projects.length})</TabsTrigger>
                  <TabsTrigger value="collaborations">Collaborations ({user.collaborations.length})</TabsTrigger>
                </TabsList>
                <TabsContent value="projects" className="space-y-4 mt-6">
                  {user.projects.map((project) => (
                    <Card key={project.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>
                              <Link href={`/projects/${project.id}`} className="hover:underline">
                                {project.title}
                              </Link>
                            </CardTitle>
                            <CardDescription>{project.role}</CardDescription>
                          </div>
                          <Badge variant={project.status === "Completed" ? "outline" : "secondary"}>
                            {project.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/projects/${project.id}`}>View Project</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="collaborations" className="space-y-4 mt-6">
                  {user.collaborations.map((collab) => (
                    <Card key={collab.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>
                              <Link href={`/projects/${collab.id}`} className="hover:underline">
                                {collab.title}
                              </Link>
                            </CardTitle>
                            <CardDescription>{collab.role}</CardDescription>
                          </div>
                          <Badge variant={collab.status === "Completed" ? "outline" : "secondary"}>
                            {collab.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{collab.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {collab.techStack.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="border-t pt-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/projects/${collab.id}`}>View Project</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>

              <Card>
                <CardHeader>
                  <CardTitle>Activity</CardTitle>
                  <CardDescription>Recent activity and contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
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
                            className="h-4 w-4"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>
                        <div className="w-px h-full bg-border"></div>
                      </div>
                      <div className="pb-8">
                        <p className="text-sm font-medium">Created a new project</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Started{" "}
                          <Link href="/projects/1" className="font-medium hover:underline">
                            AI-Powered Recipe Generator
                          </Link>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">2 weeks ago</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
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
                            className="h-4 w-4"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <div className="w-px h-full bg-border"></div>
                      </div>
                      <div className="pb-8">
                        <p className="text-sm font-medium">Joined a project</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Joined{" "}
                          <Link href="/projects/4" className="font-medium hover:underline">
                            Language Learning Game
                          </Link>{" "}
                          as Full Stack Developer
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">1 month ago</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
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
                            className="h-4 w-4"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                        </div>
                        <div className="w-px h-full bg-border"></div>
                      </div>
                      <div className="pb-8">
                        <p className="text-sm font-medium">Completed a project</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Finished work on{" "}
                          <Link href="/projects/2" className="font-medium hover:underline">
                            Sustainable Smart Home System
                          </Link>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">2 months ago</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
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
                            className="h-4 w-4"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Created a new project</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Started{" "}
                          <Link href="/projects/5" className="font-medium hover:underline">
                            Community Garden Management
                          </Link>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">3 months ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
