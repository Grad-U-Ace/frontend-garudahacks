"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function MakeActivitiesButton() {
  const params = useParams<{ subjectSlug: string }>();
  if (!params.subjectSlug) return null;
  return (
    <Link href={`/${params.subjectSlug}/activities`}>
      <div className="rounded-lg bg-white/10 p-3 backdrop-blur-3xl transition-colors hover:bg-white/20">
        Make Activities
      </div>
    </Link>
  );
}
