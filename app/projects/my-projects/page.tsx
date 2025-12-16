"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, BarChart3, Heart, Eye } from "lucide-react"
import Navbar from "@/components/navbar"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyProjectsPage() {
    const activeProjects = myProjects.filter(p => p.status === "In Progress");
    const completedProjects = myProjects.filter(p => p.status === "Completed");

    const totalViews = myProjects.reduce((acc, curr) => acc + (curr.views || 0), 0);
    const totalLikes = myProjects.reduce((acc, curr) => acc + curr.likes, 0);

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container px-4 py-6 md:py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
                            <p className="text-muted-foreground">Manage and track your projects.</p>
                        </div>
                        <Button asChild>
                            <Link href="/projects/new">
                                <Plus className="mr-2 h-4 w-4" />
                                Create New Project
                            </Link>
                        </Button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 mb-8">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold">{myProjects.length}</div>
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <BarChart3 className="h-5 w-5" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold">{totalViews}</div>
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <Eye className="h-5 w-5" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold">{totalLikes}</div>
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <Heart className="h-5 w-5" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="mb-6">
                            <TabsTrigger value="all">All Projects</TabsTrigger>
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger value="completed">Completed</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {myProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="active">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {activeProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                                {activeProjects.length === 0 && <EmptyState />}
                            </div>
                        </TabsContent>

                        <TabsContent value="completed">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {completedProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                                {completedProjects.length === 0 && <EmptyState type="completed" />}
                            </div>
                        </TabsContent>
                    </Tabs>

                    {myProjects.length === 0 && <EmptyState />}
                </div>
            </main>
        </div>
    )
}

function EmptyState({ type = "projects" }: { type?: string }) {
    return (
        <div className="col-span-full text-center py-20 bg-muted/20 rounded-lg border border-dashed">
            <h3 className="text-lg font-medium">No {type} found</h3>
            <p className="text-muted-foreground mt-1 mb-4">
                {type === "projects" ? "Start your journey by creating your first project." : `You don't have any ${type} projects yet.`}
            </p>
            {type === "projects" && (
                <Button asChild>
                    <Link href="/projects/new">Create Project</Link>
                </Button>
            )}
        </div>
    )
}

// Mock data
const myProjects = [
    {
        id: "1",
        title: "AI-Powered Recipe Generator",
        category: "Web Application",
        description:
            "Building an application that generates personalized recipes based on available ingredients, dietary restrictions, and nutritional goals using machine learning algorithms.",
        techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
        status: "In Progress",
        trending: true,
        author: {
            name: "You",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "YO",
        },
        likes: 128,
        views: 1240,
        comments: 32,
        collaborators: 5,
    },
    {
        id: "5",
        title: "Community Garden Management",
        category: "Web Application",
        description:
            "Creating a platform for community gardens to manage plots, schedule volunteers, track harvests, and share knowledge about sustainable gardening practices.",
        techStack: ["Vue.js", "Express", "PostgreSQL", "Leaflet"],
        status: "Completed",
        author: {
            name: "You",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "YO",
        },
        likes: 72,
        views: 850,
        comments: 28,
        collaborators: 6,
    },
    {
        id: "8",
        title: "Ethical Fashion Marketplace",
        category: "E-commerce",
        description:
            "Creating a platform that connects consumers with ethical and sustainable fashion brands, providing transparency about production methods and materials.",
        techStack: ["Next.js", "Strapi", "PostgreSQL", "Stripe"],
        status: "In Progress",
        author: {
            name: "You",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "YO",
        },
        likes: 76,
        views: 620,
        comments: 18,
        collaborators: 5,
    },
]
