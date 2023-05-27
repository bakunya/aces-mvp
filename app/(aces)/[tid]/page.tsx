import { getUserInfo } from "@/lib/cookies";

export default async function Page() {
  const user = await getUserInfo();
  return (
    <div className="tid">
      <p>{user?.org_name}</p>
    </div>
  );
}
