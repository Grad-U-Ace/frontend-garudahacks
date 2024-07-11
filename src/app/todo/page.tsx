import { Checkbox } from "@/components/ui/checkbox";
import { createClient } from "@/utils/supabase/server";

const includedItems = [
  "Next.js",
  "Tailwind CSS",
  "ShadCN",
  "ShadCN Charts",
  "Supabase",
];

const todoItems = [
  "Next.js",
  "Tailwind CSS",
  "ShadCN",
  "ShadCN Charts",
  "Supabase",
];

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  console.log("isSupabaseConnected", isSupabaseConnected);

  return (
    <main className="flex min-h-svh flex-col items-center gap-20 bg-gradient-to-b from-white to-zinc-200 px-20 pt-40 dark:from-zinc-800 dark:to-zinc-900">
      <div className="relative flex w-[720px] grow flex-col gap-20 rounded-t-xl bg-gradient-to-b px-12 py-20 shadow-inner-sm shadow-white/15 before:pointer-events-none before:absolute before:inset-0 before:shadow-2xl dark:from-zinc-900 dark:to-zinc-950 before:dark:shadow-zinc-950">
        <h1 className="text-center text-6xl dark:text-zinc-200">
          All hail the{" "}
          <span className="font-semibold dark:text-white">imo</span>nolith
        </h1>
        <div className="flex flex-col text-xl">
          <div className="flex items-end gap-3">
            <p className="text-base/none">Included in the box:</p>
            <div className="h-0.5 grow rounded-full bg-gradient-to-r from-zinc-200 to-zinc-200/0"></div>
          </div>
          <div className="flex flex-col gap-1 py-4">
            {includedItems.map((item, index) => (
              <div
                key={`included-${item}`}
                className="flex items-center space-x-2"
              >
                <Checkbox id={`included-${index}`} disabled checked />
                <label
                  htmlFor={`included-${index}`}
                  className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col text-xl">
          <div className="flex items-end gap-3">
            <p className="text-base/none">TODO:</p>
            <div className="h-0.5 grow rounded-full bg-gradient-to-r from-zinc-200 to-zinc-200/0"></div>
          </div>
          <div className="flex flex-col gap-1 py-4">
            {todoItems.map((item, index) => (
              <div key={`todo-${item}`} className="flex items-center space-x-2">
                <Checkbox id={`todo-${index}`} />
                <label
                  htmlFor={`todo-${index}`}
                  className="text-base font-medium leading-none"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
