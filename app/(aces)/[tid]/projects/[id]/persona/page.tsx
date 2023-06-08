import { BaseFrame } from "@/components/frames";
import { ArrowUpTrayIcon, PencilIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default async function Page({ params: { tid, id } }: { params: { tid: string, id: string } }) {
	
	return (
		<div className="aces-project-persona">
			<div className="lg:flex lg:items-center lg:justify-between">
				<div className="min-w-0 flex-1">					
					<h2 className="sm:truncate sm:tracking-tight text-slate-700 font-semibold">Daftar Peserta</h2>
					<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
						<div className="mt-2 flex items-center text-sm text-gray-500">							
							<p className="text-gray-500">Judul dan deskripsi diperlukan dalam laporan</p>
						</div>
					</div>
				</div>
				<div className="mt-5 flex lg:ml-4 lg:mt-0">
					<span className="hidden sm:block">
						<Link
							href={`/${tid}/projects/${id}/persona/add`}
							className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>
							<PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
							Add persona
						</Link>
					</span>

					<span className="ml-3 hidden sm:block">
						<Link
							href={`/${tid}/projects/${id}/persona/upload`}
							className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>
							<ArrowUpTrayIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
							Upload persona CSV
						</Link>
					</span>
				</div>
			</div>
			<BaseFrame>
				<div className="flex items-center min-h-[300px] px-5 py-4">
					<p className="max-w-3xl mx-auto text-center">
						Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for
						class names, generating the corresponding styles and then writing them to a static CSS file.
					</p>
				</div>
			</BaseFrame>

			<h2 className="text-slate-700 font-semibold">Pengelompokan Peserta</h2>
			<p className="text-gray-500">Pengelompokan (grouping) diperlukan untuk penjadwalan Interview dan Diskusi</p>
			<BaseFrame>
				<div className="flex items-center min-h-[300px] px-5 py-4">
					<p className="max-w-3xl mx-auto text-center">
						Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for
						class names, generating the corresponding styles and then writing them to a static CSS file.
					</p>
				</div>
			</BaseFrame>
		</div>
	);
}