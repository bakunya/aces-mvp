import ChangeDOM from "@/components/change-dom";
import FileHandling from "./components/file-handling";

export default async function Page() {
	return (
		<div className="aces-project-persona upload">
			<h2 className="text-base font-semibold leading-7 text-gray-900">Daftar Peserta</h2>
			<p className="mt-1 text-sm leading-6 text-gray-600">
				Data peserta diperlukan dalam laporan
			</p>
			<FileHandling />
			<ChangeDOM elements={ [{ id: 'path-tabs-persona', removeClassName: 'hidden' }] } />
		</div>
	);
}