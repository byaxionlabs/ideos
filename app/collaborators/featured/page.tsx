import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Trophy, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"

export default function FeaturedCollaboratorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="px-3 py-1 text-sm" variant="secondary">
                  <Star className="mr-1 h-3 w-3 fill-yellow-500 text-yellow-500" />
                  Top Contributors
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Featured Collaborators
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Meet the exceptional individuals who are making a significant impact in our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {topCollaborators.map((collaborator) => (
                <Card key={collaborator.id} className="overflow-hidden">
                  <div className="relative">
                    <div className="aspect-[3/1] w-full bg-gradient-to-r from-primary/20 to-primary/5"></div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                      <Avatar className="h-24 w-24 border-4 border-background translate-y-1/2">
                        <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                        <AvatarFallback>{collaborator.initials}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <CardHeader className="pt-16 text-center">
                    <CardTitle>{collaborator.name}</CardTitle>
                    <CardDescription>{collaborator.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex justify-center gap-2 mb-4">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Trophy className="h-3 w-3 text-yellow-500" />
                        Top Contributor
                      </Badge>
                      {collaborator.specialization && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          {collaborator.specialization}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">{collaborator.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {collaborator.skills.slice(0, 5).map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                      {collaborator.skills.length > 5 && (
                        <Badge variant="outline">+{collaborator.skills.length - 5} more</Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{collaborator.projects} Projects</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{collaborator.collaborations} Collaborations</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/profile/${collaborator.id}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Rising Stars</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  These collaborators are quickly making a name for themselves with their exceptional contributions.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {risingStars.map((collaborator) => (
                <Card key={collaborator.id} className="overflow-hidden">
                  <CardHeader className="p-4 text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-2">
                      <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                      <AvatarFallback>{collaborator.initials}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{collaborator.name}</CardTitle>
                    <CardDescription>{collaborator.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 text-center">
                    <div className="flex justify-center gap-2 mb-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        Rising Star
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">{collaborator.bio}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center border-t p-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/profile/${collaborator.id}`}>View Profile</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Specialists</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  These collaborators are experts in their specific domains and bring valuable specialized knowledge.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {specialists.map((specialist) => (
                <Card key={specialist.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <Avatar className="h-20 w-20 border">
                        <AvatarImage src={specialist.avatar} alt={specialist.name} />
                        <AvatarFallback>{specialist.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold">{specialist.name}</h3>
                        <p className="text-muted-foreground">{specialist.role}</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 my-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            {specialist.specialization}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{specialist.bio}</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                          {specialist.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                          {specialist.skills.length > 3 && (
                            <Badge variant="outline">+{specialist.skills.length - 3} more</Badge>
                          )}
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/profile/${specialist.id}`}>View Profile</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Featured Collaborators</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Contribute to projects, share your expertise, and become a featured collaborator yourself.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/projects">Browse Projects</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/collaborators">Find Collaborators</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 ProjectHub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const topCollaborators = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "Full Stack Developer",
    bio: "Full stack developer with 5+ years of experience. Passionate about creating innovative solutions that make everyday life easier.",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS", "GraphQL", "Next.js", "Express", "Docker", "CI/CD"],
    avatar: "/placeholder.svg?height=96&width=96",
    initials: "AJ",
    projects: 8,
    collaborations: 12,
    specialization: "Web Applications",
  },
  {
    id: "6",
    name: "Olivia Taylor",
    role: "Product Designer",
    bio: "Product designer with a background in psychology. I create user-centered designs that are both beautiful and functional.",
    skills: [
      "Figma",
      "UI Design",
      "User Research",
      "Prototyping",
      "Visual Design",
      "Interaction Design",
      "Wireframing",
      "Design Systems",
    ],
    avatar: "/placeholder.svg?height=96&width=96",
    initials: "OT",
    projects: 9,
    collaborations: 8,
    specialization: "User Experience",
  },
  {
    id: "9",
    name: "Michael Brown",
    role: "Data Scientist",
    bio: "Data scientist with a focus on machine learning and AI. I love working on projects that use data to solve real-world problems.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "TensorFlow",
      "Statistical Modeling",
      "Data Visualization",
      "NLP",
      "Computer Vision",
    ],
    avatar: "/placeholder.svg?height=96&width=96",
    initials: "MB",
    projects: 5,
    collaborations: 8,
    specialization: "AI Solutions",
  },
]

const risingStars = [
  {
    id: "13",
    name: "Jasmine Patel",
    role: "Frontend Developer",
    bio: "Frontend developer with a passion for creating accessible and performant web applications.",
    skills: ["React", "TypeScript", "CSS", "Accessibility", "Performance Optimization"],
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "JP",
    projects: 3,
    collaborations: 4,
  },
  {
    id: "14",
    name: "Thomas Wilson",
    role: "Mobile Developer",
    bio: "Mobile developer specializing in cross-platform solutions with React Native.",
    skills: ["React Native", "JavaScript", "Mobile UI", "Firebase", "Redux"],
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "TW",
    projects: 2,
    collaborations: 5,
  },
  {
    id: "15",
    name: "Aisha Khan",
    role: "UX Researcher",
    bio: "UX researcher with a background in cognitive psychology. I help teams understand user needs and behaviors.",
    skills: ["User Research", "Usability Testing", "Interview Methods", "Data Analysis"],
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "AK",
    projects: 4,
    collaborations: 3,
  },
  {
    id: "16",
    name: "Carlos Rodriguez",
    role: "Backend Developer",
    bio: "Backend developer focused on building scalable and secure APIs and services.",
    skills: ["Node.js", "Express", "MongoDB", "API Design", "Security"],
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "CR",
    projects: 3,
    collaborations: 4,
  },
]

const specialists = [
  {
    id: "17",
    name: "Dr. Sarah Chen",
    role: "AI Ethics Specialist",
    bio: "PhD in Computer Science with a focus on ethical AI development. I help teams build responsible AI systems that prioritize fairness and transparency.",
    skills: [
      "AI Ethics",
      "Fairness in ML",
      "Explainable AI",
      "Bias Detection",
      "Responsible AI Design",
      "Python",
      "TensorFlow",
    ],
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "SC",
    projects: 6,
    collaborations: 9,
    specialization: "AI Ethics",
  },
  {
    id: "18",
    name: "Marcus Williams",
    role: "Accessibility Expert",
    bio: "Certified accessibility specialist with experience making digital products usable for everyone, including people with disabilities.",
    skills: ["WCAG", "Screen Reader Testing", "Keyboard Navigation", "Accessible Design", "HTML", "CSS", "JavaScript"],
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "MW",
    projects: 7,
    collaborations: 11,
    specialization: "Accessibility",
  },
  {
    id: "19",
    name: "Leila Nguyen",
    role: "Blockchain Architect",
    bio: "Blockchain architect with expertise in designing and implementing decentralized applications and smart contracts.",
    skills: [
      "Solidity",
      "Ethereum",
      "Smart Contracts",
      "DeFi",
      "Web3.js",
      "Blockchain Security",
      "Consensus Mechanisms",
    ],
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "LN",
    projects: 5,
    collaborations: 7,
    specialization: "Blockchain",
  },
  {
    id: "20",
    name: "Robert Jackson",
    role: "DevOps Specialist",
    bio: "DevOps engineer with expertise in building and maintaining CI/CD pipelines and cloud infrastructure for high-traffic applications.",
    skills: ["Kubernetes", "Docker", "AWS", "CI/CD", "Infrastructure as Code", "Monitoring", "Security"],
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "RJ",
    projects: 8,
    collaborations: 10,
    specialization: "DevOps",
  },
]
