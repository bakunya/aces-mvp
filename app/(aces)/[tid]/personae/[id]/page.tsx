import BackTo from "@/components/back-to";
import { getSingle } from "@/lib/fetcher";

export default async function PageWithId({ params }: WithIdProps) {
  const persona = await getSingle("persona", params.id);

  return (
    <div className="aces-persona">
      <BackTo label="Personae" href={`/${params.tid}/personae`} />
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Persona</h1>
      <pre className="text-[12.25px] my-6">{JSON.stringify(persona, null, 3)}</pre>
    </div>
  );
}
