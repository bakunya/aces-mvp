import { redirect } from "next/navigation";
import { getUserInfo } from "@/lib/cookies";

// export default async function AcesLayout({ children }: { children: React.ReactNode }) {
export default async function AcesLayout({ params, children }: Props) {
  const user = await getUserInfo();
  if (!user) redirect("/login");

  return (
    <div className="x-aces">{children}</div>
  )
}
