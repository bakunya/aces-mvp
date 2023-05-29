import { getUserInfo } from "@/lib/cookies";

export default async function Page() {
  const user = await getUserInfo();
  return (
    <div className="aces-switch-account px-[12%] py-[4%]">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Switch Account</h1>
      <pre className="text-[12.25px]">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
}