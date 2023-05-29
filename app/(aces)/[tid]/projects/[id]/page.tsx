import BackTo from "@/components/back-to";
import { getSingle } from "@/lib/fetcher";

export default async function PageWithId({ params }: WithIdProps) {
  const project = await getSingle("project", params.id);

  return (
    <div className="aces-project">
      <BackTo label="Project" href={`/${params.tid}/projects`} />
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Project</h1>
      <pre className="text-[12.25px] my-6">{JSON.stringify(project, null, 3)}</pre>
    </div>
  );
}
