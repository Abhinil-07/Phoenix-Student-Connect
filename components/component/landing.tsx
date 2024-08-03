import Link from "next/link";
import { Button } from "../ui/button";

export function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className=" bg-[#131515] text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Phoenix</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className=" bg-[#131515] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                    Unleash Your Tech Potential with Phoenix
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Phoenix, the official tech club of Netaji Subhash
                    Engineering College, is a vibrant community dedicated to
                    fostering innovation, collaboration, and the pursuit of
                    technological excellence.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Link href={"https://phoenixnsec.in/wings"} target="blank">
                    <Button className="w-full" variant={"outline"}>
                      Visit official website
                    </Button>
                  </Link>
                  <Link href={"/login"}>
                    <Button className="w-full" variant={"outline"}>
                      Join Now
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="https://phoenixnsec.in/static/media/avenir.d86334da7dc6dd1a0f7c.jpeg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
                Explore the World of Phoenix
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Phoenix, the official tech club of Netaji Subhash Engineering
                College, offers a wide range of activities, events, and
                opportunities for students to explore their passion for
                technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <LaptopIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Tech Workshops
                </h3>
                <p className="text-muted-foreground">
                  Dive into the latest technologies and learn from industry
                  experts.
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <TrophyIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Hackathons
                </h3>
                <p className="text-muted-foreground">
                  Participate in thrilling hackathons and showcase your
                  problem-solving skills.
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <CalendarDaysIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Upcoming Events
                </h3>
                <p className="text-muted-foreground">
                  Stay updated on the latest events and activities organized by
                  Phoenix.
                </p>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <TrophyIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Achievements
                </h3>
                <p className="text-muted-foreground">
                  Explore the impressive accomplishments of Phoenix members.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-[#131515] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                  Join the Phoenix Community
                </h2>
                <p className="max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Become a part of the vibrant Phoenix community and unlock a
                  world of opportunities. Join now to participate in our events,
                  workshops, and collaborative projects.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md  bg-[#131515]-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover: bg-[#131515]-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Join Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <div className="flex justify-center items-center py-6 text-sm text-muted-foreground">
        &copy; 2024 Phoenix. All rights reserved.
      </div>
    </div>
  );
}

function CalendarDaysIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function LaptopIcon(props: any) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TrophyIcon(props: any) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
