import { BaseFrame } from "@/components/frames";
import { getSingle } from "@/lib/fetcher";
import ModalUpdateProject from "./components/modal-upate-project";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/20/solid";

export default async function Page({ params }: WithIdProps) {
	const project = await getSingle("project", params.id);

	return (
		<div className="aces-project-settings">
			<h2 className="text-slate-700 font-semibold">Title &amp; Description</h2>
			<p className="text-gray-500">Judul dan deskripsi diperlukan dalam laporan</p>
			<BaseFrame>
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
						<tbody className="divide-y divide-gray-200">
							<tr className="odd:bg-gray-50">
								<td className="whitespace-nowrap w-2/5 px-5 py-4 font-medium text-gray-900">
									<strong>Title</strong>
								</td>
								<td className="whitespace-nowrap px-5 py-3 text-gray-700">
									{ project.title }
									<ModalUpdateProject 
										title="Update Title" 
										dataToUpdate={{ title: project.title }} 
										inputProps={{
											autoComplete: "title",
											name: "title",
											placeholder: "This project ...",
										}}
									/>
								</td>
							</tr>
							<tr className="odd:bg-gray-50">
								<td className="whitespace-nowrap w-2/5 px-5 py-4 font-medium text-gray-900">
									<strong>Description</strong>
								</td>
								<td className="whitespace-nowrap px-5 py-3 text-gray-700">
									{ project.description }
									<ModalUpdateProject 
										title="Update Description" 
										dataToUpdate={{ description: project.description }} 
										inputProps={{
											autoComplete: "description",
											name: "description",
											placeholder: "This project ...",
											type: "textarea"
										}}
									/>
								</td>
							</tr><tr className="odd:bg-gray-50">
								<td className="whitespace-nowrap w-2/5 px-5 py-4 font-medium text-gray-900">
									<strong>Slug</strong>
								</td>
								<td className="whitespace-nowrap px-5 py-3 text-gray-700">
									{ project.slug }
									<ModalUpdateProject 
										title="Update Slug" 
										dataToUpdate={{ slug: project.slug }} 
										inputProps={{
											autoComplete: "slug",
											name: "slug",
											placeholder: "This project ...",
										}}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</BaseFrame>
			{/*  */ }
			<div className="lg:flex lg:items-center lg:justify-between">
				<div className="min-w-0 flex-1">					
					<h2 className="sm:truncate sm:tracking-tight text-slate-700 font-semibold">Modul Asesmen</h2>
					<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
						<div className="mt-2 flex items-center text-sm text-gray-500">							
							<p className="text-gray-500">Judul dan deskripsi diperlukan dalam laporan</p>
						</div>
					</div>
				</div>
				<div className="mt-5 flex lg:ml-4 lg:mt-0">
					<span className="hidden sm:block">
						<Link
							href={`/${params.tid}/projects/${params.id}/settings/modules`}
							className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>
							<PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
							Add modules
						</Link>
					</span>
				</div>
			</div>
			<BaseFrame>
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
						<tbody className="divide-y divide-gray-200">
							<tr className="odd:bg-gray-50">
								<td className="whitespace-nowrap w-2/5 px-5 py-4 font-medium text-gray-900">
									<strong>Title</strong>
								</td>
								<td className="whitespace-nowrap px-5 py-3 text-gray-700">{ project.title }</td>
							</tr>
							<tr className="odd:bg-gray-50">
								<td className="whitespace-nowrap w-2/5 px-5 py-4 font-medium text-gray-900">
									<strong>Description</strong>
								</td>
								<td className="whitespace-nowrap px-5 py-3 text-gray-700">{ project.description }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</BaseFrame>
			{/*  */ }
			<h2 className="text-slate-700 font-semibold">Kriteria</h2>
			<p className="text-gray-500">Kriteria adalah ... diperlukan dalam laporan</p>
			<BaseFrame>
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
						<tbody className="divide-y divide-gray-200">
							<tr className="odd:bg-gray-50">
								<td className="whitespace-nowrap w-2/5 px-5 py-4 font-medium text-gray-900">
									<strong>Title</strong>
								</td>
								<td className="whitespace-nowrap px-5 py-3 text-gray-700">{ project.title }</td>
							</tr>
							<tr className="odd:bg-gray-50">
								<td className="whitespace-nowrap w-2/5 px-5 py-4 font-medium text-gray-900">
									<strong>Description</strong>
								</td>
								<td className="whitespace-nowrap px-5 py-3 text-gray-700">{ project.description }</td>
							</tr>
						</tbody>
					</table>
				</div>
			</BaseFrame>
		</div>
	)
}