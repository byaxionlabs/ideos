import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Github, Mail } from "lucide-react"
import Navbar from "@/components/navbar"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="mx-auto max-w-md space-y-6 w-full">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground">Enter your credentials to sign in to your account</p>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link
                          href="/forgot-password"
                          className="text-sm text-primary underline-offset-4 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="password" type="password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm font-normal">
                        Remember me
                      </Label>
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-primary underline-offset-4 hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <div className="flex items-center">
                    <Separator className="flex-1" />
                    <span className="mx-2 text-xs text-muted-foreground">OR CONTINUE WITH</span>
                    <Separator className="flex-1" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
