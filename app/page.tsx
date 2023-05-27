import Link from "next/link";

async function getData() {
  const rs = await fetch("https://dev.aces.id/dev/etc");
  const json = await rs.json();
  console.log(json);
  return json;
}
export default async function Home() {
  const data = await getData();

  return (
    <main className="main-home">
      <Link href="/dashboard">Dashboard</Link>
      <pre className="text-[12.25px]">{JSON.stringify(data, null, 3)}</pre>
    </main>
  );
}
