import Link from "next/link"
import { ChevronRight, Search, Filter, LayoutGrid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CategoriesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto px-4 py-6 space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
                            <p className="text-muted-foreground">Browse projects by category</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon">
                                <LayoutGrid className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <List className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <Link key={category.id} href={`/categories/${category.id}`} className="block">
                                <Card className="h-full hover:border-gray-400 transition-all">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center">
                                                {category.icon}
                                            </div>
                                            <Badge variant="outline">{category.count} projects</Badge>
                                        </div>
                                        <CardTitle className="text-xl mt-2">{category.name}</CardTitle>
                                        <CardDescription>{category.description}</CardDescription>
                                    </CardHeader>
                                    <CardFooter className="pt-0 text-sm text-muted-foreground">
                                        <div className="flex items-center justify-between w-full">
                                            <span>{category.trending} trending now</span>
                                            <ChevronRight className="h-4 w-4" />
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b pb-4">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
                        </div>
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                <span>Filters</span>
                            </Button>
                            <Select defaultValue="newest">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">Newest</SelectItem>
                                    <SelectItem value="popular">Most Popular</SelectItem>
                                    <SelectItem value="trending">Trending</SelectItem>
                                    <SelectItem value="updated">Recently Updated</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Tabs defaultValue="web-app" className="w-full">
                        <TabsList className="flex overflow-x-auto pb-2 mb-4">
                            <TabsTrigger value="all">All Categories</TabsTrigger>
                            <TabsTrigger value="web-app">Web App</TabsTrigger>
                            <TabsTrigger value="phone-app">Phone App</TabsTrigger>
                            <TabsTrigger value="chrome-extension">Chrome Extension</TabsTrigger>
                            <TabsTrigger value="agent">Agent</TabsTrigger>
                        </TabsList>

                        <TabsContent value="web-app" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {webAppProjects.map((project) => (
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
                                                <Badge>{project.category}</Badge>
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
                                                <div className="flex items-center gap-2">
                                                    <div className="flex -space-x-2">
                                                        {[1, 2, 3].map((i) => (
                                                            <div key={i} className="h-6 w-6 rounded-full bg-gray-200 border-2 border-white" />
                                                        ))}
                                                    </div>
                                                    <span>{project.collaborators} collaborators</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span>{project.likes} likes</span>
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

                        <TabsContent value="phone-app" className="space-y-6">
                            <div className="flex items-center justify-center py-12">
                                <div className="text-center">
                                    <h3 className="text-lg font-medium">Select a category to view projects</h3>
                                    <p className="text-muted-foreground mt-1">Browse projects by selecting a category from the tabs above</p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="chrome-extension" className="space-y-6">
                            <div className="flex items-center justify-center py-12">
                                <div className="text-center">
                                    <h3 className="text-lg font-medium">Select a category to view projects</h3>
                                    <p className="text-muted-foreground mt-1">Browse projects by selecting a category from the tabs above</p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="agent" className="space-y-6">
                            <div className="flex items-center justify-center py-12">
                                <div className="text-center">
                                    <h3 className="text-lg font-medium">Select a category to view projects</h3>
                                    <p className="text-muted-foreground mt-1">Browse projects by selecting a category from the tabs above</p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="all" className="space-y-6">
                            <div className="flex items-center justify-center py-12">
                                <div className="text-center">
                                    <h3 className="text-lg font-medium">Select a category to view projects</h3>
                                    <p className="text-muted-foreground mt-1">Browse projects by selecting a category from the tabs above</p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}

// Sample data
import { Globe, Smartphone, PuzzleIcon, Bot } from "lucide-react"
import Navbar from "@/components/navbar"

const categories = [
    {
        id: "web-app",
        name: "Web App",
        description: "Browser-based applications for desktop and mobile",
        count: 428,
        trending: 56,
        icon: <Globe className="h-6 w-6" />,
    },
    {
        id: "phone-app",
        name: "Phone App",
        description: "Native and cross-platform mobile applications",
        count: 312,
        trending: 42,
        icon: <Smartphone className="h-6 w-6" />,
    },
    {
        id: "chrome-extension",
        name: "Chrome Extension",
        description: "Browser extensions to enhance web browsing",
        count: 187,
        trending: 28,
        icon: <PuzzleIcon className="h-6 w-6" />,
    },
    {
        id: "agent",
        name: "Agent",
        description: "Autonomous AI agents that perform tasks",
        count: 143,
        trending: 38,
        icon: <Bot className="h-6 w-6" />,
    },
]

const webAppProjects = [
    {
        id: "1",
        title: "Collaborative Whiteboard App",
        author: "Sarah Johnson",
        category: "Web App",
        description: "A real-time collaborative whiteboard for remote teams with infinite canvas and smart drawing tools.",
        tags: ["Collaboration", "Design", "Remote Work"],
        collaborators: 8,
        likes: 124,
    },
    {
        id: "2",
        title: "Personal Finance Dashboard",
        author: "Michael Chen",
        category: "Web App",
        description:
            "A comprehensive dashboard for tracking expenses, investments, and financial goals with AI-powered insights.",
        tags: ["Finance", "Dashboard", "Analytics"],
        collaborators: 5,
        likes: 98,
    },
    {
        id: "3",
        title: "Learning Management System",
        author: "Emma Rodriguez",
        category: "Web App",
        description: "A modern LMS with interactive courses, progress tracking, and social learning features.",
        tags: ["Education", "E-Learning", "SaaS"],
        collaborators: 12,
        likes: 156,
    },
    {
        id: "4",
        title: "Project Management Tool",
        author: "David Park",
        category: "Web App",
        description: "A streamlined project management tool with kanban boards, time tracking, and resource allocation.",
        tags: ["Productivity", "Teams", "Business"],
        collaborators: 6,
        likes: 87,
    },
    {
        id: "5",
        title: "E-commerce Analytics Platform",
        author: "Alex Thompson",
        category: "Web App",
        description: "Advanced analytics for e-commerce businesses with sales forecasting and inventory optimization.",
        tags: ["E-commerce", "Analytics", "Business"],
        collaborators: 9,
        likes: 112,
    },
    {
        id: "6",
        title: "Content Creation Studio",
        author: "Olivia Wilson",
        category: "Web App",
        description: "All-in-one platform for creating, editing, and scheduling content across multiple platforms.",
        tags: ["Content", "Marketing", "Creative"],
        collaborators: 4,
        likes: 76,
    },
]
