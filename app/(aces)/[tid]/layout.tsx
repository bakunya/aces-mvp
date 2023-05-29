import { notFound } from "next/navigation";
import { getUserInfo } from "@/lib/cookies";
import Header from "@/components/header";
import Framer from "@/components/framer";

export default async function TenantLayout({ params, children }: TenantLayoutProps) {
  const user = await getUserInfo();
  if (params.tid != user?.tid) return notFound();

  return (
    <div className="x-tenant">
      <Header />
      <Framer type={user.type} tid={params.tid}>{children}</Framer>
    </div>
  );
}
