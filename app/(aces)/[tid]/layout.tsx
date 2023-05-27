import { notFound } from "next/navigation";
import { getUserInfo } from "@/lib/cookies";

export default async function TIDLayout({
  params,
  children,
}: {
  params: {
    tid: string;
  }
  children: React.ReactNode;
}) {
  const user = await getUserInfo();
  if (params.tid != user?.tid) return notFound();

  return (
    <div className="x-tenant">
      {/*  */}
      {children}
    </div>
  );
}
