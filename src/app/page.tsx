"use client";

import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ListTodo, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ListTodo className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">TaskMaster</span>
          </div>
          <div className="space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-br from-gray-900 via-violet-900 to-gray-900">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-sky-50" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full border bg-white/50 backdrop-blur-sm text-primary">
                <Zap className="w-4 h-4 mr-2" />
                <span>Supercharge your productivity</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 bg-clip-text text-transparent">
                Task Management Made Simple
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stay organized, meet deadlines, and achieve your goals with our
                powerful yet intuitive task management system.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="font-semibold bg-gradient-to-bl from-gray-900 via-violet-900 to-gray-900">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button size="lg" variant="outline" className=" bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 bg-clip-text text-transparent">
                    Live Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Everything you need to stay organized</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful features to help you manage tasks, collaborate with your team, and achieve your goals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border">
                <CheckCircle2 className="h-12 w-12 text-violet-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Task Management</h3>
                <p className="text-muted-foreground">
                  Organize tasks with priorities, due dates, and custom statuses to stay on top of your work.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border">
                <div className="h-12 w-12 text-blue-600 mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor task progress and completion rates with visual indicators and status updates.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 border">
                <div className="h-12 w-12 text-emerald-600 mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Due Date Reminders</h3>
                <p className="text-muted-foreground">
                  Never miss a deadline with smart reminders and notifications for upcoming tasks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-900 to-violet-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already managing their tasks more efficiently.
            </p>
            <Link href="/auth/signup">
              <Button size="lg" variant="secondary" className="font-semibold">
                Start for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}