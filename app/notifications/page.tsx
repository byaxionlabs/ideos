"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Bell,
  CheckCircle,
  CheckCircle2,
  Filter,
  Heart,
  MessageSquare,
  Search,
  Settings,
  Star,
  Trash2,
  Users,
  X,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Navbar from "@/components/navbar"

export default function NotificationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [notifications, setNotifications] = useState(allNotifications)

  const handleMarkAllRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const handleDeleteNotification = (id: string) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const handleClearAll = () => {
    setNotifications([])
  }

  const filteredNotifications = notifications.filter((notification) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.description.toLowerCase().includes(searchQuery.toLowerCase())

    // Filter by type
    const matchesType = selectedFilter === "all" || notification.type === selectedFilter

    return matchesSearch && matchesType
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="flex min-h-screen flex-col">
    
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-3">
              <Bell className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
                <p className="text-muted-foreground">
                  Stay updated on your projects, collaborations, and community activity.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search notifications..."
                  className="pl-8 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setSelectedFilter("all")}>All Notifications</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("collaboration")}>
                    Collaboration Requests
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("comment")}>Comments</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("like")}>Likes</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("milestone")}>Milestones</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("mention")}>Mentions</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedFilter("system")}>System Notifications</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" onClick={() => handleMarkAllRead()}>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Mark all read
              </Button>
              <Button variant="outline" onClick={() => handleClearAll()}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear all
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all" onClick={() => setSelectedFilter("all")}>
                All
                {unreadCount > 0 && (
                  <Badge className="ml-2" variant="secondary">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="unread" onClick={() => setSelectedFilter("all")}>
                Unread
                {unreadCount > 0 && (
                  <Badge className="ml-2" variant="secondary">
                    {unreadCount}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="projects" onClick={() => setSelectedFilter("all")}>
                Projects
              </TabsTrigger>
              <TabsTrigger value="collaborations" onClick={() => setSelectedFilter("all")}>
                Collaborations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {filteredNotifications.length > 0 ? (
                <div className="space-y-4">
                  {filteredNotifications.map((notification) => (
                    <NotificationCard
                      key={notification.id}
                      notification={notification}
                      onMarkAsRead={handleMarkAsRead}
                      onDelete={handleDeleteNotification}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-12 bg-muted rounded-lg">
                  <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">No notifications</h3>
                  <p className="text-muted-foreground text-center mt-2 max-w-md">
                    {searchQuery || selectedFilter !== "all"
                      ? "No notifications match your current filters."
                      : "You don't have any notifications at the moment."}
                  </p>
                  {(searchQuery || selectedFilter !== "all") && (
                    <Button
                      className="mt-4"
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedFilter("all")
                      }}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="unread" className="space-y-4">
              {filteredNotifications.filter((n) => !n.read).length > 0 ? (
                <div className="space-y-4">
                  {filteredNotifications
                    .filter((n) => !n.read)
                    .map((notification) => (
                      <NotificationCard
                        key={notification.id}
                        notification={notification}
                        onMarkAsRead={handleMarkAsRead}
                        onDelete={handleDeleteNotification}
                      />
                    ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-12 bg-muted rounded-lg">
                  <CheckCircle className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">All caught up!</h3>
                  <p className="text-muted-foreground text-center mt-2 max-w-md">You've read all your notifications.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              {filteredNotifications.filter(
                (n) =>
                  n.type === "comment" ||
                  n.type === "like" ||
                  n.type === "milestone" ||
                  (n.type === "system" && n.projectRelated),
              ).length > 0 ? (
                <div className="space-y-4">
                  {filteredNotifications
                    .filter(
                      (n) =>
                        n.type === "comment" ||
                        n.type === "like" ||
                        n.type === "milestone" ||
                        (n.type === "system" && n.projectRelated),
                    )
                    .map((notification) => (
                      <NotificationCard
                        key={notification.id}
                        notification={notification}
                        onMarkAsRead={handleMarkAsRead}
                        onDelete={handleDeleteNotification}
                      />
                    ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-12 bg-muted rounded-lg">
                  <Bell className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">No project notifications</h3>
                  <p className="text-muted-foreground text-center mt-2 max-w-md">
                    You don't have any project-related notifications at the moment.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="collaborations" className="space-y-4">
              {filteredNotifications.filter((n) => n.type === "collaboration" || n.type === "mention").length > 0 ? (
                <div className="space-y-4">
                  {filteredNotifications
                    .filter((n) => n.type === "collaboration" || n.type === "mention")
                    .map((notification) => (
                      <NotificationCard
                        key={notification.id}
                        notification={notification}
                        onMarkAsRead={handleMarkAsRead}
                        onDelete={handleDeleteNotification}
                      />
                    ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-12 bg-muted rounded-lg">
                  <Users className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium">No collaboration notifications</h3>
                  <p className="text-muted-foreground text-center mt-2 max-w-md">
                    You don't have any collaboration-related notifications at the moment.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

interface NotificationProps {
  notification: Notification
  onMarkAsRead: (id: string) => void
  onDelete: (id: string) => void
}

function NotificationCard({ notification, onMarkAsRead, onDelete }: NotificationProps) {
  const getIcon = () => {
    switch (notification.type) {
      case "collaboration":
        return <Users className="h-5 w-5 text-blue-500" />
      case "comment":
        return <MessageSquare className="h-5 w-5 text-green-500" />
      case "like":
        return <Heart className="h-5 w-5 text-red-500" />
      case "milestone":
        return <CheckCircle className="h-5 w-5 text-purple-500" />
      case "mention":
        return <Bell className="h-5 w-5 text-orange-500" />
      case "system":
        return notification.projectRelated ? (
          <Star className="h-5 w-5 text-yellow-500" />
        ) : (
          <Settings className="h-5 w-5 text-gray-500" />
        )
      default:
        return <Bell className="h-5 w-5 text-primary" />
    }
  }

  return (
    <Card className={`transition-colors ${!notification.read ? "bg-primary/5 border-primary/20" : ""}`}>
      <CardContent className="p-4 sm:p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="rounded-full bg-background p-2 border">{getIcon()}</div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{notification.description}</p>

                {notification.user && (
                  <div className="flex items-center mt-2">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={notification.user.avatar} alt={notification.user.name} />
                      <AvatarFallback>{notification.user.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{notification.user.name}</span>
                  </div>
                )}

                {notification.project && (
                  <div className="mt-2">
                    <Link
                      href={`/projects/${notification.project.id}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {notification.project.title}
                    </Link>
                  </div>
                )}

                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <span>{notification.time}</span>
                  {!notification.read && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      New
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                {notification.type === "collaboration" && !notification.read && (
                  <>
                    <Button size="sm" variant="outline">
                      <X className="h-4 w-4 mr-1" />
                      Decline
                    </Button>
                    <Button size="sm">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Accept
                    </Button>
                  </>
                )}

                {notification.actionLink && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={notification.actionLink}>View</Link>
                  </Button>
                )}

                {!notification.read && (
                  <Button size="sm" variant="ghost" onClick={() => onMarkAsRead(notification.id)}>
                    Mark as read
                  </Button>
                )}

                <Button size="sm" variant="ghost" onClick={() => onDelete(notification.id)}>
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Types
interface User {
  name: string
  avatar: string
  initials: string
}

interface Project {
  id: string
  title: string
}

interface Notification {
  id: string
  type: "collaboration" | "comment" | "like" | "milestone" | "mention" | "system"
  title: string
  description: string
  time: string
  read: boolean
  user?: User
  project?: Project
  actionLink?: string
  projectRelated?: boolean
}

// Sample data
const allNotifications: Notification[] = [
  {
    id: "notif1",
    type: "collaboration",
    title: "New collaboration request",
    description: "Emily Rodriguez wants to join your project as UI/UX Designer",
    time: "2 hours ago",
    read: false,
    user: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "ER",
    },
    project: {
      id: "1",
      title: "AI-Powered Recipe Generator",
    },
    actionLink: "/collaborators/requests",
  },
  {
    id: "notif2",
    type: "like",
    title: "Project liked",
    description: "David Chen liked your project",
    time: "5 hours ago",
    read: false,
    user: {
      name: "David Chen",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "DC",
    },
    project: {
      id: "8",
      title: "Ethical Fashion Marketplace",
    },
    actionLink: "/projects/8",
  },
  {
    id: "notif3",
    type: "comment",
    title: "New comment",
    description: "Michael Brown commented on your project",
    time: "1 day ago",
    read: true,
    user: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "MB",
    },
    project: {
      id: "5",
      title: "Community Garden Management",
    },
    actionLink: "/projects/5",
  },
  {
    id: "notif4",
    type: "milestone",
    title: "Project milestone completed",
    description: "Database Schema Finalization milestone was completed",
    time: "2 days ago",
    read: true,
    project: {
      id: "8",
      title: "Ethical Fashion Marketplace",
    },
    actionLink: "/projects/8",
  },
  {
    id: "notif5",
    type: "system",
    title: "New featured project",
    description: "Your project was featured on the homepage",
    time: "3 days ago",
    read: false,
    project: {
      id: "1",
      title: "AI-Powered Recipe Generator",
    },
    actionLink: "/projects/1",
    projectRelated: true,
  },
  {
    id: "notif6",
    type: "mention",
    title: "You were mentioned in a comment",
    description: "Sarah Miller mentioned you in a comment",
    time: "4 days ago",
    read: true,
    user: {
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "SM",
    },
    project: {
      id: "1",
      title: "AI-Powered Recipe Generator",
    },
    actionLink: "/projects/1",
  },
  {
    id: "notif7",
    type: "collaboration",
    title: "Collaboration request accepted",
    description: "Elena Rodriguez accepted your collaboration request",
    time: "1 week ago",
    read: true,
    user: {
      name: "Elena Rodriguez",
      avatar: "/placeholder.svg?height=24&width=24",
      initials: "ER",
    },
    project: {
      id: "4",
      title: "Language Learning Game",
    },
    actionLink: "/projects/4",
  },
  {
    id: "notif8",
    type: "system",
    title: "Account security alert",
    description: "Your account was accessed from a new device",
    time: "1 week ago",
    read: true,
    actionLink: "/settings",
  },
  {
    id: "notif9",
    type: "like",
    title: "Multiple likes on your project",
    description: "5 people liked your project",
    time: "2 weeks ago",
    read: true,
    project: {
      id: "5",
      title: "Community Garden Management",
    },
    actionLink: "/projects/5",
  },
  {
    id: "notif10",
    type: "comment",
    title: "New replies to your comment",
    description: "There are 3 new replies to your comment",
    time: "2 weeks ago",
    read: true,
    project: {
      id: "1",
      title: "AI-Powered Recipe Generator",
    },
    actionLink: "/projects/1",
  },
]
