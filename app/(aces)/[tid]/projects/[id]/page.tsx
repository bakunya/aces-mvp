import BackTo from "@/components/back-to";
import { getSingle } from "@/lib/fetcher";
import Link from "next/link";

export default async function PageWithId({ params }: WithIdProps) {
  const project = await getSingle("project", params.id);

  return (
    <div className="aces-project">
      <BackTo label="Project" href={`/${params.tid}/projects`} />
      <h1 className="text-2xl text-slate-700 font-bold mb-6">{project.title}</h1>

      {/* Tabs */}
      <div className="flex items-end mb-6">
        <Link href={`/${params.tid}/projects/${params.id}/settings`} className="">
          <div className="relative inline-flex justify-center whitespace-nowrap p-4 pb-2 border-b border-gray-600/40">
            <span className="invisible font-medium">Settings</span>
            <span className="absolute left-1/2 top-1/2" style={{ transform: "translate3d(-50%, -35%, 0)" }}>
              Settings
            </span>
          </div>
        </Link>
        <Link href="/123" className="">
          <div className="relative inline-flex justify-center whitespace-nowrap p-4 pb-2 border-b border-gray-600/40">
            <span className="invisible font-medium">Santo Del Ruo</span>
            <span className="absolute left-1/2 top-1/2 font-medium" style={{ transform: "translate3d(-50%, -35%, 0)" }}>
              Santo Del Ruo
            </span>
            <div className="absolute w-full bottom-[-1px] h-[2px] bg-blue-700"></div>
          </div>
        </Link>
        <Link href="/123" className="">
          <div className="relative inline-flex justify-center whitespace-nowrap p-4 pb-2 border-b border-gray-600/40">
            <span className="invisible font-medium">Rusia</span>
            <span className="absolute left-1/2 top-1/2" style={{ transform: "translate3d(-50%, -35%, 0)" }}>
              Rusia
            </span>
          </div>
        </Link>
        <Link href="/123" className="">
          <div className="relative inline-flex justify-center whitespace-nowrap p-4 pb-2 border-b border-gray-600/40">
            <span className="invisible font-medium">Nogotirto DX</span>
            <span className="absolute left-1/2 top-1/2" style={{ transform: "translate3d(-50%, -35%, 0)" }}>
              Nogotirto DX
            </span>
          </div>
        </Link>
        <div className="grow shrink basis-[0%] border-b border-gray-600/40"></div>
      </div>

      <pre className="text-[12.25px] my-6">{JSON.stringify(project, null, 3)}</pre>
    </div>
  );
}
