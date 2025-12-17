import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { TopicCard } from "@/components/topic-card"
import { Filter, Search } from "lucide-react"

export default function TopicsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container px-4 py-6 md:py-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Browse Topics</h1>
                            <p className="text-muted-foreground">Explore projects by category and interest.</p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input type="search" placeholder="Search topics..." className="pl-8" />
                            </div>
                            <Button variant="outline" size="icon">
                                <Filter className="h-4 w-4" />
                                <span className="sr-only">Filter</span>
                            </Button>
                        </div>

                        <Separator className="my-4" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allTopics.map((topic) => (
                                <TopicCard key={topic.id} topic={topic} />
                            ))}
                        </div>

                        <div className="flex justify-center mt-8">
                            <Button variant="outline">Load More</Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const allTopics = [
    {
        id: "1",
        name: "AI",
        growth: 156,
        projectCount: 428,
        description:
            "Artificial Intelligence projects including machine learning, natural language processing, and computer vision.",
        activeUsers: 1243,
    },
    {
        id: "2",
        name: "Web3",
        growth: 132,
        projectCount: 312,
        description: "Projects related to blockchain, cryptocurrency, NFTs, and decentralized applications.",
        activeUsers: 876,
    },
    {
        id: "3",
        name: "Sustainability",
        growth: 98,
        projectCount: 187,
        description: "Projects focused on environmental sustainability, clean energy, and reducing carbon footprints.",
        activeUsers: 654,
    },
    {
        id: "4",
        name: "AR",
        growth: 87,
        projectCount: 143,
        description: "Augmented reality applications across various industries including gaming, education, and retail.",
        activeUsers: 521,
    },
    {
        id: "5",
        name: "Health",
        growth: 76,
        projectCount: 231,
        description: "Health and wellness applications, medical technology, and fitness tracking solutions.",
        activeUsers: 789,
    },
    {
        id: "6",
        name: "EdTech",
        growth: 65,
        projectCount: 176,
        description: "Educational technology projects aimed at improving learning experiences and outcomes.",
        activeUsers: 432,
    },
    {
        id: "7",
        name: "FinTech",
        growth: 54,
        projectCount: 125,
        description: "Financial technology innovations, personal finance tools, and banking solutions.",
        activeUsers: 345,
    },
    {
        id: "8",
        name: "IoT",
        growth: 48,
        projectCount: 98,
        description: "Internet of Things projects connecting physical devices to the digital world.",
        activeUsers: 287,
    },
    {
        id: "9",
        name: "Gaming",
        growth: 45,
        projectCount: 256,
        description: "Game development, interactive entertainment, and esports platforms.",
        activeUsers: 890,
    },
]
