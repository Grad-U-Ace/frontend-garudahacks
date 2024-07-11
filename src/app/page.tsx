import Link from "next/link";

export default async function Index() {
  return (
    <main className="flex h-svh flex-col items-center justify-center gap-5">
      <p className="">Hello world</p>
      <Link href="/todo" className="underline">
        See todo
      </Link>
    </main>
  );
}
