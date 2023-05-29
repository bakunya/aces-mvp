import { getMany } from "@/lib/fetcher";
import Link from "next/link";

export default async function Page({ params }: TenantProps) {
  const clients = await getMany("client")

  return (
    <div className="aces-clients">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Clients</h1>
      {clients.map((client: any) => (
        <p className="mb-1" key={client.id}>
          <Link href={`/${params.tid}/clients/${client.id}`}>
            {client.org_name}
          </Link>
        </p>
      ))}
      <pre className="text-[12.25px] my-6">{JSON.stringify(clients, null, 3)}</pre>
    </div>
  );
}
