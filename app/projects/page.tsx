import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Filter, Heart, MessageSquare, Plus, Search, Users } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
              <p className="text-muted-foreground">Browse and discover project ideas from our community.</p>
            </div>
            <Button asChild>
              <Link href="/projects/new">
                <Plus className="mr-2 h-4 w-4" />
                Share Your Idea
              </Link>
            </Button>
          </div>

          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search projects..." className="pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort by</SelectLabel>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="trending">Trending</SelectItem>
                      <SelectItem value="comments">Most Comments</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="mr-2">
                    Previous
                  </Button>
                  <Button variant="outline">Next</Button>
                </div>
              </TabsContent>
              <TabsContent value="trending">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => p.trending)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="recent">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.slice(0, 6).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="featured">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p) => p.featured)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-6">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.category}</p>
            </div>
            {project.trending && (
              <Badge variant="secondary" className="flex items-center gap-1">
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
                  className="h-3 w-3 text-orange-500"
                >
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
                Trending
              </Badge>
            )}
            {project.featured && !project.trending && (
              <Badge variant="outline" className="flex items-center gap-1">
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
                  className="h-3 w-3 text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Featured
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
  )
}

const projects = [
  {
    id: "1",
    title: "AI-Powered Recipe Generator",
    category: "Web Application",
    description:
      "Building an application that generates personalized recipes based on available ingredients, dietary restrictions, and nutritional goals using machine learning algorithms.",
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
    trending: true,
    featured: true,
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
    featured: false,
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
    featured: true,
    author: {
      name: "Marcus Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
    likes: 87,
    comments: 19,
    collaborators: 4,
  },
  {
    id: "4",
    title: "Language Learning Game",
    category: "Mobile App",
    description:
      "Developing a gamified language learning application that uses spaced repetition and interactive challenges to make learning new languages fun and effective.",
    techStack: ["Flutter", "Firebase", "TensorFlow Lite", "i18n"],
    trending: false,
    featured: false,
    author: {
      name: "Elena Rodriguez",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ER",
    },
    likes: 64,
    comments: 15,
    collaborators: 2,
  },
  {
    id: "5",
    title: "Community Garden Management",
    category: "Web Application",
    description:
      "Creating a platform for community gardens to manage plots, schedule volunteers, track harvests, and share knowledge about sustainable gardening practices.",
    techStack: ["Vue.js", "Express", "PostgreSQL", "Leaflet"],
    trending: false,
    featured: true,
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DK",
    },
    likes: 72,
    comments: 28,
    collaborators: 6,
  },
  {
    id: "6",
    title: "Mental Health Tracker",
    category: "Health Tech",
    description:
      "Building an application that helps users track their mental health, providing insights, resources, and connecting them with professionals when needed.",
    techStack: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
    trending: true,
    featured: false,
    author: {
      name: "Olivia Taylor",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "OT",
    },
    likes: 112,
    comments: 41,
    collaborators: 4,
  },
  {
    id: "7",
    title: "Augmented Reality Education",
    category: "Education",
    description:
      "Developing an AR application that brings educational content to life, making complex subjects more engaging and easier to understand for students.",
    techStack: ["Unity", "ARKit", "ARCore", "C#"],
    trending: false,
    featured: false,
    author: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JW",
    },
    likes: 83,
    comments: 22,
    collaborators: 3,
  },
  {
    id: "8",
    title: "Ethical Fashion Marketplace",
    category: "E-commerce",
    description:
      "Creating a platform that connects consumers with ethical and sustainable fashion brands, providing transparency about production methods and materials.",
    techStack: ["Next.js", "Strapi", "PostgreSQL", "Stripe"],
    trending: false,
    featured: true,
    author: {
      name: "Sophia Patel",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SP",
    },
    likes: 76,
    comments: 18,
    collaborators: 5,
  },
  {
    id: "9",
    title: "Disaster Response Coordination",
    category: "Social Impact",
    description:
      "Building a system to coordinate disaster response efforts, connecting volunteers, tracking resources, and providing real-time information during emergencies.",
    techStack: ["React", "Firebase", "Google Maps API", "Twilio"],
    trending: true,
    featured: false,
    author: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MB",
    },
    likes: 94,
    comments: 27,
    collaborators: 7,
  },
]
