"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ProjectLead {
    name: string
    avatar: string
    initials: string
}

export interface Collaboration {
    id: string
    title: string
    description: string
    yourRole: string
    status: string
    joinedDate: string
    projectLead: ProjectLead
}

interface CollaborationCardProps {
    collaboration: Collaboration
    showManageButtons?: boolean
}

export function CollaborationCard({ collaboration, showManageButtons = false }: CollaborationCardProps) {
    return (
        <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="p-6">
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <CardTitle className="hover:text-primary transition-colors">
                            <Link href={`/projects/${collaboration.id}`}>{collaboration.title}</Link>
                        </CardTitle>
                        <CardDescription>Your role: {collaboration.yourRole}</CardDescription>
                    </div>
                    <Badge variant={collaboration.status === "Completed" ? "outline" : "secondary"}>
                        {collaboration.status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <p className="line-clamp-3 text-muted-foreground">{collaboration.description}</p>
                <div className="mt-4">
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">Project Lead:</p>
                        <div className="flex items-center gap-1">
                            <Avatar className="h-5 w-5">
                                <AvatarImage src={collaboration.projectLead.avatar} alt={collaboration.projectLead.name} />
                                <AvatarFallback>{collaboration.projectLead.initials}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{collaboration.projectLead.name}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-6 border-t flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Joined {collaboration.joinedDate}</div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={`/projects/${collaboration.id}`}>View Project</Link>
                    </Button>
                    {showManageButtons && (
                        <Button variant="ghost" size="sm">
                            Leave
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}
