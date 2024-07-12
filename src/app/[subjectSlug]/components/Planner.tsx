"use client";

import React, { useState } from "react";

import { addDays, format } from "date-fns";
import { Trash } from "lucide-react";
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
import { CalendarRangePicker } from "./CalendarRangePicker";

const initialPlans = [
  { id: 1, topic: "Project Kickoff", dateRange: "Jul 15, 2023 - Jul 20, 2023" },
  { id: 2, topic: "Design Review", dateRange: "Aug 1, 2023" },
  // More plans...
];

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

export default function Planner() {
  const [plans, setPlans] = useState(initialPlans);

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

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newPlan = {
      id: plans.length + 1,
      topic: data.topic,
      dateRange: `${format(data.dateRange.from, "LLL dd, y")} - ${format(data.dateRange.to, "LLL dd, y")}`,
    };
    setPlans([...plans, newPlan]);
    form.reset({
      topic: "",
      dateRange: {
        from: new Date(),
        to: addDays(new Date(), 7),
      },
    });
  }

  const deletePlan = (id: number) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow sm:rounded-lg">
            <table className="shadow-inner-sm-bottom min-w-full divide-y divide-zinc-700/30 bg-zinc-950/20 shadow-white/10">
              <thead className="">
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
                    Date / Date Range
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700/30">
                {plans.map((plan) => (
                  <tr key={plan.id} className="group flex">
                    <td className="w-[45%] whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                      {plan.topic}
                    </td>
                    <td className="w-[45%] whitespace-nowrap px-3 py-4 text-sm text-zinc-300">
                      {plan.dateRange}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button
                        onClick={() => deletePlan(plan.id)}
                        className="text-red-600 opacity-0 transition-opacity duration-300 hover:text-red-900 group-hover:opacity-100"
                      >
                        <Trash className="size-4" aria-hidden="true" />
                        <span className="sr-only">Delete {plan.topic}</span>
                      </button>
                    </td>
                  </tr>
                ))}
                <tr key="form" className="group h-[53.5px]">
                  <td className="py-4 pl-4 pr-3">
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
