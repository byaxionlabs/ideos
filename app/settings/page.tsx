"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Camera, Github, Globe, Linkedin, Twitter, X } from "lucide-react"
import Navbar from "@/components/navbar"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
            <Card className="h-fit">
              <CardContent className="p-4">
                <nav className="flex flex-col space-y-1">
                  <Button 
                    variant={activeTab === "profile" ? "default" : "ghost"} 
                    className="justify-start" 
                    onClick={() => setActiveTab("profile")}
                  >
                    Profile
                  </Button>
                  <Button 
                    variant={activeTab === "account" ? "default" : "ghost"} 
                    className="justify-start" 
                    onClick={() => setActiveTab("account")}
                  >
                    Account
                  </Button>
                  <Button 
                    variant={activeTab === "notifications" ? "default" : "ghost"} 
                    className="justify-start" 
                    onClick={() => setActiveTab("notifications")}
                  >
                    Notifications
                  </Button>
                  <Button 
                    variant={activeTab === "privacy" ? "default" : "ghost"} 
                    className="justify-start" 
                    onClick={() => setActiveTab("privacy")}
                  >
                    Privacy
                  </Button>
                  <Button 
                    variant={activeTab === "integrations" ? "default" : "ghost"} 
                    className="justify-start" 
                    onClick={() => setActiveTab("integrations")}
                  >
                    Integrations
                  </Button>
                </nav>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {activeTab === "profile" && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile</CardTitle>
                      <CardDescription>
                        Manage your public profile information.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex flex-col items-center gap-2">
                          <Avatar className="h-24 w-24 border">
                            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Camera className="h-4 w-4" />
                            Change
                          </Button>
                        </div>
                        <div className="grid gap-4 flex-1">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First name</Label>
                              <Input id="first-name" defaultValue="John" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last name</Label>
                              <Input id="last-name" defaultValue="Doe" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" defaultValue="johndoe" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="title">Professional Title</Label>
                            <Input id="title" defaultValue="Full Stack Developer" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input id="location" defaultValue="San Francisco, CA" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          className="min-h-[120px]"
                          defaultValue="Passionate about creating innovative solutions that make everyday life easier. I specialize in React, Node.js, and cloud architecture. Always looking for interesting projects to collaborate on."
                        />
                      </div>

                      <div className="space-y-4">
                        <Label>Skills</Label>
                        <div className="flex flex-wrap gap-2">
                          {["React", "Node.js", "TypeScript", "MongoDB", "AWS", "GraphQL", "Next.js", "Express", "Docker", "CI/CD"].map((skill) => (
                            <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                              {skill}
                              <button className="ml-1 rounded-full hover:bg-muted">
                                <X className="h-3 w-3" />
                                <span className="sr-only">Remove {skill}</span>
                              </button>
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="Add a skill..." />
                          <Button type="button">Add</Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-6">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Social Links</CardTitle>
                      <CardDescription>
                        Connect your social media accounts.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="website" className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Website
                        </Label>
                        <Input id="website" defaultValue="https://johndoe.dev" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="github" className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          GitHub
                        </Label>
                        <Input id="github" defaultValue="johndoe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twitter" className="flex items-center gap-2">
                          <Twitter className="h-4 w-4" />
                          Twitter
                        </Label>
                        <Input id="twitter" defaultValue="johndoe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin" className="flex items-center gap-2">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </Label>
                        <Input id="linkedin" defaultValue="johndoe" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-6">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Changes</Button>
                    </CardFooter>
                  </Card>
                </>
              )}

              {activeTab === "account" && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                      <CardDescription>
                        Update your account details and email preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="email-verified" defaultChecked disabled />
                        <Label htmlFor="email-verified" className="text-sm font-normal">
                          Email verified
                        </Label>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Change Password</CardTitle>
                      <CardDescription>
                        Update your password to keep your account secure.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-6">
                      <Button variant="outline">Cancel</Button>
                      <Button>Update Password</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Delete Account</CardTitle>
                      <CardDescription>
                        Permanently delete your account and all of your data.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center p-3 border rounded-md bg-destructive/10 text-destructive">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        <p className="text-sm">
                          This action is irreversible. All your data will be permanently removed.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-6">
                      <div></div>
                      <Button variant="destructive">Delete Account</Button>
                    </CardFooter>
                  </Card>
                </>
              )}

              {activeTab === "notifications" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Manage how and when you receive notifications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-projects">Project Updates</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about projects you created or joined
                            </p>
                          </div>
                          <Switch id="email-projects" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-comments">Comments</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications when someone comments on your projects
                            </p>
                          </div>
                          <Switch id="email-comments" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-collaborations">Collaboration Requests</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications for new collaboration requests
                            </p>
                          </div>
                          <Switch id="email-collaborations" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-mentions">Mentions</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications when you are mentioned in comments
                            </p>
                          </div>
                          <Switch id="email-mentions" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-newsletter">Newsletter</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive our monthly newsletter with platform updates
                            </p>
                          </div>
                          <Switch id="email-newsletter" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">In-App Notifications</h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="app-projects">Project Updates</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about projects you created or joined
                            </p>
                          </div>
                          <Switch id="app-projects" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="app-comments">Comments</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications when someone comments on your projects
                            </p>
                          </div>
                          <Switch id="app-comments" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="app-collaborations">Collaboration Requests</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications for new collaboration requests
                            </p>
                          </div>
                          <Switch id="app-collaborations" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="app-mentions">Mentions</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications when you are mentioned in comments
                            </p>
                          </div>
                          <Switch id="app-mentions" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="app-likes">Likes</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications when someone likes your projects
                            </p>
                          </div>
                          <Switch id="app-likes" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              )}

              {activeTab === "privacy" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>
                      Control your privacy and visibility on the platform.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Profile Visibility</h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="profile-visibility">Who can see your profile</Label>
                          <Select defaultValue="everyone">
                            <SelectTrigger id="profile-visibility">
                              <SelectValue placeholder="Select visibility" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="everyone">Everyone</SelectItem>
                              <SelectItem value="members">Registered Members Only</SelectItem>
                              <SelectItem value="collaborators">Collaborators Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-email">Show email on profile</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow others to see your email address on your profile
                            </p>
                          </div>
                          <Switch id="show-email" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="show-location">Show location on profile</Label>
                            <p className="text-sm text-muted-foreground">
                              Display your location information on your profile
                            </p>
                          </div>
                          <Switch id="show-location" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Project Visibility</h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="default-project-visibility">Default project visibility</Label>
                          <Select defaultValue="public">
                            <SelectTrigger id="default-project-visibility">
                              <SelectValue placeholder="Select visibility" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public (visible to everyone)</SelectItem>
                              <SelectItem value="members">Members Only (registered users)</SelectItem>
                              <SelectItem value="private">Private (only visible to collaborators)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="allow-comments">Allow comments on your projects</Label>
                            <p className="text-sm text-muted-foreground">
                              Let others comment on projects you create
                            </p>
                          </div>
                          <Switch id="allow-comments" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="allow-collaboration">Allow collaboration requests</Label>
                            <p className="text-sm text-muted-foreground">
                              Let others request to collaborate on your projects
                            </p>
                          </div>
                          <Switch id="allow-collaboration" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Data Usage</h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="analytics">Usage Analytics</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow us to collect anonymous usage data to improve the platform
                            </p>
                          </div>
                          <Switch id="analytics" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="personalization">Personalization</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow us to personalize your experience based on your activity
                            </p>
                          </div>
                          <Switch id="personalization" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              )}

              {activeTab === "integrations" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Integrations</CardTitle>
                    <CardDescription>
                      Connect third-party services to enhance your experience.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-md bg-primary/10 p-2 text-primary">
                            <Github className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-medium">GitHub</h4>
                            <p className="text-sm text-muted-foreground">
                              Connect your GitHub account to link repositories to your projects.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline">Connect</Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-md bg-primary/10 p-2 text-primary">
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
                              className="h-6 w-6"
                            >
                              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                              <path d="M16 19h6" />
                              <path d="M19 16v6" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Google</h4>
                            <p className="text-sm text-muted-foreground">
                              Connect your Google account for easier sign-in and calendar integration.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline">Connect</Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-md bg-primary/10 p-2 text-primary">
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
                              className="h-6 w-6"
                            >
                              <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3" />
                              <circle cx="18" cy="18" r="3" />
                              <path d="m19.5 15-3 3" />
                              <path d="m19.5 21-3-3" />
                              <path d="M19 18h-6" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Figma</h4>
                            <p className="text-sm text-muted-foreground">
                              Connect Figma to share design files directly in your projects.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline">Connect</Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-md bg-primary/10 p-2 text-primary">
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
                              className="h-6 w-6"
                            >
                              <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                              <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                              <path d="M18.5 8.5 22 " />
                              <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                              <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                              <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Slack</h4>
                            <p className="text-sm text-muted-foreground">
                              Connect Slack to receive notifications and collaborate with your team.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline">Connect</Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-md bg-primary/10 p-2 text-primary">
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
                              className="h-6 w-6"
                            >
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Notion</h4>
                            <p className="text-sm text-muted-foreground">
                              Connect Notion to embed documents and wikis in your projects.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline">Connect</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
