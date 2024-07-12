import type { Subject } from "../types";

import { fetchSubjects } from "./actions";
import { SubjectCombobox } from "./SubjectCombobox";

export default async function Sidebar() {
  const subjects: Subject[] = await fetchSubjects();
  return (
    <aside className="flex h-svh w-[280px] flex-col items-stretch gap-10 py-10 pl-5 text-white">
      <h1 className="text-center text-4xl font-medium">Guruda</h1>
      <SubjectCombobox data={subjects} />
    </aside>
  );
}
