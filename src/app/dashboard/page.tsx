"use client";
import { useQuery, gql } from "@apollo/client";
import { TaskCard } from "@/components/task-card";
import { Task } from "@/types";
import Navbar from "@/components/navbar";

// Define your GraphQL query
const GET_TASKS = gql`
  query ExampleQuery {
  tasks {
    title
    description
    status
    dueDate
    id
  }
}
`;

export default function DashboardPage() {
  const { loading, error, data } = useQuery(GET_TASKS);

  const handleDelete = async (taskId: string) => {
    // Handle task deletion
    // You may want to add a mutation for deletion here
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {data.tasks.map((task: Task) => (
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

      {data.tasks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No tasks found. Create a new task to get started!</p>
        </div>
      )}
    </div>
  );
}
