import Link from "next/link"
import { ArrowUp, BarChart2, Users, MessageSquare, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import { ProjectCard } from "@/components/project-card"
import { TopicCard } from "@/components/topic-card"
import { CollaboratorCard } from "@/components/collaborator-card"

export default function TrendingPage() {
    return (
        <div className="flex min-h-screen flex-col">
          
            <main className="flex-1">
                <div className="container mx-auto px-4 py-6 space-y-8">
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
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>

                            <div className="flex justify-center">
                                <Button variant="outline">Load More</Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="topics" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {trendingTopics.map((topic) => (
                                    <TopicCard key={topic.id} topic={topic} />
                                ))}
                            </div>

                            <div className="flex justify-center">
                                <Button variant="outline">Load More</Button>
                            </div>
                        </TabsContent>

                        <TabsContent value="collaborators" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {trendingCollaborators.map((collaborator) => (
                                    <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
                                ))}
                            </div>

                            <div className="flex justify-center">
                                <Button variant="outline">Load More</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}

// Sample data
const trendingProjects = [
    {
        id: "1",
        title: "AI-Powered Content Generator",
        category: "Web Application",
        author: {
            name: "Sarah Johnson",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "SJ"
        },
        description: "A tool that uses AI to generate high-quality content for blogs, social media, and more.",
        techStack: ["AI", "Content", "Web App"],
        collaborators: 8,
        comments: 24,
        likes: 1200,
        trending: true,
        featured: true
    },
    {
        id: "2",
        title: "Decentralized Finance Dashboard",
        category: "Blockchain",
        author: {
            name: "Michael Chen",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "MC"
        },
        description: "A comprehensive dashboard for tracking and managing DeFi investments across multiple chains.",
        techStack: ["DeFi", "Blockchain", "Dashboard"],
        collaborators: 5,
        comments: 18,
        likes: 876,
        trending: true
    },
    {
        id: "3",
        title: "Sustainable Supply Chain Tracker",
        category: "Enterprise",
        author: {
            name: "Emma Rodriguez",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "ER"
        },
        description: "Track and verify sustainability metrics across complex supply chains using blockchain.",
        techStack: ["Sustainability", "Blockchain", "Enterprise"],
        collaborators: 12,
        comments: 31,
        likes: 2400,
        trending: true
    },
    {
        id: "4",
        title: "Mental Health Companion App",
        category: "Mobile App",
        author: {
            name: "David Park",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "DP"
        },
        description: "An app that provides daily mental health check-ins, guided meditation, and personalized resources.",
        techStack: ["Health", "Mobile App", "AI"],
        collaborators: 6,
        comments: 42,
        likes: 3100,
        trending: true,
        featured: true
    },
    {
        id: "5",
        title: "Collaborative Code Editor",
        category: "Web Application",
        author: {
            name: "Alex Thompson",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "AT"
        },
        description: "Real-time collaborative code editor with integrated AI suggestions and version control.",
        techStack: ["Development", "Collaboration", "Web App"],
        collaborators: 9,
        comments: 27,
        likes: 1800,
        trending: true
    },
    {
        id: "6",
        title: "AR Navigation for Urban Exploration",
        category: "Mobile App",
        author: {
            name: "Olivia Wilson",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "OW"
        },
        description: "Augmented reality app that helps users discover hidden gems and historical sites in urban areas.",
        techStack: ["AR", "Mobile App", "Travel"],
        collaborators: 4,
        comments: 19,
        likes: 925,
        trending: true
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
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "AM",
        projects: 12,
        collaborations: 15
    },
    {
        id: "2",
        name: "Priya Sharma",
        role: "UX/UI Designer",
        skills: ["UI Design", "User Research", "Figma"],
        bio: "Creating intuitive and accessible user experiences that solve real problems.",
        projectCount: 8,
        connections: 64,
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "PS",
        projects: 8,
        collaborations: 10
    },
    {
        id: "3",
        name: "Marcus Johnson",
        role: "AI Engineer",
        skills: ["Machine Learning", "Python", "TensorFlow"],
        bio: "Developing AI solutions that make technology more helpful and accessible to everyone.",
        projectCount: 15,
        connections: 112,
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "MJ",
        projects: 15,
        collaborations: 20
    },
    {
        id: "4",
        name: "Sofia Rodriguez",
        role: "Product Manager",
        skills: ["Product Strategy", "Agile", "Data Analysis"],
        bio: "Turning innovative ideas into successful products through strategic planning and execution.",
        projectCount: 9,
        connections: 93,
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "SR",
        projects: 9,
        collaborations: 12
    },
    {
        id: "5",
        name: "Jamal Williams",
        role: "Blockchain Developer",
        skills: ["Solidity", "Smart Contracts", "Web3"],
        bio: "Building the decentralized future through innovative blockchain applications.",
        projectCount: 11,
        connections: 76,
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "JW",
        projects: 11,
        collaborations: 14
    },
    {
        id: "6",
        name: "Emma Chen",
        role: "Mobile Developer",
        skills: ["React Native", "Swift", "Kotlin"],
        bio: "Creating seamless mobile experiences that users love across iOS and Android platforms.",
        projectCount: 14,
        connections: 81,
        avatar: "/placeholder.svg?height=48&width=48",
        initials: "EC",
        projects: 14,
        collaborations: 18
    },
]
