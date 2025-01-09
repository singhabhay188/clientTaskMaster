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
  description: string;
  status: "PENDING" | "IN_PROGRESS" | "COMPLETED";
  dueDate?: String;

  createdAt: Date;
  updatedAt: Date;
};

export type TaskCreate = {
  title: string;
  description: string;
  dueDate?: String;
};

export type AuthResponse = {
  user: User;
  token: string;
};
