"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskForm } from "@/components/task-form";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

export default function NewTaskPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    // Handle task creation
    console.log("Creating task:", data);
    //router.push("/dashboard");
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>

      <div className="p-3">  
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Create New Task</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskForm onSubmit={handleSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}