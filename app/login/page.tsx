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
import { authClient } from "@/lib/auth-client"
import { useState } from "react"
import Vercel from "@/components/ui/Vercel"
import Discord from "@/components/ui/Discord"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isRemember, setisRemember] = useState(false);
  // const [provider, setProvider] = useState("");

  async function handleSignInWithProvider(provider: string) {

    const result = await authClient.signIn.social({
      provider: provider,
      callbackURL: "/",
    })

    if (!result.data) {
      setError(result.error?.message || `Sign-in With ${provider} failed`)
    }

  }
  async function handleSignIn() {
    setLoading(true);
    setError(null);

    const result = await authClient.signIn.email({
      email,
      password,
      rememberMe: isRemember,
      callbackURL: "/",
    });

    if (!result.data) {
      setError(result.error?.message || "Sign-in failed");
    } else {
      // handle redirect or refresh
      // window.location.href = "/";
    }
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen flex-col">

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
                      <Input id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                      <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" checked={isRemember} onCheckedChange={(checkedState) => setisRemember(!!checkedState)} />
                      <Label htmlFor="remember" className="text-sm font-normal">
                        Remember me
                      </Label>
                    </div>
                    <Button type="submit" className="w-full" onClick={() => handleSignIn()} disabled={loading}>
                      {loading ? "Signing in…" : "Login"}
                    </Button>
                  </div>
                  {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
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
                    <Button variant="outline" className="w-full" onClick={() => { handleSignInWithProvider("github") }}>
                      <Github />
                      GitHub
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => { handleSignInWithProvider("google") }}>
                      <Mail className="mr-2 h-4 w-4" />
                      Google
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => { handleSignInWithProvider("vercel") }}>
                      <Vercel />
                      Vercel
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => { handleSignInWithProvider("discord") }}>
                      <Discord />
                      Discord
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
