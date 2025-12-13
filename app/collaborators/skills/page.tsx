"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Search, Star } from "lucide-react"
import Navbar from "@/components/navbar"

export default function BrowseBySkillsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  const filteredCollaborators = collaborators.filter((collaborator) => {
    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      collaborator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collaborator.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collaborator.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filter by selected skills
    const matchesSkills =
      selectedSkills.length === 0 || selectedSkills.every((skill) => collaborator.skills.includes(skill))

    // Filter by category
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "development" && isDeveloper(collaborator.skills)) ||
      (selectedCategory === "design" && isDesigner(collaborator.skills)) ||
      (selectedCategory === "management" && isManager(collaborator.skills)) ||
      (selectedCategory === "other" && isOther(collaborator.skills))

    return matchesSearch && matchesSkills && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Browse by Skills</h1>
              <p className="text-muted-foreground">
                Find collaborators with specific skills and expertise for your projects.
              </p>
            </div>
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search skills or collaborators..."
                className="pl-8 w-full md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skill Categories</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <Tabs
                    defaultValue="all"
                    orientation="vertical"
                    className="w-full"
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <TabsList className="flex flex-col h-auto bg-transparent justify-start items-start p-0 space-y-1">
                      <TabsTrigger value="all" className="w-full justify-start px-3 data-[state=active]:bg-muted">
                        All Skills
                      </TabsTrigger>
                      <TabsTrigger
                        value="development"
                        className="w-full justify-start px-3 data-[state=active]:bg-muted"
                      >
                        Development
                      </TabsTrigger>
                      <TabsTrigger value="design" className="w-full justify-start px-3 data-[state=active]:bg-muted">
                        Design
                      </TabsTrigger>
                      <TabsTrigger
                        value="management"
                        className="w-full justify-start px-3 data-[state=active]:bg-muted"
                      >
                        Management
                      </TabsTrigger>
                      <TabsTrigger value="other" className="w-full justify-start px-3 data-[state=active]:bg-muted">
                        Other Skills
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Filter by Skills</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {selectedCategory === "all" && (
                      <>
                        <div className="space-y-2">
                          <h3 className="text-sm font-medium">Development</h3>
                          <div className="space-y-2">
                            {developmentSkills.map((skill) => (
                              <div key={skill} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`skill-${skill}`}
                                  checked={selectedSkills.includes(skill)}
                                  onCheckedChange={() => handleSkillToggle(skill)}
                                />
                                <Label htmlFor={`skill-${skill}`} className="text-sm font-normal">
                                  {skill}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Separator />
                      </>
                    )}

                    {(selectedCategory === "all" || selectedCategory === "development") && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Development</h3>
                        <div className="space-y-2">
                          {developmentSkills.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox
                                id={`skill-${skill}`}
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={() => handleSkillToggle(skill)}
                              />
                              <Label htmlFor={`skill-${skill}`} className="text-sm font-normal">
                                {skill}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(selectedCategory === "all" || selectedCategory === "design") && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Design</h3>
                        <div className="space-y-2">
                          {designSkills.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox
                                id={`skill-${skill}`}
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={() => handleSkillToggle(skill)}
                              />
                              <Label htmlFor={`skill-${skill}`} className="text-sm font-normal">
                                {skill}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(selectedCategory === "all" || selectedCategory === "management") && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Management</h3>
                        <div className="space-y-2">
                          {managementSkills.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox
                                id={`skill-${skill}`}
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={() => handleSkillToggle(skill)}
                              />
                              <Label htmlFor={`skill-${skill}`} className="text-sm font-normal">
                                {skill}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(selectedCategory === "all" || selectedCategory === "other") && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Other Skills</h3>
                        <div className="space-y-2">
                          {otherSkills.map((skill) => (
                            <div key={skill} className="flex items-center space-x-2">
                              <Checkbox
                                id={`skill-${skill}`}
                                checked={selectedSkills.includes(skill)}
                                onCheckedChange={() => handleSkillToggle(skill)}
                              />
                              <Label htmlFor={`skill-${skill}`} className="text-sm font-normal">
                                {skill}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {selectedSkills.length > 0 && (
                    <div className="mt-4">
                      <Button variant="outline" size="sm" className="w-full" onClick={() => setSelectedSkills([])}>
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{filteredCollaborators.length} Collaborators Found</h2>
                {selectedSkills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                        {skill}
                        <button className="ml-1 rounded-full hover:bg-muted" onClick={() => handleSkillToggle(skill)}>
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
                            className="h-3 w-3"
                          >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                          <span className="sr-only">Remove {skill}</span>
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCollaborators.map((collaborator) => (
                  <Card key={collaborator.id} className="h-full overflow-hidden transition-all hover:shadow-lg">
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
                          <Badge key={skill} variant={selectedSkills.includes(skill) ? "default" : "secondary"}>
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
                ))}
              </div>

              {filteredCollaborators.length === 0 && (
                <div className="flex flex-col items-center justify-center p-12 bg-muted rounded-lg">
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
                    className="h-12 w-12 text-muted-foreground mb-4"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <h3 className="text-xl font-medium">No collaborators found</h3>
                  <p className="text-muted-foreground text-center mt-2 max-w-md">
                    We couldn't find any collaborators matching your search criteria. Try adjusting your filters or
                    search query.
                  </p>
                  <Button
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedSkills([])
                      setSelectedCategory("all")
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Helper functions to categorize skills
function isDeveloper(skills: string[]) {
  return skills.some((skill) => developmentSkills.includes(skill))
}

function isDesigner(skills: string[]) {
  return skills.some((skill) => designSkills.includes(skill))
}

function isManager(skills: string[]) {
  return skills.some((skill) => managementSkills.includes(skill))
}

function isOther(skills: string[]) {
  return skills.some((skill) => otherSkills.includes(skill))
}

// Skill categories
const developmentSkills = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "Java",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
  "Next.js",
  "Vue.js",
  "Angular",
  "Flutter",
  "Swift",
  "Kotlin",
]

const designSkills = [
  "UI Design",
  "UX Design",
  "Figma",
  "Adobe XD",
  "Sketch",
  "Prototyping",
  "User Research",
  "Wireframing",
  "Visual Design",
  "Interaction Design",
  "Branding",
]

const managementSkills = [
  "Project Management",
  "Agile",
  "Scrum",
  "Product Strategy",
  "Team Leadership",
  "Roadmapping",
  "Stakeholder Management",
  "Resource Planning",
  "Risk Management",
]

const otherSkills = [
  "Content Writing",
  "Technical Writing",
  "Data Analysis",
  "Machine Learning",
  "SEO",
  "Digital Marketing",
  "Market Research",
  "Blockchain",
  "AR/VR",
  "IoT",
]

// Sample data
const collaborators = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Full Stack Developer",
    bio: "Full stack developer with 5+ years of experience. Passionate about creating innovative solutions that make everyday life easier.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS", "Docker"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "AJ",
    projects: 8,
    collaborations: 12,
    featured: true,
  },
  {
    id: "2",
    name: "Samantha Lee",
    role: "UI/UX Designer",
    bio: "UI/UX designer focused on creating beautiful, intuitive interfaces. I love collaborating on projects that have a positive impact on users' lives.",
    skills: ["UI Design", "UX Design", "Figma", "Prototyping", "User Research", "Wireframing"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "SL",
    projects: 6,
    collaborations: 9,
    featured: true,
  },
  {
    id: "3",
    name: "Marcus Chen",
    role: "Blockchain Developer",
    bio: "Blockchain developer specializing in smart contracts and decentralized applications. Passionate about building the future of web3.",
    skills: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js", "Blockchain"],
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
    skills: ["Product Strategy", "Agile", "User Research", "Roadmapping", "Stakeholder Management", "Market Research"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "ER",
    projects: 10,
    collaborations: 15,
    featured: false,
  },
  {
    id: "5",
    name: "David Kim",
    role: "Backend Developer",
    bio: "Backend developer focused on scalable architecture and performance optimization. I love solving complex technical challenges.",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS", "GraphQL"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "DK",
    projects: 7,
    collaborations: 11,
    featured: false,
  },
  {
    id: "6",
    name: "Olivia Taylor",
    role: "Product Designer",
    bio: "Product designer with a background in psychology. I create user-centered designs that are both beautiful and functional.",
    skills: ["Figma", "UI Design", "User Research", "Prototyping", "Visual Design", "Interaction Design"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "OT",
    projects: 9,
    collaborations: 8,
    featured: true,
  },
  {
    id: "7",
    name: "James Wilson",
    role: "Mobile Developer",
    bio: "Mobile app developer specializing in cross-platform solutions. I'm passionate about creating seamless mobile experiences.",
    skills: ["React Native", "Flutter", "Firebase", "Swift", "Kotlin", "Mobile Development"],
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
    skills: ["Content Writing", "Technical Writing", "UX Writing", "Content Strategy", "SEO", "Digital Marketing"],
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
    skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow", "Statistical Modeling", "Data Visualization"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "MB",
    projects: 5,
    collaborations: 8,
    featured: true,
  },
  {
    id: "10",
    name: "Emma Garcia",
    role: "DevOps Engineer",
    bio: "DevOps engineer specializing in CI/CD pipelines and infrastructure automation. I help teams deliver software faster and more reliably.",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Infrastructure as Code", "Monitoring"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "EG",
    projects: 7,
    collaborations: 9,
    featured: false,
  },
  {
    id: "11",
    name: "Ryan Park",
    role: "AR/VR Developer",
    bio: "AR/VR developer with a passion for creating immersive experiences. I specialize in Unity development for educational and entertainment applications.",
    skills: ["Unity", "AR/VR", "C#", "3D Modeling", "Game Development", "Interaction Design"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "RP",
    projects: 4,
    collaborations: 5,
    featured: false,
  },
  {
    id: "12",
    name: "Natalie Wong",
    role: "Project Manager",
    bio: "Project manager with a technical background. I excel at coordinating cross-functional teams and delivering complex projects on time.",
    skills: ["Project Management", "Agile", "Scrum", "Risk Management", "Resource Planning", "Team Leadership"],
    avatar: "/placeholder.svg?height=48&width=48",
    initials: "NW",
    projects: 12,
    collaborations: 14,
    featured: true,
  },
]
