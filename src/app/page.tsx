import { LoginBar } from "@/components/component/login-bar";
// import { MainPage } from "@/components/component/main-page";

// const Home = () => {
//   return (
//     <div>
//       <MainPage />
//       <LoginBar />
//     </div>
//   );
// };

// export default Home;

import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";

export function MainPage() {
  return (
    <div
      key="1"
      className="flex flex-col min-h-screen bg-white dark:bg-gray-800"
    >
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MusicIcon className="h-6 w-6 mr-2" />
          <span className="text-xl font-bold">Z Music Lib</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
          <div className="flex items-center gap-4">
            <Link
              className="px-2 py-1 text-sm font-medium rounded bg-blue-500 text-white hover:bg-blue-600"
              href="/loginPage"
            >
              Log In
            </Link>
            <Link
              className="px-2 py-1 text-sm font-medium rounded border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600"
              href="#"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-[3.2rem] 2xl:text-[3.5rem] bg-blue-200">
                  Z Music Lib: Your Interactive Music Creation Platform
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Generate, modify and compose music in a dialogical manner.
                  Preview and audition your creation directly on the web,
                  download it for further modification, or upload your own
                  compositions.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                    href="#"
                  >
                    Start Composing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Genre Recommendation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Based on Your Preferences
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We recommend genres and styles based on your preferences and
                  habits. Import your song list and answer some preference
                  questionnaires to get started.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg">
              <div className="w-full aspect-[4/3]" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Users Are Saying
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our users about their experience with Z Music Lib.
              </p>
            </div>
            <div className="mx-auto grid gap-6 md:max-w-2xl lg:max-w-3xl lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <Avatar src="/avatar-1.jpg" />
                  <div className="ml-4">
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-500">Composer</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Z Music Lib has been a game changer for me. It has helped me
                    generate unique ideas for my compositions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar src="/avatar-2.jpg" />
                  <div className="ml-4">
                    <h3 className="font-semibold">Jane Smith</h3>
                    <p className="text-sm text-gray-500">Music Teacher</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    I use Z Music Lib in my music classes. My students love
                    creating and modifying their own compositions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © Z Music Lib. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export default MainPage;
