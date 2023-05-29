import BackTo from "@/components/back-to";
import { getSingle } from "@/lib/fetcher";

export default async function PageWithId({ params }: WithIdProps) {
  const user = await getSingle("user", params.id);

  return (
    <div className="aces-user">
      <BackTo label="Users" href={`/${params.tid}/users`} />
      <h1 className="text-2xl text-slate-700 font-bold mb-6">User</h1>
      <pre className="text-[12.25px] my-6">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
}
