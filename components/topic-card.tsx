"use client"

import Link from "next/link"
import { ArrowUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface Topic {
    id: string
    name: string
    growth: number
    projectCount: number
    description: string
    activeUsers: number
}

interface TopicCardProps {
    topic: Topic
}

export function TopicCard({ topic }: TopicCardProps) {
    return (
        <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="p-6">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold">#{topic.name}</CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1 bg-gray-50">
                        <ArrowUp className="h-3 w-3 text-green-600" />
                        <span className="text-green-600">{topic.growth}%</span>
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
                <p className="line-clamp-3 text-muted-foreground mb-4">{topic.description}</p>
                <p className="text-sm text-muted-foreground">{topic.projectCount} projects this week</p>
            </CardContent>
            <CardFooter className="p-6 border-t flex justify-between items-center">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{topic.activeUsers} active users</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                    <Link href={`/topics/${topic.id}`}>Explore Topic</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
