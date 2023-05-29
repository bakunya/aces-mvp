import { getUserInfo } from "@/lib/cookies";
import Header from "@/components/header";
import Framer from "@/components/framer";

export default async function TenantLayout({ children }: LayoutProps) {
  const user = await getUserInfo();
  if (!user) return null;

  return (
    <div className="x-whoami">
      <Header />
      <Framer type={user.type} tid={user.tid}>{children}</Framer>
    </div>
  );
}
