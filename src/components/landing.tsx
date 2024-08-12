"use client";
import NavbarLanding from "./landingnav";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  const { data, status } = useSession();
  async function handleClick() {
    if (status === "unauthenticated") {
      await signIn("google", { callbackUrl: "/home" });
    } else {
      router.push("/home");
    }
  }
  return (
    <div
      className="z-0 min-h-screen w-[100%]"
      style={{
        backgroundImage: "url(/herobg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavbarLanding />
      <div className="flex min-h-dvh flex-col bg-none text-white">
        <section className="w-full pt-24 md:pt-24 lg:pt-32">
          <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter flex flex-wrap text-5xl font-bold tracking-tighter text-gray-200 max-sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                  Unlock the Power of Our Platform
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl lg:text-2xl">
                  Unlock fast, accurate information retrieval with our
                  open-source AI—no more endless searching, just the essentials
                  delivered instantly.
                </p>
                <div className="mt-6 flex flex-wrap space-x-4">
                  <button
                    onClick={handleClick}
                    className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get Started
                  </button>
                  <Link
                    href="/learn"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 max-md:hidden"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/robot.jpg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Enhance your time
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a suite of powerful features to help you
                  work smarter, not harder.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <BotIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Artificial Intelligence</h3>
                </div>
                <p className="text-gray-300">
                  Experience the power of cutting-edge AI technology that
                  understands your needs and delivers the most relevant
                  information. Our open-source solution harnesses advanced
                  algorithms to ensure you&apos;re always in the know with
                  minimal effort.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    <CombineIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Faster</h3>
                </div>
                <p className="text-gray-300">
                  {" "}
                  Say goodbye to waiting and endless scrolling. Our app is
                  designed for lightning-fast information retrieval, giving you
                  what you need in a fraction of the time. Speed up your search
                  and focus on what truly matters.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-gray-300">
                    <ScalingIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Accuracy</h3>
                </div>
                <p className="text-gray-300">
                  Accuracy is key. Our AI-driven platform ensures you receive
                  only the most pertinent information, cutting through the noise
                  to deliver precise and trustworthy answers every time you
                  search.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

function BotIcon(props) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function CombineIcon(props) {
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
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function ScalingIcon(props) {
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
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  );
}

export default Main;
