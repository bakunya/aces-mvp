import { getMany } from "@/lib/fetcher";
import Link from "next/link";

export default async function UsersPage({ params }: TenantProps) {
  const users = await getMany("user")

  return (
    <div className="aces-users">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Users</h1>
      <div className="flex flex-col">
        {users.map((user: any) => (
          <Link key={users.id} href={`/${params.tid}/users/${user.uid}`}>
            {user.fullname}
          </Link>
        ))}
      </div>
      <pre className="text-[12.25px]">{JSON.stringify(users, null, 3)}</pre>
    </div>
  );
}
