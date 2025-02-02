'use client';

import { useQuery } from "@tanstack/react-query";
import MessageViewer from "@/components/message-viewer";
import { DELETE_TASK, GET_TASKS } from "@/graphql/queries";
import client from "@/lib/graphqlClient";
import { Task } from "@/types";
import { TaskCard } from "@/components/task-card";
import { useState } from "react";
import toast from "react-hot-toast";

const fetchTasks = async () => {
  const data:any = await client.request(GET_TASKS);
  return data.tasks;
};

const deleteTask = async (id: string) => {
  const data = await client.request(DELETE_TASK, {
    deleteTaskId: id
  });
  return data;
};

export default function DashboardPage() {
  const { data, error, isLoading, isError, refetch } = useQuery({ 
    queryKey: ["tasks"], 
    queryFn: fetchTasks 
  });
  const [deletingTaskId, setDeletingTaskId] = useState<string | null>(null);

  const handleDelete = async (taskId: string) => {
    try {
      setDeletingTaskId(taskId);
      await deleteTask(taskId);
      await refetch();
      toast.success('Successfully deleted!');
    } catch (err) {
      console.error('Error deleting task:', err);
      toast.error('Failed to delete task');
    } finally {
      setDeletingTaskId(null);
    }
  };

  if (isLoading) return <MessageViewer message="Loading tasks..." />;
  if (isError) {
    return <MessageViewer message={`Error: ${error?.message || "An Error occured while displaying tasks"}`} />;
  }

  return (
     <div className="space-y-4">
          <div className="border-b-2 pb-4">
               <h3 className="text-xl font-semibold">In Progress Task</h3>
               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4">
                    {
                    data?.map((task: Task) => (
                    <TaskCard
                         key={task.id}
                         task={task}
                         onEdit={(task) => {
                         window.location.href = `/tasks/${task.id}`;
                         }}
                         onDelete={handleDelete}
                         isDeleting={deletingTaskId === task.id}
                    />
                    ))
                    }
               </div>
          </div>
     </div>
     );
}
