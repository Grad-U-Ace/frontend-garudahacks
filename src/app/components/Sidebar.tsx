import type { Subject } from "../types";

import Link from "next/link";

import { fetchSubjects } from "./actions";
import { SubjectCombobox } from "./SubjectCombobox";

export default async function Sidebar() {
  const subjects: Subject[] = await fetchSubjects();
  return (
    <aside className="flex h-svh w-[280px] flex-col items-stretch gap-10 py-10 pl-5 text-white">
      <Link href={"/"}>
        <h1 className="text-center text-4xl font-medium">Guruda</h1>
      </Link>
      <SubjectCombobox data={subjects} />
      <Link href={"/activities"}>
        <div className="bg-white/10 p-3 rounded-lg transition-colors hover:bg-white/20 backdrop-blur-3xlm">
          Make Activities
        </div>
      </Link>
    </aside>
  );
}
