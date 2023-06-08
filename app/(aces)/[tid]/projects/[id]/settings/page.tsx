import { BaseFrame } from "@/components/frames";
import { getMany, getSingle } from "@/lib/fetcher";
import ModalUpdateProject from "./components/modal-upate-project";

export default async function Page({ params }: WithIdProps) {
	const project = await getSingle("project", params.id);
	console.log(project, params)

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
							</tr>
						</tbody>
					</table>
				</div>
			</BaseFrame>
			{/*  */ }
			<h2 className="text-slate-700 font-semibold">Modul Asesmen</h2>
			<p className="text-gray-500">Judul dan deskripsi diperlukan dalam laporan</p>
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