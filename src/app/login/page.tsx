import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/component/header";

export default function LoginBar() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden md:max-w-2xl">
          <CardContent className="flex flex-col justify-center p-6 space-y-4">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Log in to your account
            </h2>
            <div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <Button className="w-full mt-4" type="submit">
                Log In
              </Button>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?
              </span>
              <Link
                className="text-sm text-blue-600 underline ml-1"
                href="/signup"
              >
                Sign Up
              </Link>
              <Button
                aria-label="Go back to home page"
                className="w-full mt-4"
                type="button"
              >
                <Link className="text-sm text-blue-600 underline" href="/">
                  Go back to Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
