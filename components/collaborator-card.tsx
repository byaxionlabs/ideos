"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface Collaborator {
    id: string
    name: string
    role: string
    bio: string
    skills: string[]
    avatar: string
    initials: string
    projects: number
    collaborations: number
    featured?: boolean
    connections?: number // Added for compatibility with trending page data
    projectCount?: number // Added for compatibility with trending page data
}

interface CollaboratorCardProps {
    collaborator: Collaborator
}

export function CollaboratorCard({ collaborator }: CollaboratorCardProps) {
    // Normalize data if coming from different sources
    const projectCount = collaborator.projects || collaborator.projectCount || 0

    return (
        <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="p-6">
                <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border">
                            <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                            <AvatarFallback>{collaborator.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                            <Link href={`/profile/${collaborator.id}`} className="font-medium hover:underline">
                                {collaborator.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">{collaborator.role}</p>
                        </div>
                    </div>
                    {collaborator.featured && (
                        <Badge variant="outline" className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            Featured
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <p className="line-clamp-3 text-muted-foreground mb-4">{collaborator.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {collaborator.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="p-6 border-t flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                    <span>{projectCount} Projects</span>
                    <span className="mx-2">•</span>
                    <span>{collaborator.collaborations || collaborator.connections || 0} Collabs</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                    <Link href={`/profile/${collaborator.id}`}>View Profile</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
