import React from 'react'

export type PersonCSV = {
	fullname: string;
	username: string | undefined | unknown;
	phone: string | undefined | unknown;
	tgl_lahir: string | undefined | unknown;
	nip: string | undefined | unknown;
	position: string | undefined | unknown;
};

const CSVPreview = ({ data }: { data: PersonCSV[] }) => {
	return (
		<div className="overflow-x-auto min-w-full">
			<table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
				<thead className="ltr:text-left rtl:text-right">
					<tr>
						<th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							Fullname
						</th>
						<th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							Username
						</th>
						<th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							Phone
						</th>
						<th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							Date of birth
						</th>
						<th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							NIP
						</th>
						<th className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900">
							Position
						</th>
					</tr>
				</thead>

				<tbody className="divide-y divide-gray-200">
					{data.map((itm, idx) => (
						<tr key={idx}>
							<td className="px-4 py-2 whitespace-nowrap">{itm.fullname}</td>
							<td className="px-4 py-2 whitespace-nowrap">{(itm?.username ?? '') as string}</td>
							<td className="px-4 py-2 whitespace-nowrap">{(itm?.phone ?? '') as string}</td>
							<td className="px-4 py-2 whitespace-nowrap">{(itm?.tgl_lahir ?? '') as string}</td>
							<td className="px-4 py-2 whitespace-nowrap">{(itm?.nip ?? '') as string}</td>
							<td className="px-4 py-2 whitespace-nowrap">{(itm?.position ?? '') as string}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CSVPreview