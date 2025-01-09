"use client";
import { useQuery, useMutation, gql } from "@apollo/client";
import { TaskCard } from "@/components/task-card";
import { Task } from "@/types";
import { useState } from "react";
import MessageViewer from "@/components/message-viewer";

// Define your GraphQL query
const GET_TASKS = gql`
  query GET_TASKS {
    tasks {
      title
      description
      status
      dueDate
      id
    }
  }
`;

const DELETE_TASK = gql`
  mutation Mutation($deleteTaskId: ID!) {
    deleteTask(id: $deleteTaskId)
  }
`;

export default function DashboardPage() {
  const { loading, error, data, refetch } = useQuery(GET_TASKS);
  const [deleteTask] = useMutation(DELETE_TASK);
  const [deletingTaskId, setDeletingTaskId] = useState<string | null>(null);

  const handleDelete = async (taskId: string) => {
    try {
      setDeletingTaskId(taskId);
      await deleteTask({
        variables: {
          deleteTaskId: taskId
        }
      });
      await refetch();
    } catch (err) {
      console.error('Error deleting task:', err);
    } finally {
      setDeletingTaskId(null);
    }
  };

  if (loading) return <MessageViewer message="Loading tasks..." />;
  if (error) return <MessageViewer message={`Error: ${error.message}`} />;

  return (
    <>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
        {data.tasks.map((task: Task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={(task) => {
              window.location.href = `/tasks/${task.id}`;
            }}
            onDelete={handleDelete}
            isDeleting={deletingTaskId === task.id}
          />
        ))}
      </div>

      {data.tasks.length === 0 && <MessageViewer message="No tasks found. Create a new task to get started!" />}
    </>
  );
}
