"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Mail } from "lucide-react"
import Github from "@/components/ui/Github"
import Vercel from "@/components/ui/Vercel"
import Discord from "@/components/ui/Discord"
import { authClient } from "@/lib/auth-client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  async function handleSignUpwithProvider(provider: string) {

    const result = await authClient.signIn.social({
      provider: provider,
      callbackURL: "/",
    })

    if (!result.data) {
      setError(result.error?.message || `Sign-Up With ${provider} failed`)
    } else {
      router.replace("/")
    }

  }

  const handleSignUp = async () => {
    const result = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      callbackURL: "/",
    }
    )
    if (!result.data) {
      setError(result.error?.message || `Sign-up failed`)
      setTimeout(() => { setError("") }, 2000);
    } else {
      router.replace("/")
    }

  }

  const validateConfirmPassword = (repeatedPassword: string) => {
    if (repeatedPassword === password) {
      setError("")
    } else {
      setError("Passwords are not matching")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
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
                  <div className="grid gap-4 text-left">
                    {/* <div className="grid grid-cols-2 gap-4"> */}
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">Full Name</Label>
                      <Input id="first-name" placeholder="John" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    {/* <div className="grid gap-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div> */}
                    {/* </div> */}
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="********" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input id="confirm-password" type="password" placeholder="********" onChange={(e) => validateConfirmPassword(e.target.value)} />
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
                    <Button type="submit" className="w-full" onClick={() => handleSignUp()} disabled={error !== ""}>
                      Create Account
                    </Button>
                  </div>
                  {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
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
                    <Button variant="outline" className="w-full" onClick={() => handleSignUpwithProvider("github")}>
                      <Github />
                      GitHub
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => handleSignUpwithProvider("google")}>
                      <Mail className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => handleSignUpwithProvider("vercel")}>
                      <Vercel />
                      Vercel
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => handleSignUpwithProvider("discord")}>
                      <Discord />
                      Discord
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main >
    </div >
  )
}
