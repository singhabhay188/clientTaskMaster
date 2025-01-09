"use client";
import { useState } from "react";
import { TaskCard } from "@/components/task-card";
import { Task } from "@/types";
import Navbar from "@/components/navbar";

// Temporary mock data
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Complete Project Proposal1",
    description: "Write and submit the project proposal for the new client",
    status: "PENDING",
    dueDate: new Date("2024-04-01"),
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Complete Project Proposal2",
    description: "Write and submit the project proposal for the new client",
    status: "PENDING",
    dueDate: new Date("2024-04-01"),
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    title: "Complete Project Proposal3",
    description: "Write and submit the project proposal for the new client",
    status: "PENDING",
    dueDate: new Date("2024-04-01"),
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    title: "Complete Project Proposal4",
    description: "Write and submit the project proposal for the new client",
    status: "PENDING",
    dueDate: new Date("2024-04-01"),
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    title: "Complete Project Proposal5",
    description: "Write and submit the project proposal for the new client",
    status: "PENDING",
    dueDate: new Date("2024-04-01"),
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    title: "Complete Project Proposal6",
    description: "Write and submit the project proposal for the new client",
    status: "PENDING",
    dueDate: new Date("2024-04-01"),
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    title: "Complete Project Proposal7",
    description: "Write and submit the project proposal for the new client",
    status: "PENDING",
    dueDate: new Date("2024-04-01"),
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    title: "Complete Project Proposal8",
    description: "Write and submit the project proposal for the new client",
    status: "PENDING",
    dueDate: new Date("2024-04-01"),
    userId: "user1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more mock tasks as needed
];

export default function DashboardPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleDelete = async (taskId: string) => {
    // Handle task deletion
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar/>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={(task) => {
              // Navigate to edit page
              window.location.href = `/dashboard/tasks/${task.id}`;
            }}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No tasks found. Create a new task to get started!</p>
        </div>
      )}
    </div>
  );
}