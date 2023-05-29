import { getUserInfo } from "@/lib/cookies";

export default async function Page() {
  const user = await getUserInfo()

  return (
    <div className="aces-whoami">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Whoami</h1>

      <pre className="text-[12.25px] my-6">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
}
