import { LoginBar } from "@/components/component/login-bar";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Header from "@/components/component/header";
import Footer from "@/components/component/footer";

export function MainPage() {
  return (
    <div
      key="1"
      className="flex flex-col min-h-screen bg-white dark:bg-gray-800"
    >
      <Header />

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
                    href="/compose"
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
      <Footer />
    </div>
  );
}

export default MainPage;
