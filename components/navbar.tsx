"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Menu, Moon, Search, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"
import { authClient } from "@/lib/auth-client"


export default function Navbar() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Use the client-side session hook from Better Auth
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  const isLoggedIn = !!user

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/projects" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Projects
              </Link>
              <Link
                href="/collaborators"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/collaborators" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Collaborators
              </Link>
              <Link
                href="/categories"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/categories" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === "/about" ? "text-primary" : "text-muted-foreground",
                )}
              >
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">P</span>
          </span>
          <span className="font-bold inline-block">ProjectHub</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Projects</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover innovative project ideas or share your own with our community.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link href="/projects/trending" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Trending</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore the most popular projects right now.
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/categories" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Categories</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Browse projects by category or technology.
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/new" legacyBehavior passHref>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Submit Idea</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Share your project idea with our community.
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Collaborators</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/collaborators"
                      >
                        <div className="text-sm font-medium leading-none">Find Collaborators</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Connect with talented individuals for your projects.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/collaborators/skills"
                      >
                        <div className="text-sm font-medium leading-none">Browse by Skills</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find collaborators with specific skills and expertise.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/collaborators/requests"
                      >
                        <div className="text-sm font-medium leading-none">Collaboration Requests</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View and manage your collaboration requests.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/collaborators/featured"
                      >
                        <div className="text-sm font-medium leading-none">Featured Collaborators</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover top contributors in our community.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center ml-auto gap-2">
          {isSearchOpen ? (
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="w-[200px] sm:w-[300px] pl-8"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {isPending ? (
            // Show skeleton while session is loading
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
          ) : isLoggedIn ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
                    <span className="sr-only">Notifications</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80" align="end" forceMount>
                  <DropdownMenuLabel className="flex items-center justify-between">
                    Notifications
                    <Badge variant="outline" className="ml-1 text-xs">
                      5 new
                    </Badge>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-4 cursor-default">
                      <div className="flex w-full justify-between">
                        <span className="font-medium">New collaboration request</span>
                        <span className="text-xs text-muted-foreground">2h ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Emily Rodriguez wants to join your project "AI-Powered Recipe Generator"
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">
                          Decline
                        </Button>
                        <Button size="sm">Accept</Button>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-4 cursor-default">
                      <div className="flex w-full justify-between">
                        <span className="font-medium">Project liked</span>
                        <span className="text-xs text-muted-foreground">5h ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        David Chen liked your project "Ethical Fashion Marketplace"
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-4 cursor-default">
                      <div className="flex w-full justify-between">
                        <span className="font-medium">New comment</span>
                        <span className="text-xs text-muted-foreground">1d ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Michael Brown commented on your project "Community Garden Management"
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-4 cursor-default">
                      <div className="flex w-full justify-between">
                        <span className="font-medium">Project milestone completed</span>
                        <span className="text-xs text-muted-foreground">2d ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "Database Schema Finalization" milestone was completed in "Ethical Fashion Marketplace"
                      </p>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex flex-col items-start gap-1 p-4 cursor-default">
                      <div className="flex w-full justify-between">
                        <span className="font-medium">New featured project</span>
                        <span className="text-xs text-muted-foreground">3d ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your project "AI-Powered Recipe Generator" was featured on the homepage
                      </p>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="justify-center cursor-default">
                    <Link href="/notifications" className="w-full text-center text-sm text-primary">
                      View all notifications
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="@username" />
                      <AvatarFallback>{user?.name.split(" ").map(n => n[0].toUpperCase()).join("")}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user?.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/projects/my-projects">My Projects</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/collaborations">My Collaborations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => authClient.signOut()}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
