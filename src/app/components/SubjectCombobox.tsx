"use client";

import { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { AddSubjectDialog } from "./AddSubjectDialog";

export function SubjectCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [subjects, setSubjects] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="justify-between bg-white/10 text-lg capitalize backdrop-blur-3xl transition-colors hover:bg-white/20"
        >
          {value
            ? subjects.find((subject) => subject.value === value)?.label
            : "Select subjects..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="popover-content-width-full bg-white/10 p-0 backdrop-blur-3xl">
        <Command className="bg-transparent">
          <CommandInput placeholder="Search subjects..." />
          <CommandEmpty>No subject found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {subjects.map((subject) => (
                <CommandItem
                  key={subject.value}
                  value={subject.value}
                  className="rounded capitalize transition-colors aria-selected:bg-white/20"
                  onSelect={(currentValue) => {
                    setValue(currentValue);
                    setOpen(false);
                    router.push(`/${currentValue}`);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === subject.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {subject.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
          <div className="px-1 pb-1">
            <AddSubjectDialog setSubjects={setSubjects} />
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
