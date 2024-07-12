import Link from "next/link";

export default async function Index() {
  return (
    <>
      <p className="">Hello world</p>
      <Link href="/todo" className="underline">
        See todo
      </Link>
    </>
  );
}
