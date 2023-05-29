import { getUserInfo } from "@/lib/cookies";

export default async function Page() {
  const user = await getUserInfo();
  return (
    <div className="aces-home">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Home</h1>
      <p>{user?.org_name}</p>
    </div>
  );
}
