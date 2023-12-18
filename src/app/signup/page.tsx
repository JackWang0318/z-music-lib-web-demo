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

export default function SignupBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your username and password to sign up your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Enter your username"
            required
            type="text"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <div className="justify-content: space-between align-items:center">
          <Link
            className="px-2 py-1 text-sm font-medium rounded border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600"
            href="/"
          >
            X
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
            href="/#"
          >
            Sign up
          </Link>
          <Link
            className="px-2 py-1 text-sm font-medium rounded border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600"
            href="/login"
          >
            Log in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
