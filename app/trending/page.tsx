import Link from "next/link"
import { ArrowUp, BarChart2, Users, MessageSquare, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TrendingPage() {
  return (
    <main className="container mx-auto px-4 py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trending</h1>
          <p className="text-muted-foreground">Discover what's popular in the community right now</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="week">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3 mb-4">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
          <TabsTrigger value="collaborators">Collaborators</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-semibold">
                        <Link href={`/projects/${project.id}`} className="hover:underline">
                          {project.title}
                        </Link>
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>By {project.author}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1 bg-gray-50">
                      <ArrowUp className="h-3 w-3 text-green-600" />
                      <span className="text-green-600">{project.growth}%</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 text-sm text-muted-foreground border-t">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{project.collaborators}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{project.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BarChart2 className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock className="h-3 w-3" />
                      <span>{project.timeAgo}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>

        <TabsContent value="topics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTopics.map((topic) => (
              <Card
                key={topic.id}
                className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold">#{topic.name}</CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1 bg-gray-50">
                      <ArrowUp className="h-3 w-3 text-green-600" />
                      <span className="text-green-600">{topic.growth}%</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{topic.projectCount} projects this week</p>
                  <p className="text-sm text-muted-foreground mt-2">{topic.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/topics/${topic.id}`}>Explore Topic</Link>
                  </Button>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{topic.activeUsers} active users</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>

        <TabsContent value="collaborators" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCollaborators.map((collaborator) => (
              <Card
                key={collaborator.id}
                className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=48&width=48&text=${collaborator.name.charAt(0)}`}
                        alt={collaborator.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        <Link href={`/profile/${collaborator.id}`} className="hover:underline">
                          {collaborator.name}
                        </Link>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{collaborator.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {collaborator.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{collaborator.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BarChart2 className="h-4 w-4" />
                      <span>{collaborator.projectCount} projects</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{collaborator.connections} connections</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/profile/${collaborator.id}`}>View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

// Sample data
const trendingProjects = [
  {
    id: "1",
    title: "AI-Powered Content Generator",
    author: "Sarah Johnson",
    description: "A tool that uses AI to generate high-quality content for blogs, social media, and more.",
    tags: ["AI", "Content", "Web App"],
    collaborators: 8,
    comments: 24,
    views: 1.2 + "k",
    timeAgo: "2 days ago",
    growth: 128,
  },
  {
    id: "2",
    title: "Decentralized Finance Dashboard",
    author: "Michael Chen",
    description: "A comprehensive dashboard for tracking and managing DeFi investments across multiple chains.",
    tags: ["DeFi", "Blockchain", "Dashboard"],
    collaborators: 5,
    comments: 18,
    views: 876,
    timeAgo: "1 day ago",
    growth: 95,
  },
  {
    id: "3",
    title: "Sustainable Supply Chain Tracker",
    author: "Emma Rodriguez",
    description: "Track and verify sustainability metrics across complex supply chains using blockchain.",
    tags: ["Sustainability", "Blockchain", "Enterprise"],
    collaborators: 12,
    comments: 31,
    views: 2.4 + "k",
    timeAgo: "3 days ago",
    growth: 87,
  },
  {
    id: "4",
    title: "Mental Health Companion App",
    author: "David Park",
    description: "An app that provides daily mental health check-ins, guided meditation, and personalized resources.",
    tags: ["Health", "Mobile App", "AI"],
    collaborators: 6,
    comments: 42,
    views: 3.1 + "k",
    timeAgo: "5 days ago",
    growth: 76,
  },
  {
    id: "5",
    title: "Collaborative Code Editor",
    author: "Alex Thompson",
    description: "Real-time collaborative code editor with integrated AI suggestions and version control.",
    tags: ["Development", "Collaboration", "Web App"],
    collaborators: 9,
    comments: 27,
    views: 1.8 + "k",
    timeAgo: "2 days ago",
    growth: 65,
  },
  {
    id: "6",
    title: "AR Navigation for Urban Exploration",
    author: "Olivia Wilson",
    description: "Augmented reality app that helps users discover hidden gems and historical sites in urban areas.",
    tags: ["AR", "Mobile App", "Travel"],
    collaborators: 4,
    comments: 19,
    views: 925,
    timeAgo: "4 days ago",
    growth: 58,
  },
]

const trendingTopics = [
  {
    id: "1",
    name: "AI",
    growth: 156,
    projectCount: 428,
    description:
      "Artificial Intelligence projects including machine learning, natural language processing, and computer vision.",
    activeUsers: 1243,
  },
  {
    id: "2",
    name: "Web3",
    growth: 132,
    projectCount: 312,
    description: "Projects related to blockchain, cryptocurrency, NFTs, and decentralized applications.",
    activeUsers: 876,
  },
  {
    id: "3",
    name: "Sustainability",
    growth: 98,
    projectCount: 187,
    description: "Projects focused on environmental sustainability, clean energy, and reducing carbon footprints.",
    activeUsers: 654,
  },
  {
    id: "4",
    name: "AR",
    growth: 87,
    projectCount: 143,
    description: "Augmented reality applications across various industries including gaming, education, and retail.",
    activeUsers: 521,
  },
  {
    id: "5",
    name: "Health",
    growth: 76,
    projectCount: 231,
    description: "Health and wellness applications, medical technology, and fitness tracking solutions.",
    activeUsers: 789,
  },
  {
    id: "6",
    name: "EdTech",
    growth: 65,
    projectCount: 176,
    description: "Educational technology projects aimed at improving learning experiences and outcomes.",
    activeUsers: 432,
  },
]

const trendingCollaborators = [
  {
    id: "1",
    name: "Alex Morgan",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "TypeScript"],
    bio: "Passionate about building scalable web applications and mentoring junior developers.",
    projectCount: 12,
    connections: 87,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "UX/UI Designer",
    skills: ["UI Design", "User Research", "Figma"],
    bio: "Creating intuitive and accessible user experiences that solve real problems.",
    projectCount: 8,
    connections: 64,
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "AI Engineer",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    bio: "Developing AI solutions that make technology more helpful and accessible to everyone.",
    projectCount: 15,
    connections: 112,
  },
  {
    id: "4",
    name: "Sofia Rodriguez",
    role: "Product Manager",
    skills: ["Product Strategy", "Agile", "Data Analysis"],
    bio: "Turning innovative ideas into successful products through strategic planning and execution.",
    projectCount: 9,
    connections: 93,
  },
  {
    id: "5",
    name: "Jamal Williams",
    role: "Blockchain Developer",
    skills: ["Solidity", "Smart Contracts", "Web3"],
    bio: "Building the decentralized future through innovative blockchain applications.",
    projectCount: 11,
    connections: 76,
  },
  {
    id: "6",
    name: "Emma Chen",
    role: "Mobile Developer",
    skills: ["React Native", "Swift", "Kotlin"],
    bio: "Creating seamless mobile experiences that users love across iOS and Android platforms.",
    projectCount: 14,
    connections: 81,
  },
]
