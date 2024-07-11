import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex h-svh flex-col items-center justify-center gap-5">
      This is a protected page that you can only see as an authenticated user
      <Link href="/todo" className="underline">
        Return to todo
      </Link>
    </main>
  );
}
