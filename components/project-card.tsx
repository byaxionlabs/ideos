"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageSquare, Users } from "lucide-react"

interface ProjectAuthor {
    name: string
    avatar: string
    initials: string
}

export interface Project {
    id: string
    title: string
    category: string
    description: string
    techStack: string[]
    trending?: boolean
    featured?: boolean
    author: ProjectAuthor
    likes: number
    comments: number
    collaborators: number
}

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.id}`} className="group">
            <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-6">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{project.category}</p>
                        </div>
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
                        {project.featured && !project.trending && (
                            <Badge variant="outline" className="flex items-center gap-1">
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
                                    className="h-3 w-3 text-yellow-500"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                Featured
                            </Badge>
                        )}
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
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={project.author.avatar} alt={project.author.name} />
                            <AvatarFallback>{project.author.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium">{project.author.name}</p>
                        </div>
                    </div>
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
                </CardFooter>
            </Card>
        </Link>
    )
}
