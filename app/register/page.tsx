import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Github, Mail } from "lucide-react"
import Navbar from "@/components/navbar"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="mx-auto max-w-md space-y-6 w-full">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Create an account</h1>
                <p className="text-muted-foreground">Enter your information to get started</p>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm font-normal">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                      Sign in
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
