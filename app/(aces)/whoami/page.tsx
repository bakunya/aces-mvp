import { getCookieHeaders, getUserInfo } from "@/lib/cookies";
import { apiURL } from "@/lib/utils";
import Link from "next/link";

async function getData() {
  const url = apiURL("/whoami");
  const headers = getCookieHeaders();
  const rs = await fetch(url, {
    ...headers,
    next: { revalidate: 0 },
  });

  if (rs.ok) {
    const json = await rs.json();
    return json;
  }
  return null;
}

export default async function Page() {
  const user = await getUserInfo()
  const data = await getData()
  const otherAccounts = data?.filter((a: any) => a.tid != user?.tid);

  return (
    <div className="aces-whoami">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Whoami</h1>
      <pre className="text-[12.25px] my-6">{JSON.stringify(user, null, 3)}</pre>

      <h2 className="text-xl text-slate-700 font-bold mb-6">Switch Account:</h2>
      <div className="flex flex-row gap-3 my-4">
        {otherAccounts.map((acc: any) => (
          <Link key={acc.tid} href={`/switch-to/${acc.tid}`} className="border border-slate-400 px-4 py-2 text-sm">
            {acc.org_name}
          </Link>
        ))}
      </div>

      <pre className="text-[12.25px] my-6">{JSON.stringify(otherAccounts, null, 3)}</pre>
    </div>
  );
}
