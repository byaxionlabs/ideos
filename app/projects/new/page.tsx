"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { X } from "lucide-react"
import Navbar from "@/components/navbar"

export default function NewProjectPage() {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [techInput, setTechInput] = useState("")
  const [techStack, setTechStack] = useState([])
  const [requirements, setRequirements] = useState("")
  const [timeline, setTimeline] = useState("")
  const [teamSize, setTeamSize] = useState("")
  const [repoUrl, setRepoUrl] = useState("")
  const [demoUrl, setDemoUrl] = useState("")

  const handleAddTech = (e) => {
    e.preventDefault()
    if (techInput.trim() && !techStack.includes(techInput.trim())) {
      setTechStack([...techStack, techInput.trim()])
      setTechInput("")
    }
  }

  const handleRemoveTech = (tech) => {
    setTechStack(techStack.filter((t) => t !== tech))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    console.log({
      title,
      category,
      description,
      techStack,
      requirements,
      timeline,
      teamSize,
      repoUrl,
      demoUrl,
    })
    // Then redirect to the project page or show a success message
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Share Your Project Idea</h1>
              <p className="text-muted-foreground">
                Describe your project and find collaborators to help bring it to life.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                    <CardDescription>
                      Provide information about your project idea to attract potential collaborators.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Project Title</Label>
                      <Input
                        id="title"
                        placeholder="Enter a descriptive title for your project"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Categories</SelectLabel>
                            <SelectItem value="web">Web Application</SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="desktop">Desktop Application</SelectItem>
                            <SelectItem value="ai">AI / Machine Learning</SelectItem>
                            <SelectItem value="blockchain">Blockchain</SelectItem>
                            <SelectItem value="iot">IoT</SelectItem>
                            <SelectItem value="game">Game Development</SelectItem>
                            <SelectItem value="ar-vr">AR / VR</SelectItem>
                            <SelectItem value="data">Data Science</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your project idea, goals, and potential impact..."
                        className="min-h-[200px]"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tech-stack">Tech Stack</Label>
                      <div className="flex gap-2">
                        <Input
                          id="tech-stack"
                          placeholder="Add technologies (e.g., React, Node.js)"
                          value={techInput}
                          onChange={(e) => setTechInput(e.target.value)}
                        />
                        <Button type="button" onClick={handleAddTech}>
                          Add
                        </Button>
                      </div>
                      {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                              {tech}
                              <button
                                type="button"
                                onClick={() => handleRemoveTech(tech)}
                                className="ml-1 rounded-full hover:bg-muted"
                              >
                                <X className="h-3 w-3" />
                                <span className="sr-only">Remove {tech}</span>
                              </button>
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Collaborator Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="What skills or experience are you looking for in collaborators?"
                        className="min-h-[100px]"
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Estimated Timeline</Label>
                        <Select value={timeline} onValueChange={setTimeline}>
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-month">Less than 1 month</SelectItem>
                            <SelectItem value="1-3-months">1-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                            <SelectItem value="1-year-plus">More than 1 year</SelectItem>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="team-size">Team Size</Label>
                        <Select value={teamSize} onValueChange={setTeamSize}>
                          <SelectTrigger id="team-size">
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solo">Solo (just me)</SelectItem>
                            <SelectItem value="2-3">2-3 people</SelectItem>
                            <SelectItem value="4-6">4-6 people</SelectItem>
                            <SelectItem value="7-10">7-10 people</SelectItem>
                            <SelectItem value="10-plus">More than 10 people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="repo-url">Repository URL (Optional)</Label>
                        <Input
                          id="repo-url"
                          placeholder="GitHub, GitLab, etc."
                          value={repoUrl}
                          onChange={(e) => setRepoUrl(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="demo-url">Demo URL (Optional)</Label>
                        <Input
                          id="demo-url"
                          placeholder="Link to prototype or demo"
                          value={demoUrl}
                          onChange={(e) => setDemoUrl(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button variant="outline" asChild>
                      <Link href="/projects">Cancel</Link>
                    </Button>
                    <Button type="submit">Submit Project</Button>
                  </CardFooter>
                </Card>
              </form>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tips for a Great Project Listing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Be Specific</h3>
                    <p className="text-sm text-muted-foreground">
                      Clearly describe what your project does and the problem it solves.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Detail Requirements</h3>
                    <p className="text-sm text-muted-foreground">
                      List the specific skills and experience you're looking for in collaborators.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Set Expectations</h3>
                    <p className="text-sm text-muted-foreground">
                      Be clear about the time commitment, project timeline, and goals.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Show Progress</h3>
                    <p className="text-sm text-muted-foreground">
                      If you've already started, share what you've accomplished so far.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="public" defaultChecked />
                    <Label htmlFor="public" className="text-sm font-normal">
                      Make project public
                    </Label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Public projects are visible to all users and can be found in search results.
                  </p>
                  <Separator />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="comments" defaultChecked />
                    <Label htmlFor="comments" className="text-sm font-normal">
                      Allow comments
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="collaboration-requests" defaultChecked />
                    <Label htmlFor="collaboration-requests" className="text-sm font-normal">
                      Allow collaboration requests
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contact" defaultChecked />
                    <Label htmlFor="contact" className="text-sm font-normal">
                      Show contact information
                    </Label>
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
