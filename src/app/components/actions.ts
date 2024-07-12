"use server";

import { Subject } from "../types";

const BASE_URL = "https://guruda-api-kv422ek6cq-et.a.run.app";

export async function fetchSubjects(): Promise<Subject[]> {
  const res = await fetch(`${BASE_URL}/mapel/`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch subjects. Server responded with status: ${res.status} ${res.statusText}`,
    );
  }

  const data: Subject[] = await res.json();
  console.log(data);
  return data;
}

export async function createSubject(subject: string): Promise<Subject> {
  const res = await fetch(`${BASE_URL}/mapel/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: subject }),
  });

  if (!res.ok) {
    throw new Error(
      `Failed to create subject. Server responded with status: ${res.status} ${res.statusText}`,
    );
  }

  const newSubject: Subject = await res.json();
  return newSubject;
}
