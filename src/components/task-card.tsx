"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Pencil, Trash2 } from "lucide-react";
import { Task } from "../types";
import { format } from "date-fns";

// Add isDeleting to the props type
type TaskCardProps = {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  isDeleting?: boolean;
};

export function TaskCard({ task, onEdit, onDelete, isDeleting }: TaskCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{task.title}</CardTitle>
        <Badge variant="outline">{task.status}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{task.description}</p>
        {task.dueDate && (
          <div className="flex items-center mt-4 text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Due: {format(new Date(task.dueDate), 'PPP')}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(task)}
          disabled={isDeleting}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(task.id)}
          disabled={isDeleting}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </CardFooter>
    </Card>
  );
}