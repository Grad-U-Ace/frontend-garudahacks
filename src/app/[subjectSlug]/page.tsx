import Planner from "./components/Planner";

export default function SubjectPage({
  params,
}: {
  params: { subjectSlug: string };
}) {
  return (
    <div className="grow p-10 text-white">
      <h1 className="text-5xl font-semibold capitalize">
        {params.subjectSlug}
      </h1>
      <Planner />

    </div>
  );
}
