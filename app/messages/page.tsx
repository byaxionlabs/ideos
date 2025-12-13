"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Send, Phone, Video, MoreHorizontal, Paperclip, Smile, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const currentConversation = conversations.find((c) => c.id === selectedConversation)

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Conversations Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Card className="h-[calc(100vh-8rem)]">
            <CardHeader className="p-4">
              <div className="flex items-center justify-between mb-2">
                <CardTitle>Messages</CardTitle>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <Tabs defaultValue="all" className="px-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
            </Tabs>
            <ScrollArea className="h-[calc(100%-8rem)] p-4">
              <div className="space-y-2">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedConversation === conversation.id ? "bg-gray-100" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedConversation(conversation.id)}
                    >
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${conversation.name.charAt(0)}`} />
                        <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate">{conversation.name}</p>
                          <span className="text-xs text-muted-foreground">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread && <Badge className="ml-auto">{conversation.unread}</Badge>}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">No conversations found</div>
                )}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Message Content */}
        <div className="flex-1">
          <Card className="h-[calc(100vh-8rem)]">
            {selectedConversation ? (
              <>
                <CardHeader className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40&text=${currentConversation?.name.charAt(0)}`}
                        />
                        <AvatarFallback>{currentConversation?.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{currentConversation?.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">
                          {currentConversation?.online ? (
                            <span className="flex items-center">
                              <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
                              Online
                            </span>
                          ) : (
                            "Last active 2h ago"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <ScrollArea className="h-[calc(100%-8rem)] p-4">
                  <div className="space-y-4">
                    {currentConversation?.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender !== "user" && (
                          <Avatar className="mr-2 mt-1">
                            <AvatarImage
                              src={`/placeholder.svg?height=32&width=32&text=${currentConversation.name.charAt(0)}`}
                            />
                            <AvatarFallback>{currentConversation.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.sender === "user" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70 text-right">{message.time}</p>
                        </div>
                        {message.sender === "user" && (
                          <Avatar className="ml-2 mt-1">
                            <AvatarImage src="/placeholder.svg?height=32&width=32&text=Me" />
                            <AvatarFallback>Me</AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    ))}

                    {currentConversation?.projectContext && (
                      <div className="flex justify-center my-6">
                        <div className="bg-gray-50 rounded-lg p-3 max-w-md">
                          <p className="text-xs text-muted-foreground mb-2">Project Context</p>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center">
                              <ChevronRight className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{currentConversation.projectContext.title}</p>
                              <p className="text-xs text-muted-foreground">
                                {currentConversation.projectContext.description}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 text-center">
                            <Button variant="link" size="sm" asChild>
                              <Link href={`/projects/${currentConversation.projectContext.id}`}>View Project</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                <CardFooter className="p-4 border-t">
                  <div className="flex items-center gap-2 w-full">
                    <Button variant="outline" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button variant="outline" size="icon">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a conversation from the list to start messaging</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </main>
  )
}

// Sample data
const conversations = [
  {
    id: "1",
    name: "Sarah Johnson",
    lastMessage: "I'd love to collaborate on your AI project!",
    time: "10:42 AM",
    unread: 2,
    online: true,
    messages: [
      {
        sender: "other",
        content: "Hi there! I saw your project idea about the AI content generator.",
        time: "10:30 AM",
      },
      {
        sender: "user",
        content: "Hey Sarah! Thanks for reaching out. What aspects of it interested you?",
        time: "10:32 AM",
      },
      {
        sender: "other",
        content:
          "I've been working on NLP models for a while and your approach seems innovative. I think I could help with the language model fine-tuning.",
        time: "10:35 AM",
      },
      {
        sender: "user",
        content:
          "That would be amazing! I've been struggling with that part. Do you have experience with transformer models?",
        time: "10:38 AM",
      },
      {
        sender: "other",
        content: "Yes, I've worked extensively with BERT and GPT variants. I'd love to collaborate on your AI project!",
        time: "10:42 AM",
      },
    ],
    projectContext: {
      id: "ai-content-gen",
      title: "AI Content Generator",
      description: "A tool that uses AI to generate high-quality content for blogs and social media",
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    lastMessage: "The wireframes look great! I have a few suggestions.",
    time: "Yesterday",
    unread: 0,
    online: false,
    messages: [
      {
        sender: "other",
        content: "Hey, I reviewed the wireframes you sent over.",
        time: "Yesterday, 4:15 PM",
      },
      {
        sender: "user",
        content: "Great! What do you think?",
        time: "Yesterday, 4:20 PM",
      },
      {
        sender: "other",
        content: "The wireframes look great! I have a few suggestions for the user flow on the dashboard page.",
        time: "Yesterday, 4:25 PM",
      },
    ],
    projectContext: {
      id: "finance-dashboard",
      title: "Personal Finance Dashboard",
      description: "A comprehensive dashboard for tracking expenses and investments",
    },
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    lastMessage: "When can we schedule the next planning session?",
    time: "Yesterday",
    unread: 0,
    online: true,
    messages: [
      {
        sender: "other",
        content: "The last planning session was really productive!",
        time: "Yesterday, 2:10 PM",
      },
      {
        sender: "user",
        content: "I agree! We made a lot of progress on the feature list.",
        time: "Yesterday, 2:15 PM",
      },
      {
        sender: "other",
        content:
          "When can we schedule the next planning session? I'm thinking we should focus on the technical architecture.",
        time: "Yesterday, 2:20 PM",
      },
    ],
  },
  {
    id: "4",
    name: "David Park",
    lastMessage: "I've pushed the latest code changes to the repo.",
    time: "Monday",
    unread: 0,
    online: false,
    messages: [
      {
        sender: "other",
        content: "Just finished implementing the authentication flow.",
        time: "Monday, 11:30 AM",
      },
      {
        sender: "user",
        content: "That was fast! How's the testing looking?",
        time: "Monday, 11:45 AM",
      },
      {
        sender: "other",
        content:
          "All tests are passing. I've pushed the latest code changes to the repo. You can review when you have time.",
        time: "Monday, 12:00 PM",
      },
    ],
  },
  {
    id: "5",
    name: "Olivia Wilson",
    lastMessage: "The new design system looks amazing!",
    time: "Sunday",
    unread: 0,
    online: false,
    messages: [
      {
        sender: "user",
        content: "I've finished the initial version of our design system.",
        time: "Sunday, 3:20 PM",
      },
      {
        sender: "other",
        content:
          "Just took a look. The new design system looks amazing! The component consistency will help us move much faster.",
        time: "Sunday, 4:15 PM",
      },
    ],
  },
  {
    id: "6",
    name: "Project Ideas Team",
    lastMessage: "Alex: Has everyone reviewed the latest PRs?",
    time: "Last week",
    unread: 0,
    online: false,
    messages: [
      {
        sender: "other",
        content: "Alex: Has everyone reviewed the latest PRs? We need to merge them before the demo on Friday.",
        time: "Last week",
      },
      {
        sender: "user",
        content: "I've reviewed the frontend changes. All looks good to me!",
        time: "Last week",
      },
      {
        sender: "other",
        content: "Sarah: I'll take a look at the API changes tonight.",
        time: "Last week",
      },
    ],
  },
]
