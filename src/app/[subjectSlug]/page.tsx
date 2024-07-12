import type { Subject } from "../types";

import { fetchSubjects } from "../components/actions";
import Planner from "./components/Planner";

export default async function SubjectPage({
  params,
}: Readonly<{
  params: { subjectSlug: string };
}>) {
  const subject: Subject[] = await fetchSubjects();

  return (
    <div className="grow p-10 text-white">
      <h1 className="text-5xl font-semibold capitalize">
        {subject.find((s) => s.id === Number(params.subjectSlug))?.name ??
          "Subject"}{" "}
      </h1>
      <Planner data={subject} />
    </div>
  );
}
