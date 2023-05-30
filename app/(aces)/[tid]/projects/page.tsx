import { getMany } from "@/lib/fetcher";
import Link from "next/link";

export default async function Page({ params }: TenantProps) {
  const projects = await getMany("project")

  return (
    <div className="aces-projects">
      <h1 className="text-2xl text-slate-700 font-bold mb-6">Projects</h1>
      {projects.map((project: any) => (
        <p className="mb-1" key={project.id}>
          <Link href={`/${params.tid}/projects/${project.id}/settings`}>
            {project.title}
          </Link>
        </p>
      ))}
      <pre className="text-[12.25px] my-6">{JSON.stringify(projects, null, 3)}</pre>
    </div>
  );
}
