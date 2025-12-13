"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, CheckCircle, Clock, Search, X } from "lucide-react"
import Navbar from "@/components/navbar"

export default function CollaborationRequestsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredIncoming = incomingRequests.filter(
    (request) =>
      request.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredOutgoing = outgoingRequests.filter(
    (request) =>
      request.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.projectOwner.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Collaboration Requests</h1>
              <p className="text-muted-foreground">
                Manage incoming and outgoing collaboration requests for your projects.
              </p>
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search requests..."
                className="pl-8 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Tabs defaultValue="incoming" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="incoming">
                Incoming Requests
                {incomingRequests.filter((r) => r.status === "pending").length > 0 && (
                  <Badge className="ml-2" variant="secondary">
                    {incomingRequests.filter((r) => r.status === "pending").length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="outgoing">
                Outgoing Requests
                {outgoingRequests.filter((r) => r.status === "pending").length > 0 && (
                  <Badge className="ml-2" variant="secondary">
                    {outgoingRequests.filter((r) => r.status === "pending").length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="incoming" className="space-y-6">
              <div className="grid gap-4">
                <h2 className="text-xl font-bold">Pending Requests</h2>
                {filteredIncoming.filter((r) => r.status === "pending").length > 0 ? (
                  filteredIncoming
                    .filter((r) => r.status === "pending")
                    .map((request) => (
                      <Card key={request.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-12 w-12 border">
                                <AvatarImage src={request.user.avatar} alt={request.user.name} />
                                <AvatarFallback>{request.user.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                                  <h3 className="font-medium">{request.user.name}</h3>
                                  <p className="text-sm text-muted-foreground">wants to join your project</p>
                                  <Link
                                    href={`/projects/${request.projectId}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {request.projectTitle}
                                  </Link>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  <span className="font-medium">Role:</span> {request.role}
                                </p>
                                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  Requested {request.requestedAt}
                                </div>
                                <div className="mt-2 p-3 bg-muted rounded-md">
                                  <p className="text-sm italic">{request.message}</p>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-4 md:mt-0">
                              <Button variant="outline" size="sm" className="w-full md:w-auto">
                                <X className="mr-1 h-4 w-4" />
                                Decline
                              </Button>
                              <Button size="sm" className="w-full md:w-auto">
                                <CheckCircle className="mr-1 h-4 w-4" />
                                Accept
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-lg">
                    <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No pending requests</h3>
                    <p className="text-muted-foreground text-center mt-1">
                      {searchQuery
                        ? "No requests match your search."
                        : "You don't have any pending collaboration requests at the moment."}
                    </p>
                  </div>
                )}
              </div>

              <Separator />

              <div className="grid gap-4">
                <h2 className="text-xl font-bold">Past Requests</h2>
                {filteredIncoming.filter((r) => r.status !== "pending").length > 0 ? (
                  filteredIncoming
                    .filter((r) => r.status !== "pending")
                    .map((request) => (
                      <Card key={request.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-12 w-12 border">
                                <AvatarImage src={request.user.avatar} alt={request.user.name} />
                                <AvatarFallback>{request.user.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                                  <h3 className="font-medium">{request.user.name}</h3>
                                  <p className="text-sm text-muted-foreground">requested to join your project</p>
                                  <Link
                                    href={`/projects/${request.projectId}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {request.projectTitle}
                                  </Link>
                                </div>
                                <div className="flex items-center mt-1">
                                  <Badge variant={request.status === "accepted" ? "outline" : "secondary"}>
                                    {request.status === "accepted" ? "Accepted" : "Declined"}
                                  </Badge>
                                  <span className="ml-2 text-sm text-muted-foreground">{request.respondedAt}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              {request.status === "accepted" ? (
                                <Button variant="outline" size="sm">
                                  Message
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm">
                                  Reconsider
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-lg">
                    <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No past requests</h3>
                    <p className="text-muted-foreground text-center mt-1">
                      {searchQuery
                        ? "No requests match your search."
                        : "You haven't responded to any collaboration requests yet."}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="outgoing" className="space-y-6">
              <div className="grid gap-4">
                <h2 className="text-xl font-bold">Pending Requests</h2>
                {filteredOutgoing.filter((r) => r.status === "pending").length > 0 ? (
                  filteredOutgoing
                    .filter((r) => r.status === "pending")
                    .map((request) => (
                      <Card key={request.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-12 w-12 border">
                                <AvatarImage src={request.projectOwner.avatar} alt={request.projectOwner.name} />
                                <AvatarFallback>{request.projectOwner.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                                  <p className="text-sm text-muted-foreground">You requested to join</p>
                                  <Link
                                    href={`/projects/${request.projectId}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {request.projectTitle}
                                  </Link>
                                  <p className="text-sm text-muted-foreground">by</p>
                                  <h3 className="font-medium">{request.projectOwner.name}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                  <span className="font-medium">Role:</span> {request.role}
                                </p>
                                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                  <Clock className="mr-1 h-3 w-3" />
                                  Requested {request.requestedAt}
                                </div>
                                <div className="mt-2 p-3 bg-muted rounded-md">
                                  <p className="text-sm italic">{request.message}</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm">
                                Cancel Request
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-lg">
                    <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No pending requests</h3>
                    <p className="text-muted-foreground text-center mt-1">
                      {searchQuery
                        ? "No requests match your search."
                        : "You don't have any pending outgoing collaboration requests."}
                    </p>
                    <Button className="mt-4" asChild>
                      <Link href="/projects">Find Projects</Link>
                    </Button>
                  </div>
                )}
              </div>

              <Separator />

              <div className="grid gap-4">
                <h2 className="text-xl font-bold">Past Requests</h2>
                {filteredOutgoing.filter((r) => r.status !== "pending").length > 0 ? (
                  filteredOutgoing
                    .filter((r) => r.status !== "pending")
                    .map((request) => (
                      <Card key={request.id}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-12 w-12 border">
                                <AvatarImage src={request.projectOwner.avatar} alt={request.projectOwner.name} />
                                <AvatarFallback>{request.projectOwner.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                                  <p className="text-sm text-muted-foreground">You requested to join</p>
                                  <Link
                                    href={`/projects/${request.projectId}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {request.projectTitle}
                                  </Link>
                                </div>
                                <div className="flex items-center mt-1">
                                  <Badge variant={request.status === "accepted" ? "outline" : "secondary"}>
                                    {request.status === "accepted" ? "Accepted" : "Declined"}
                                  </Badge>
                                  <span className="ml-2 text-sm text-muted-foreground">{request.respondedAt}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              {request.status === "accepted" ? (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={`/projects/${request.projectId}`}>View Project</Link>
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href="/projects">Find Similar Projects</Link>
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-lg">
                    <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium">No past requests</h3>
                    <p className="text-muted-foreground text-center mt-1">
                      {searchQuery
                        ? "No requests match your search."
                        : "You haven't sent any collaboration requests yet."}
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

// Sample data
const incomingRequests = [
  {
    id: "req1",
    user: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "ER",
    },
    projectId: "1",
    projectTitle: "AI-Powered Recipe Generator",
    role: "UI/UX Designer",
    message:
      "I'd love to help with the user interface design for this project. I have experience in designing food-related apps and I think I could bring a fresh perspective to make the recipe generator more intuitive and visually appealing.",
    status: "pending",
    requestedAt: "2 days ago",
    respondedAt: null,
  },
  {
    id: "req2",
    user: {
      name: "Michael Wong",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "MW",
    },
    projectId: "8",
    projectTitle: "Ethical Fashion Marketplace",
    role: "Backend Developer",
    message:
      "I'm interested in helping with the backend development. I have experience with e-commerce platforms and payment integrations, which would be valuable for this project.",
    status: "pending",
    requestedAt: "1 week ago",
    respondedAt: null,
  },
  {
    id: "req3",
    user: {
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "SM",
    },
    projectId: "1",
    projectTitle: "AI-Powered Recipe Generator",
    role: "Frontend Developer",
    message:
      "I've been working with React for 3 years and have experience with AI integrations. I'd love to help build the frontend for this project.",
    status: "accepted",
    requestedAt: "2 weeks ago",
    respondedAt: "1 week ago",
  },
  {
    id: "req4",
    user: {
      name: "David Chen",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "DC",
    },
    projectId: "5",
    projectTitle: "Community Garden Management",
    role: "Full Stack Developer",
    message:
      "I'm passionate about sustainable projects and have the technical skills to contribute to both frontend and backend development.",
    status: "declined",
    requestedAt: "3 weeks ago",
    respondedAt: "2 weeks ago",
  },
]

const outgoingRequests = [
  {
    id: "outreq1",
    projectId: "2",
    projectTitle: "Sustainable Smart Home System",
    role: "Frontend Developer",
    message:
      "I have experience with React Native and IoT integrations. I'd love to help build the mobile interface for controlling the smart home system.",
    status: "pending",
    requestedAt: "3 days ago",
    respondedAt: null,
    projectOwner: {
      name: "Samantha Lee",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "SL",
    },
  },
  {
    id: "outreq2",
    projectId: "4",
    projectTitle: "Language Learning Game",
    role: "Full Stack Developer",
    message:
      "I'm fluent in multiple languages and have experience with gamification. I believe I can contribute significantly to this project.",
    status: "accepted",
    requestedAt: "2 weeks ago",
    respondedAt: "1 week ago",
    projectOwner: {
      name: "Elena Rodriguez",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "ER",
    },
  },
  {
    id: "outreq3",
    projectId: "9",
    projectTitle: "Disaster Response Coordination",
    role: "Backend Developer",
    message: "I have experience with real-time systems and geospatial data, which would be valuable for this project.",
    status: "declined",
    requestedAt: "1 month ago",
    respondedAt: "3 weeks ago",
    projectOwner: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=48&width=48",
      initials: "MB",
    },
  },
]
