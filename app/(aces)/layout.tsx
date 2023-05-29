import { redirect } from "next/navigation";
import { getUserInfo } from "@/lib/cookies";
import Header from "@/components/header";
import Framer from "@/components/framer";

// export default async function AcesLayout({ children }: { children: React.ReactNode }) {
export default async function AcesLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserInfo();
  if (!user) redirect("/login");

  return (
    <div className="x-aces">{children}</div>
  )
  return (
    <div className="x-aces min-h-full">
      <div className="min-h-[500px]">
        <Header />
        <Framer>
          {children}
        </Framer>
      </div>
    </div>
  );
}
