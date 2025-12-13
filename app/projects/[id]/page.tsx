"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, Code, ExternalLink, Flag, Heart, MessageSquare, Share2, Users } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ProjectPage({ params }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(128)
  const [commentText, setCommentText] = useState("")

  const project = {
    id: params.id,
    title: "AI-Powered Recipe Generator",
    category: "Web Application",
    description:
      "Building an application that generates personalized recipes based on available ingredients, dietary restrictions, and nutritional goals using machine learning algorithms.",
    longDescription: `
      This project aims to revolutionize how people cook at home by leveraging AI to create personalized recipes. 
      
      The application will allow users to input ingredients they have on hand, specify dietary restrictions (vegan, gluten-free, etc.), and set nutritional goals. Using machine learning algorithms, it will generate recipes that are not only delicious but also tailored to the user's specific needs.
      
      Key features will include:
      - Ingredient recognition and substitution suggestions
      - Nutritional analysis and optimization
      - Recipe difficulty adjustment based on user skill level
      - Meal planning and grocery list generation
      - Community recipe sharing and rating system
      
      The project will use a combination of natural language processing for recipe understanding and generation, computer vision for ingredient recognition, and recommendation systems for personalized suggestions.
    `,
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
    requirements: [
      "Experience with React and modern JavaScript",
      "Knowledge of machine learning concepts",
      "Familiarity with Node.js and Express",
      "Understanding of database design and MongoDB",
      "Interest in food and cooking (not required but helpful)",
    ],
    timeline: "3-4 months",
    teamSize: "3-5 people",
    status: "Looking for collaborators",
    trending: true,
    featured: true,
    createdAt: "2023-11-15",
    updatedAt: "2023-12-01",
    author: {
      id: "user1",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
      title: "Full Stack Developer",
      bio: "Passionate about creating innovative solutions that make everyday life easier.",
    },
    likes: 128,
    comments: [
      {
        id: "comment1",
        text: "This is such a great idea! I've been looking for something like this for a while. Would love to contribute to the frontend development.",
        createdAt: "2023-11-20",
        author: {
          name: "Sarah Miller",
          avatar: "/placeholder.svg?height=32&width=32",
          initials: "SM",
        },
      },
      {
        id: "comment2",
        text: "I have experience with TensorFlow and would be interested in helping with the recipe recommendation algorithm. Are you planning to use any specific datasets for training?",
        createdAt: "2023-11-22",
        author: {
          name: "David Chen",
          avatar: "/placeholder.svg?height=32&width=32",
          initials: "DC",
        },
      },
      {
        id: "comment3",
        text: "Have you considered adding a feature for users to upload photos of their meals? Could be a nice addition to the community aspect.",
        createdAt: "2023-11-25",
        author: {
          name: "Emily Rodriguez",
          avatar: "/placeholder.svg?height=32&width=32",
          initials: "ER",
        },
      },
    ],
    collaborators: 5,
    collaboratorsList: [
      {
        id: "user2",
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MB",
        role: "Backend Developer",
      },
      {
        id: "user3",
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JL",
        role: "ML Engineer",
      },
    ],
  }

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would submit the comment to your backend
    console.log("Comment submitted:", commentText)
    setCommentText("")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
                      Projects
                    </Link>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-sm">{project.title}</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge>{project.category}</Badge>
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
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Flag className="h-4 w-4" />
                    Report
                  </Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Project Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none dark:prose-invert">
                    {project.longDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="comments">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="comments">Comments ({project.comments.length})</TabsTrigger>
                  <TabsTrigger value="collaborators">Collaborators ({project.collaboratorsList.length})</TabsTrigger>
                  <TabsTrigger value="updates">Updates (3)</TabsTrigger>
                </TabsList>
                <TabsContent value="comments" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle>Add a Comment</CardTitle>
                      <CardDescription>Share your thoughts or ask a question about this project.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCommentSubmit}>
                        <div className="grid gap-4">
                          <Textarea
                            placeholder="Write your comment here..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            className="min-h-[100px]"
                          />
                          <div className="flex justify-end">
                            <Button type="submit" disabled={!commentText.trim()}>
                              Post Comment
                            </Button>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    {project.comments.map((comment) => (
                      <Card key={comment.id}>
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-4">
                              <Avatar>
                                <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                                <AvatarFallback>{comment.author.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">{comment.author.name}</p>
                                <p className="text-xs text-muted-foreground">{comment.createdAt}</p>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>{comment.text}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t pt-3">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Heart className="h-4 w-4 mr-1" />
                              Like
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Reply
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="collaborators" className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Current Team</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Request to Collaborate</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Request to Collaborate</DialogTitle>
                          <DialogDescription>
                            Tell the project creator why you'd like to join this project and what skills you can
                            contribute.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="skills">Your Skills</Label>
                            <Input id="skills" placeholder="e.g., React, Node.js, UI/UX Design" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              placeholder="Explain why you'd like to join and how you can contribute..."
                              className="min-h-[150px]"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Send Request</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={project.author.avatar} alt={project.author.name} />
                            <AvatarFallback>{project.author.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{project.author.name}</p>
                            <p className="text-sm text-muted-foreground">{project.author.title} • Project Creator</p>
                          </div>
                        </div>
                        <Separator />
                        {project.collaboratorsList.map((collaborator) => (
                          <div key={collaborator.id} className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                              <AvatarFallback>{collaborator.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{collaborator.name}</p>
                              <p className="text-sm text-muted-foreground">{collaborator.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="updates" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Updates</CardTitle>
                      <CardDescription>Latest news and progress on this project</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="border-l-4 border-primary pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">December 1, 2023</span>
                          </div>
                          <h3 className="text-lg font-medium mb-2">Team Formation Complete</h3>
                          <p className="text-muted-foreground">
                            We've assembled our core team and are now moving into the planning phase. Thanks to everyone
                            who expressed interest in collaborating!
                          </p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">November 25, 2023</span>
                          </div>
                          <h3 className="text-lg font-medium mb-2">Initial Prototype</h3>
                          <p className="text-muted-foreground">
                            We've created a basic prototype of the recipe recommendation algorithm. Early tests show
                            promising results for ingredient substitution.
                          </p>
                        </div>
                        <div className="border-l-4 border-primary pl-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">November 18, 2023</span>
                          </div>
                          <h3 className="text-lg font-medium mb-2">Project Kickoff</h3>
                          <p className="text-muted-foreground">
                            Excited to announce the start of this project! We're looking for collaborators with
                            experience in React, Node.js, and machine learning.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Created</span>
                    <span>{project.createdAt}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span>{project.updatedAt}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Timeline</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Team Size</span>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Button
                        variant={liked ? "default" : "outline"}
                        size="sm"
                        className="flex items-center gap-1"
                        onClick={handleLike}
                      >
                        <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                        {liked ? "Liked" : "Like"}
                      </Button>
                      <span className="text-sm text-muted-foreground">{likeCount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Code className="h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Creator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={project.author.avatar} alt={project.author.name} />
                      <AvatarFallback>{project.author.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{project.author.name}</p>
                      <p className="text-sm text-muted-foreground">{project.author.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.author.bio}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="w-full">
                      View Profile
                    </Button>
                    <Button size="sm" className="w-full">
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
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
                          className="h-5 w-5 text-primary shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Similar Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-muted h-12 w-12 flex items-center justify-center">
                      <Code className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <Link href="/projects/10" className="font-medium hover:underline">
                        Meal Planning Assistant
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        Web application for weekly meal planning and grocery lists
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-muted h-12 w-12 flex items-center justify-center">
                      <Code className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <Link href="/projects/11" className="font-medium hover:underline">
                        Nutrition Tracker
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        Mobile app for tracking daily nutrition and health goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-muted h-12 w-12 flex items-center justify-center">
                      <Code className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <Link href="/projects/12" className="font-medium hover:underline">
                        Food Image Recognition
                      </Link>
                      <p className="text-sm text-muted-foreground">AI system that identifies food items from photos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
