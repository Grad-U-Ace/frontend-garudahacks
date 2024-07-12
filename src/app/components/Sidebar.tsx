import { SubjectCombobox } from "./SubjectCombobox";

export default function Sidebar() {
  return (
    <aside className="flex h-svh w-[280px] flex-col items-stretch gap-10 py-10 pl-5 text-white">
      <h1 className="text-center text-4xl font-medium">guruda</h1>
      <SubjectCombobox />
    </aside>
  );
}
