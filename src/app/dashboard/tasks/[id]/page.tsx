"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskForm } from "@/components/task-form";
import { useRouter } from "next/navigation";
import { Task } from "@/types";
import Navbar from "@/components/navbar";

// Temporary mock data
const mockTask: Task = {
  id: "1",
  title: "Complete Project Proposal",
  description: "Write and submit the project proposal for the new client",
  status: "PENDING",
  dueDate: new Date("2024-04-01"),
  userId: "user1",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function EditTaskPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    console.log("Updating task:", data);
    //router.push("/dashboard");
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>

      <div className="p-3">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Edit Task with id = {params.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskForm
              initialData={mockTask}
              onSubmit={handleSubmit}
            />
          </CardContent>
        </Card>
      </div>

    </div>
  );
}