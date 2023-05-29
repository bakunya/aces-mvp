import BackTo from "@/components/back-to";
import { getSingle } from "@/lib/fetcher";

export default async function PageWithId({ params }: WithIdProps) {
  const client = await getSingle("client", params.id);

  return (
    <div className="aces-client">
      <BackTo label="Clients" href={`/${params.tid}/clients`} />
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Client</h1>
      <pre className="text-[12.25px] my-6">{JSON.stringify(client, null, 3)}</pre>
    </div>
  );
}
