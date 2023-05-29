import { getUserInfo } from "@/lib/cookies";
import Header from "@/components/header";
import Framer from "@/components/framer";

export default async function TenantLayout({ children }: LayoutProps) {
  const user = await getUserInfo();
  if (!user) return null;

  return (
    <div className="x-tenant">
      <Header />
      <Framer tid={user.tid}>{children}</Framer>
    </div>
  );
}
