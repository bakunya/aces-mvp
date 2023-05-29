import { getMany } from "@/lib/fetcher";
import Link from "next/link";

export default async function Page({ params }: TenantProps) {
  const users = await getMany("user")

  return (
    <div className="aces-users">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Users</h1>
      {users.map((user: any) => (
        <p className="mb-1" key={user.id}>
          <Link href={`/${params.tid}/users/${user.uid}`}>
            {user.fullname}
          </Link>
        </p>
      ))}
      <pre className="text-[12.25px] my-6">{JSON.stringify(users, null, 3)}</pre>
    </div>
  );
}
