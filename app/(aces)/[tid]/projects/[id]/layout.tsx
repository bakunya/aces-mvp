import BackTo from "@/components/back-to";
import PathTabs from "@/components/path-tabs";
import { getSingle } from "@/lib/fetcher";

export default async function ProjectLayout({ params, children }: WithIdLayoutProps) {
	const project = await getSingle("project", params.id);
	const sections = [
		{ label: "Settings", id: 'path-tabs-settings', href: `/${params.tid}/projects/${params.id}/settings` },
		{ label: "Persona", id: 'path-tabs-persona', href: `/${params.tid}/projects/${params.id}/persona` },
		{ label: "Deployment", id: 'path-tabs-deployment', href: `/${params.tid}/projects/${params.id}/deployment` },
		{ label: "Report", id: 'path-tabs-report', href: `/${params.tid}/projects/${params.id}/report` },
	];

	return (
		<div className="x-project">
			<BackTo label="Project" href={ `/${params.tid}/projects` } />
			<h1 className="text-2xl text-slate-700 font-bold mb-6">{ project.title }</h1>
			<div className="relative border border-gray-600/40 rounded-lg overflow-hidden my-6">
				<div className="px-5 py-6">
					<p>
						This news either evokes some strong feelings and memories, or you were not a Mac gamer in the ’90s. I get
						it, but it seems downright criminal that the Mac isn’t on their platform list.
					</p>
				</div>
				<div className="border-t border-gray-300 p-4 text-sm">
					<p>
						This news either evokes some strong feelings and memories, or you were not a Mac gamer in the ’90s. I get
						it, but it seems downright criminal that the Mac isn’t on their platform list.
					</p>
				</div>
			</div>
			<PathTabs items={ sections } />
			{ children }
		</div>
	);
}