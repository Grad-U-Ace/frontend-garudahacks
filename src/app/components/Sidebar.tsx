import type { Subject } from "../types";

import Link from "next/link";

import { fetchSubjects } from "./actions";
import { SubjectCombobox } from "./SubjectCombobox";
import MakeActivitiesButton from "./MakeActivitiesButton";

export default async function Sidebar() {
  const subjects: Subject[] = await fetchSubjects();
  return (
    <aside className="flex h-svh w-[280px] flex-col items-stretch gap-10 py-10 pl-5 text-white">
      <Link href={"/"}>
        <h1 className="text-center text-4xl font-medium">Guruda</h1>
      </Link>
      <SubjectCombobox data={subjects} />
      <MakeActivitiesButton />
    </aside>
  );
}
