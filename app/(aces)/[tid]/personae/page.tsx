import { getMany } from "@/lib/fetcher";
import Link from "next/link";

export default async function Page({ params }: TenantProps) {
  const personae = await getMany("persona")

  return (
    <div className="aces-personae">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Personae</h1>
      {personae.map((persona: any) => (
        <p className="mb-1" key={persona.id}>
          <Link href={`/${params.tid}/personae/${persona.id}`}>
            {persona.fullname}
          </Link>
        </p>
      ))}
      <pre className="text-[12.25px] my-6">{JSON.stringify(personae, null, 3)}</pre>
    </div>
  );
}
