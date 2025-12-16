"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Users, Clock, CheckCircle2 } from "lucide-react"
import Navbar from "@/components/navbar"
import { CollaborationCard, Collaboration } from "@/components/collaboration-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyCollaborationsPage() {
    const activeCollaborations = myCollaborations.filter(c => c.status === "In Progress");
    const pastCollaborations = myCollaborations.filter(c => c.status === "Completed");
    // Mocking pending requests for the stats, though they aren't in the main list
    const pendingRequestsCount = 2;

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container px-4 py-6 md:py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">My Collaborations</h1>
                            <p className="text-muted-foreground">Projects you are collaborating on.</p>
                        </div>
                        <Button variant="outline" asChild>
                            <Link href="/projects">
                                <Search className="mr-2 h-4 w-4" />
                                Find Projects
                            </Link>
                        </Button>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3 mb-8">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Active Collaborations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold">{activeCollaborations.length}</div>
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <Users className="h-5 w-5" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Past Collaborations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold">{pastCollaborations.length}</div>
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold">{pendingRequestsCount}</div>
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                </div>
                                <Button variant="link" className="p-0 h-auto text-xs mt-2" asChild>
                                    <Link href="/collaborators/requests">View Requests</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <Tabs defaultValue="active" className="w-full">
                        <TabsList className="mb-6">
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger value="past">Past</TabsTrigger>
                        </TabsList>

                        <TabsContent value="active">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {activeCollaborations.map((collab) => (
                                    <CollaborationCard key={collab.id} collaboration={collab} showManageButtons={true} />
                                ))}
                                {activeCollaborations.length === 0 && <EmptyState type="active collaborations" />}
                            </div>
                        </TabsContent>

                        <TabsContent value="past">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pastCollaborations.map((collab) => (
                                    <CollaborationCard key={collab.id} collaboration={collab} />
                                ))}
                                {pastCollaborations.length === 0 && (
                                    <EmptyState type="past collaborations" />
                                )}
                            </div>
                        </TabsContent>
                    </Tabs>

                    {myCollaborations.length === 0 && <EmptyState />}
                </div>
            </main>
        </div>
    )
}

function EmptyState({ type = "collaborations" }: { type?: string }) {
    return (
        <div className="col-span-full text-center py-20 bg-muted/20 rounded-lg border border-dashed">
            <h3 className="text-lg font-medium">No {type} found</h3>
            <p className="text-muted-foreground mt-1 mb-4">
                {type.includes("active") ? "You don't have any active collaborations." : "Join projects to start collaborating."}
            </p>
            <Button asChild>
                <Link href="/projects">Find Projects</Link>
            </Button>
        </div>
    )
}

// Mock data
const myCollaborations: Collaboration[] = [
    {
        id: "2",
        title: "Sustainable Smart Home System",
        description:
            "Creating an integrated smart home system focused on energy efficiency and sustainability, with solar integration and intelligent power management.",
        yourRole: "Frontend Developer",
        status: "In Progress",
        joinedDate: "January 15, 2025",
        projectLead: {
            name: "Samantha Lee",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "SL",
        },
    },
    {
        id: "4",
        title: "Language Learning Game",
        description:
            "Developing a gamified language learning application that uses spaced repetition and interactive challenges to make learning new languages fun and effective.",
        yourRole: "Full Stack Developer",
        status: "In Progress",
        joinedDate: "February 3, 2025",
        projectLead: {
            name: "Elena Rodriguez",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "ER",
        },
    },
    {
        id: "9",
        title: "Disaster Response Coordination",
        description:
            "Building a system to coordinate disaster response efforts, connecting volunteers, tracking resources, and providing real-time information during emergencies.",
        yourRole: "Backend Developer",
        status: "In Progress",
        joinedDate: "March 1, 2025",
        projectLead: {
            name: "Michael Brown",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "MB",
        },
    },
    {
        id: "12",
        title: "Local Art Showcase",
        description:
            "A platform for local artists to showcase their work and connect with potential buyers in their community.",
        yourRole: "UI Designer",
        status: "Completed",
        joinedDate: "November 10, 2024",
        projectLead: {
            name: "Art Lover",
            avatar: "/placeholder.svg?height=32&width=32",
            initials: "AL",
        },
    },
]
