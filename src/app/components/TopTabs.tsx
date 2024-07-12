"use client";

export default function TopTabs() {
  return (
    <nav className="p-3 text-white">
      <div className="shadow-inner-sm-bottom flex w-full rounded-lg bg-zinc-950/30 px-5 py-3 shadow-white/10 fade-edges">
        <button className="btn btn-primary">Home</button>
        <button className="btn btn-primary">About</button>
        <button className="btn btn-primary">Contact</button>
      </div>
    </nav>
  );
}
