import { getMany } from "@/lib/fetcher";
import Link from "next/link";

async function getData() {
  const rs = await fetch("https://dev.aces.id/dev/etc");
  const json = await rs.json();
  return json;
}
export default async function Home() {
  const data = await getMany("project")

  return (
    <main className="main-home">
      <p>
        <Link href="/dashboard">Dashboard</Link>
      </p>
      <p>
        <Link href="/login">Login</Link>
      </p>
      <pre className="text-[12.25px]">{JSON.stringify(data, null, 3)}</pre>
    </main>
  );
}
