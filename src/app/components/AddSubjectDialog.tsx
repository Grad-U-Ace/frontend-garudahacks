import type { Dispatch, SetStateAction } from "react";

import { useState } from "react";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  setSubjects: Dispatch<
    SetStateAction<Array<{ value: string; label: string }>>
  >;
};

export function AddSubjectDialog({ setSubjects }: Props) {
  const [open, setOpen] = useState(false);
  const [subjectName, setSubjectName] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (subjectName.trim()) {
      const value = subjectName.toLowerCase().replace(/\s+/g, "-");
      console.log(value);
      setSubjects((subjects) => [...subjects, { value, label: value }]);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-2 w-full justify-start bg-white/10 transition-colors hover:bg-white/20">
          <Plus className="mr-2 h-4 w-4" />
          Add new subject
        </Button>
      </DialogTrigger>
      <DialogContent className="border-zinc-800 bg-zinc-900 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Add New Subject
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Enter the name of the new subject you'd like to add.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="subjectName" className="text-right text-zinc-300">
                Subject Name
              </Label>
              <Input
                id="subjectName"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                placeholder="e.g., Mathematics"
                className="col-span-3 border-zinc-700 bg-zinc-800 text-white placeholder-zinc-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Subject
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
