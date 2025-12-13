import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Filter, Search, Star } from "lucide-react"
import Navbar from "@/components/navbar"

export default function CollaboratorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Find Collaborators</h1>
              <p className="text-muted-foreground">Connect with talented individuals for your projects.</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by name, skills, or interests..." className="pl-8" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="active">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort by</SelectLabel>
                      <SelectItem value="active">Most Active</SelectItem>
                      <SelectItem value="recent">Recently Joined</SelectItem>
                      <SelectItem value="projects">Most Projects</SelectItem>
                      <SelectItem value="collaborations">Most Collaborations</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Collaborators</TabsTrigger>
                <TabsTrigger value="developers">Developers</TabsTrigger>
                <TabsTrigger value="designers">Designers</TabsTrigger>
                <TabsTrigger value="other">Other Roles</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collaborators.map((collaborator) => (
                    <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="mr-2">
                    Previous
                  </Button>
                  <Button variant="outline">Next</Button>
                </div>
              </TabsContent>
              <TabsContent value="developers">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collaborators
                    .filter((c) => c.role === "Developer")
                    .map((collaborator) => (
                      <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="designers">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collaborators
                    .filter((c) => c.role === "Designer")
                    .map((collaborator) => (
                      <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="other">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {collaborators
                    .filter((c) => c.role !== "Developer" && c.role !== "Designer")
                    .map((collaborator) => (
                      <CollaboratorCard key={collaborator.id} collaborator={collaborator} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

function CollaboratorCard({ collaborator }) {
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
          <span>{collaborator.projects} Projects</span>
          <span className="mx-2">•</span>
          <span>{collaborator.collaborations} Collaborations</span>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/profile/${collaborator.id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const collaborators = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Developer",
    bio: "Full stack developer with 5+ years of experience. Passionate about creating innovative solutions that make everyday life easier.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "AJ",
    projects: 8,
    collaborations: 12,
    featured: true,
  },
  {
    id: "2",
    name: "Samantha Lee",
    role: "Designer",
    bio: "UI/UX designer focused on creating beautiful, intuitive interfaces. I love collaborating on projects that have a positive impact on users' lives.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "SL",
    projects: 6,
    collaborations: 9,
    featured: true,
  },
  {
    id: "3",
    name: "Marcus Chen",
    role: "Developer",
    bio: "Blockchain developer specializing in smart contracts and decentralized applications. Passionate about building the future of web3.",
    skills: ["Solidity", "Ethereum", "Web3.js", "React"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "MC",
    projects: 5,
    collaborations: 7,
    featured: false,
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "Product Manager",
    bio: "Product manager with experience in both startups and enterprise companies. I enjoy bridging the gap between business and technology.",
    skills: ["Product Strategy", "Agile", "User Research", "Roadmapping"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "ER",
    projects: 10,
    collaborations: 15,
    featured: false,
  },
  {
    id: "5",
    name: "David Kim",
    role: "Developer",
    bio: "Backend developer focused on scalable architecture and performance optimization. I love solving complex technical challenges.",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "DK",
    projects: 7,
    collaborations: 11,
    featured: false,
  },
  {
    id: "6",
    name: "Olivia Taylor",
    role: "Designer",
    bio: "Product designer with a background in psychology. I create user-centered designs that are both beautiful and functional.",
    skills: ["Figma", "UI Design", "User Research", "Prototyping"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "OT",
    projects: 9,
    collaborations: 8,
    featured: true,
  },
  {
    id: "7",
    name: "James Wilson",
    role: "Developer",
    bio: "Mobile app developer specializing in cross-platform solutions. I'm passionate about creating seamless mobile experiences.",
    skills: ["React Native", "Flutter", "Firebase", "Swift"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "JW",
    projects: 6,
    collaborations: 10,
    featured: false,
  },
  {
    id: "8",
    name: "Sophia Patel",
    role: "Content Strategist",
    bio: "Content strategist and writer with experience in technical documentation and UX writing. I help make complex ideas accessible.",
    skills: ["UX Writing", "Documentation", "Content Strategy", "Editing"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "SP",
    projects: 4,
    collaborations: 6,
    featured: false,
  },
  {
    id: "9",
    name: "Michael Brown",
    role: "Data Scientist",
    bio: "Data scientist with a focus on machine learning and AI. I love working on projects that use data to solve real-world problems.",
    skills: ["Python", "TensorFlow", "Data Analysis", "Machine Learning"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "MB",
    projects: 5,
    collaborations: 8,
    featured: true,
  },
]
