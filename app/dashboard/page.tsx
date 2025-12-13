"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Bell,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  MessageSquare,
  Plus,
  Settings,
  Users,
} from "lucide-react"
import Navbar from "@/components/navbar"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Manage your projects, collaborations, and activity.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Bell className="h-4 w-4" />
                Notifications
                <Badge className="ml-1 bg-primary text-primary-foreground">3</Badge>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">12</div>
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-green-500 font-medium">+2</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Collaborations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">8</div>
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-green-500 font-medium">+1</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Project Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">243</div>
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <Heart className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  <span className="text-green-500 font-medium">+18%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-6 grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Projects</CardTitle>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/projects/my-projects">View all</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {recentProjects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2 text-primary">
                              <project.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <Link href={`/projects/${project.id}`} className="font-medium hover:underline">
                                {project.title}
                              </Link>
                              <p className="text-xs text-muted-foreground">{project.updatedAt}</p>
                            </div>
                          </div>
                          <Badge variant={project.status === "Completed" ? "outline" : "secondary"}>
                            {project.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <Button asChild className="w-full">
                      <Link href="/projects/new">
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Project
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle>Collaboration Requests</CardTitle>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/collaborations/requests">View all</Link>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {collaborationRequests.map((request) => (
                        <div key={request.id} className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={request.user.avatar} alt={request.user.name} />
                              <AvatarFallback>{request.user.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-1">
                                <span className="font-medium">{request.user.name}</span>
                                <span className="text-sm text-muted-foreground">wants to join</span>
                              </div>
                              <Link
                                href={`/projects/${request.projectId}`}
                                className="text-sm text-primary hover:underline"
                              >
                                {request.projectTitle}
                              </Link>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                            <Button size="sm">Accept</Button>
                          </div>
                        </div>
                      ))}
                      {collaborationRequests.length === 0 && (
                        <div className="p-4 text-center text-muted-foreground">No pending collaboration requests</div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>Project milestones and deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline) => (
                      <div key={deadline.id} className="flex items-center gap-4">
                        <div className="rounded-md bg-primary/10 p-2 text-primary">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{deadline.title}</p>
                              <Link
                                href={`/projects/${deadline.projectId}`}
                                className="text-sm text-primary hover:underline"
                              >
                                {deadline.projectTitle}
                              </Link>
                            </div>
                            <Badge
                              variant={
                                deadline.daysLeft <= 3
                                  ? "destructive"
                                  : deadline.daysLeft <= 7
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {deadline.daysLeft} days left
                            </Badge>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            Due on {deadline.dueDate}
                          </div>
                        </div>
                      </div>
                    ))}
                    {upcomingDeadlines.length === 0 && (
                      <div className="text-center text-muted-foreground">No upcoming deadlines</div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates from your projects and collaborations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                            <activity.icon className="h-4 w-4" />
                          </div>
                          {activity.id !== recentActivity[recentActivity.length - 1].id && (
                            <div className="w-px h-full bg-border"></div>
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="my-projects" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">My Projects</h2>
                <Button asChild>
                  <Link href="/projects/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Project
                  </Link>
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="hover:text-primary transition-colors">
                            <Link href={`/projects/${project.id}`}>{project.title}</Link>
                          </CardTitle>
                          <CardDescription>{project.category}</CardDescription>
                        </div>
                        <Badge variant={project.status === "Completed" ? "outline" : "secondary"}>
                          {project.status}
                        </Badge>
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
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/projects/${project.id}`}>Manage</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaborations" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">My Collaborations</h2>
                <Button variant="outline" asChild>
                  <Link href="/projects">Find Projects</Link>
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myCollaborations.map((collab) => (
                  <Card key={collab.id} className="overflow-hidden">
                    <CardHeader className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <CardTitle className="hover:text-primary transition-colors">
                            <Link href={`/projects/${collab.id}`}>{collab.title}</Link>
                          </CardTitle>
                          <CardDescription>Your role: {collab.yourRole}</CardDescription>
                        </div>
                        <Badge variant={collab.status === "Completed" ? "outline" : "secondary"}>{collab.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="line-clamp-3 text-muted-foreground">{collab.description}</p>
                      <div className="mt-4">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">Project Lead:</p>
                          <div className="flex items-center gap-1">
                            <Avatar className="h-5 w-5">
                              <AvatarImage src={collab.projectLead.avatar} alt={collab.projectLead.name} />
                              <AvatarFallback>{collab.projectLead.initials}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{collab.projectLead.name}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 border-t flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">Joined {collab.joinedDate}</div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/projects/${collab.id}`}>View Project</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Activity</CardTitle>
                  <CardDescription>Recent actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {activityFeed.map((activity) => (
                      <div key={activity.id} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                            <activity.icon className="h-4 w-4" />
                          </div>
                          {activity.id !== activityFeed[activityFeed.length - 1].id && (
                            <div className="w-px h-full bg-border"></div>
                          )}
                        </div>
                        <div className="pb-8">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                          {activity.projectId && (
                            <Link
                              href={`/projects/${activity.projectId}`}
                              className="mt-2 inline-flex items-center text-sm text-primary hover:underline"
                            >
                              View Project
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

// Sample data
const recentProjects = [
  {
    id: "1",
    title: "AI-Powered Recipe Generator",
    status: "In Progress",
    updatedAt: "Updated 2 days ago",
    icon: BarChart3,
  },
  {
    id: "5",
    title: "Community Garden Management",
    status: "Completed",
    updatedAt: "Updated 1 week ago",
    icon: CheckCircle2,
  },
  {
    id: "8",
    title: "Ethical Fashion Marketplace",
    status: "In Progress",
    updatedAt: "Updated 3 days ago",
    icon: BarChart3,
  },
]

const collaborationRequests = [
  {
    id: "req1",
    user: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=36&width=36",
      initials: "ER",
    },
    projectId: "1",
    projectTitle: "AI-Powered Recipe Generator",
    role: "UI/UX Designer",
    message:
      "I'd love to help with the user interface design for this project. I have experience in designing food-related apps.",
  },
  {
    id: "req2",
    user: {
      name: "Michael Wong",
      avatar: "/placeholder.svg?height=36&width=36",
      initials: "MW",
    },
    projectId: "8",
    projectTitle: "Ethical Fashion Marketplace",
    role: "Backend Developer",
    message:
      "I'm interested in helping with the backend development. I have experience with e-commerce platforms and payment integrations.",
  },
]

const upcomingDeadlines = [
  {
    id: "deadline1",
    title: "Complete UI Prototype",
    projectId: "1",
    projectTitle: "AI-Powered Recipe Generator",
    dueDate: "March 28, 2025",
    daysLeft: 6,
  },
  {
    id: "deadline2",
    title: "Database Schema Finalization",
    projectId: "8",
    projectTitle: "Ethical Fashion Marketplace",
    dueDate: "March 25, 2025",
    daysLeft: 3,
  },
  {
    id: "deadline3",
    title: "API Integration Testing",
    projectId: "1",
    projectTitle: "AI-Powered Recipe Generator",
    dueDate: "April 5, 2025",
    daysLeft: 14,
  },
]

const recentActivity = [
  {
    id: "activity1",
    title: "New collaboration request",
    description: "Emily Rodriguez wants to join AI-Powered Recipe Generator as UI/UX Designer",
    time: "2 hours ago",
    icon: Users,
  },
  {
    id: "activity2",
    title: "Project milestone completed",
    description: "Database Schema Finalization for Ethical Fashion Marketplace is now complete",
    time: "Yesterday",
    icon: CheckCircle2,
  },
  {
    id: "activity3",
    title: "New comment on your project",
    description: "David Chen commented on AI-Powered Recipe Generator",
    time: "2 days ago",
    icon: MessageSquare,
  },
  {
    id: "activity4",
    title: "Project liked",
    description: "5 people liked your Community Garden Management project",
    time: "3 days ago",
    icon: Heart,
  },
]

const myProjects = [
  {
    id: "1",
    title: "AI-Powered Recipe Generator",
    category: "Web Application",
    description:
      "Building an application that generates personalized recipes based on available ingredients, dietary restrictions, and nutritional goals using machine learning algorithms.",
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
    status: "In Progress",
    likes: 128,
    comments: 32,
    collaborators: 5,
  },
  {
    id: "5",
    title: 'Community Garden Management",agement',
    category: "Web Application",
    description:
      "Creating a platform for community gardens to manage plots, schedule volunteers, track harvests, and share knowledge about sustainable gardening practices.",
    techStack: ["Vue.js", "Express", "PostgreSQL", "Leaflet"],
    status: "Completed",
    likes: 72,
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
    likes: 76,
    comments: 18,
    collaborators: 5,
  },
]

const myCollaborations = [
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
]

const activityFeed = [
  {
    id: "feed1",
    title: "Created a new project",
    description: "You created AI-Powered Recipe Generator",
    time: "2 weeks ago",
    projectId: "1",
    icon: Plus,
  },
  {
    id: "feed2",
    title: "Joined a project",
    description: "You joined Language Learning Game as Full Stack Developer",
    time: "1 month ago",
    projectId: "4",
    icon: Users,
  },
  {
    id: "feed3",
    title: "Completed a project",
    description: "You marked Community Garden Management as completed",
    time: "2 months ago",
    projectId: "5",
    icon: CheckCircle2,
  },
  {
    id: "feed4",
    title: "Created a new project",
    description: "You created Ethical Fashion Marketplace",
    time: "3 months ago",
    projectId: "8",
    icon: Plus,
  },
]
