"use server";

import { revalidateTag } from "next/cache";

import { Topic } from "@/app/types";

const BASE_URL = "https://guruda-api-kv422ek6cq-et.a.run.app";

export async function createTopic(
  topic: string,
  mapelPk: number,
  startDate: string,
  endDate: string,
): Promise<Topic> {
  const res = await fetch(`${BASE_URL}/mapel/${mapelPk}/topics`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: topic,
      mapel: mapelPk,
      start_date: startDate,
      end_date: endDate,
    }),
  });

  if (!res.ok) {
    throw new Error(
      `Failed to create topic. Server responded with status: ${res.status} ${res.statusText}`,
    );
  }

  revalidateTag("subjects");

  const newTopic: Topic = await res.json();
  return newTopic;
}
