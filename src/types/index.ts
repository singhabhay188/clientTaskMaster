import { z } from "zod";

export type User = {
  id: string;
  email: string;
  name: string;
  password: string;

  createdAt: Date;
  updatedAt: Date;
};

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  dueDate?: Date;
  userId: string;

  createdAt: Date;
  updatedAt: Date;
};

export type AuthResponse = {
  user: User;
  token: string;
};
