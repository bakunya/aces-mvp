import { getMany } from "@/lib/fetcher";
import Project from "@/types/Project";
import truncate from "@/lib/truncate";
import Link from "next/link";

export default async function Page({ params }: TenantProps) {
	const projects = await getMany("project")

	return (
		<div className="aces-projects">
			<h1 className="text-2xl text-slate-700 font-bold mb-6">Projects</h1>
			<table className="w-full mt-12 table-auto">
				<thead>
					<tr>
						<th className="p-3 text-left">#</th>
						<th className="p-3 text-left">Project Name</th>
						<th className="p-3 text-left">Description</th>
						<th className="p-3 text-left">Project Type</th>
					</tr>
				</thead>
				<tbody>
					{ projects.map((v: Project, i: number) => (
						<tr>
							<td className="p-3 text-left capitalize">{ i + 1 }</td>
							<td className="p-3 text-left capitalize">
								<Link href={ `/${params.tid}/projects/${v.id}/settings` } className="border-b border-black">
									{ v.title }
								</Link>
							</td>
							<td className="p-3 text-left capitalize">{ truncate(v?.description ?? '') }</td>
							<td className="p-3 text-left capitalize">{ v.type }</td>
						</tr>
					)) }
				</tbody>
			</table>
			<pre className="text-[12.25px] my-6">{ JSON.stringify(projects, null, 3) }</pre>
		</div>
	);
}
