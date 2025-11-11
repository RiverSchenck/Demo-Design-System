import { useNavigate } from "react-router-dom"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/ui/primatives/Card/Card"
import { Button } from "@/ui/primatives/Button/Button"
import { Input } from "@/ui/primatives/Input/Input"
import { Label } from "@/ui/primatives/Label/Label"
import { GoogleIcon } from "@/ui/icons/Google"
import { GitHubIcon } from "@/ui/icons/Github"

const imgTethrLight = "http://localhost:3845/assets/4925344e174d89462a4cabf7f4d870de39d1d185.png"

type LogoProps = {
  className?: string
}

function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <div className="absolute h-[41px] left-0 top-0 w-[101.99px]">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgTethrLight}
        />
      </div>
    </div>
  )
}

export default function CreateAccount() {
  const navigate = useNavigate()

  return (
    <div className="bg-background flex items-start relative size-full min-h-screen">
      {/* Left Sidebar */}
      <div className="basis-0 bg-zinc-900 flex flex-col grow h-full items-start justify-between min-h-screen overflow-clip p-10 relative shrink-0">
        <div className="flex gap-2 items-center relative shrink-0">
          <Logo className="h-[41px] overflow-clip relative shrink-0 w-[104px]" />
        </div>
        <div className="flex flex-col font-normal gap-2 items-start relative shrink-0 text-white w-full">
          <p className="leading-[28px] min-w-full relative shrink-0 text-[18px]">
            "Wow what a time saver, this product really is the best"
          </p>
          <p className="leading-[20px] relative shrink-0 text-[14px]">River Schenck</p>
        </div>
      </div>

      {/* Right Content */}
      <div className="basis-0 flex flex-col gap-6 grow h-full items-center justify-center min-h-screen relative shrink-0">
        {/* Top Right Navigation Button */}
        <div className="absolute top-8 right-8">
          <Button variant="ghost" size="default" styleType="new-york" showLabel onClick={() => navigate('/signin')}>
            Login
          </Button>
        </div>

        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
            <CardDescription>Enter your email below to create your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2 w-full">
              <Button variant="outline" className="flex-1" size="default">
                <GoogleIcon size={20} />
                Google
              </Button>
              <Button variant="outline" className="flex-1" size="default">
                <GitHubIcon size={20} />
                GitHub
              </Button>
            </div>
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-email">Email</Label>
              <Input id="create-email" type="email" placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="create-password">Password</Label>
              <Input id="create-password" type="password" placeholder="Enter your password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" size="default">
              Create Account
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

