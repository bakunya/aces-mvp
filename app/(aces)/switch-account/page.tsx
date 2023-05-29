import { getUserInfo } from "@/lib/cookies";

export default async function Page() {
  const user = await getUserInfo();
  return (
    <div className="aces-switch-account">
      <p>Switch Account</p>
      <pre className="text-[12.25px]">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
}

// http://localhost:3000/01h150w91wnt2ahy11pr4d5z8k/projects/rona-2023/info
