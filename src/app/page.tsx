import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex size-full flex-col items-center justify-center text-white">
      {/* <p className="">Hello world</p>
      <Link href="/todo" className="underline">
        See todo
      </Link> */}
      <div className="text-center">
        <h1 className="text-8xl font-bold">Guruda</h1>
        <p className="text-3xl">
          an AI-powered assistant for generating educational content
        </p>
      </div>
    </div>
  );
}
