'use server';

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;

  if (!title) return;

  try {
    // Database mein task insert karna
    await db.query(
      'INSERT INTO tasks (title, category) VALUES ($1, $2)',
      [title, category]
    );

    // Page ko refresh karna taake naya task nazar aaye
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Database Error:", error);
  }
}