"use client";

import type { Subject, Topic } from "@/app/types";
import type { Dispatch, SetStateAction } from "react";

import React, { useEffect, useState } from "react";

import { addDays, format } from "date-fns";
import { Trash } from "lucide-react";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTopic } from "./actions";
import { CalendarRangePicker } from "./CalendarRangePicker";

const FormSchema = z.object({
  topic: z.string().min(1, "Topic is required."),
  dateRange: z.object({
    from: z.date({
      required_error: "Start date is required.",
    }),
    to: z.date({
      required_error: "End date is required.",
    }),
  }),
});

type PlannerProps = {
  data: Subject[];
};

export default function Planner({ data }: Readonly<PlannerProps>) {
  const [subjects, setSubjects] = useState<Subject[]>(data);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const pathname = usePathname();
  const slug = Number(pathname.split("/").pop());

  useEffect(() => {
    if (subjects.length > 0) {
      setSelectedSubject(
        subjects.find((subject) => subject.id === slug) ?? null,
      );
    }
  }, [subjects]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      topic: "",
      dateRange: {
        from: new Date(),
        to: addDays(new Date(), 7),
      },
    },
  });

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    if (!selectedSubject) return;

    try {
      const newTopic = await createTopic(
        formData.topic,
        selectedSubject.id,
        format(formData.dateRange.from, "yyyy-MM-dd"),
        format(formData.dateRange.to, "yyyy-MM-dd"),
      );

      setSubjects((prevSubjects) =>
        prevSubjects.map((subject) =>
          subject.id === selectedSubject.id
            ? { ...subject, topic_set: [...subject.topic_set, newTopic] }
            : subject,
        ),
      );

      form.reset({
        topic: "",
        dateRange: {
          from: new Date(),
          to: addDays(new Date(), 7),
        },
      });
    } catch (error) {
      console.error("Failed to add topic:", error);
      // You might want to show an error message to the user here
    }
  }

  const deleteTopic = (topicId: number) => {
    if (!selectedSubject) return;

    setSubjects((prevSubjects) =>
      prevSubjects.map((subject) =>
        subject.id === selectedSubject.id
          ? {
              ...subject,
              topic_set: subject.topic_set.filter(
                (topic) => topic.id !== topicId,
              ),
            }
          : subject,
      ),
    );
  };

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-zinc-700/30 bg-zinc-950/20 shadow-inner-sm-bottom shadow-white/10">
              <thead>
                <tr className="flex">
                  <th
                    scope="col"
                    className="w-[45%] py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    Topic
                  </th>
                  <th
                    scope="col"
                    className="w-[45%] px-3 py-3.5 text-left text-sm font-semibold text-white"
                  >
                    Date Range
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700/30">
                {selectedSubject?.topic_set.map((topic) => (
                  <tr key={topic.id} className="group flex">
                    <td className="w-[45%] whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                      {topic.name}
                    </td>
                    <td className="w-[45%] whitespace-nowrap px-3 py-4 text-sm text-zinc-300">
                      {`${topic.start_date} - ${topic.end_date}`}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button
                        onClick={() => deleteTopic(topic.id)}
                        className="text-red-600 opacity-0 transition-opacity duration-300 hover:text-red-900 group-hover:opacity-100"
                      >
                        <Trash className="size-4" aria-hidden="true" />
                        <span className="sr-only">Delete {topic.name}</span>
                      </button>
                    </td>
                  </tr>
                ))}
                <tr key="form" className="group h-[53.5px]">
                  <td className="py-4 pl-4 pr-3" colSpan={3}>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-[45%]">
                            <FormField
                              control={form.control}
                              name="topic"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Topic"
                                      {...field}
                                      className="reset-input bg-white/10 transition-colors hover:bg-white hover:text-zinc-900"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="w-[45%]">
                            <FormField
                              control={form.control}
                              name="dateRange"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <CalendarRangePicker
                                    value={field.value}
                                    onChange={field.onChange}
                                  />
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <Button type="submit" className="h-10">
                            Add topic
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
