import { getMany } from "@/lib/fetcher";

export default async function UsersPage() {
  const users = await getMany("user")
  return (
    <div className="tid">
      <p>Users</p>
      <pre className="text-[12.25px]">{JSON.stringify(users, null, 3)}</pre>
    </div>
  );
}
