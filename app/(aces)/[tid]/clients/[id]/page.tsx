import BackTo from "@/components/back-to";
import { getUserInfo } from "@/lib/cookies";
import { getSingle } from "@/lib/fetcher";
import { notFound } from "next/navigation";
import ModalUpdate from "./components/modal-update";
import formatDay from "@/lib/formatDay";

export default async function PageWithId({ params }: WithIdProps) {
	const user = await getUserInfo();
	const client = await getSingle("client", params.id);

	// This page is only for partner
	if (user?.type != "partner") notFound();

	return (
		<div className="aces-client">
			<BackTo label="Clients" href={ `/${params.tid}/clients` } />
			<div className="px-4 sm:px-0 mt-12">
				<h3 className="text-base font-semibold leading-7 text-gray-900">Client Information</h3>
				<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Your client details.</p>
			</div>
			<div className="mt-6 border-t border-gray-100">
				<dl className="divide-y divide-gray-100">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">Organization</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-between">
							<span className="truncate mr-1">
								{ client.org_name }
							</span>
							<ModalUpdate
								user={ { org_name: client.org_name } }
								title="Organization"
								inputProps={ {
									autoComplete: "org_name",
									placeholder: "PT Sanur Indah Pertama",
									name: "org_name"
								} }
							/>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">Short name</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-between">
							<span className="truncate mr-1">
								{ client.short_name }
							</span>
							<ModalUpdate
								user={ { short_name: client.short_name } }
								title="Short Name"
								inputProps={ {
									autoComplete: "short_name",
									placeholder: "PT Sanur",
									name: "short_name"
								} }
							/>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">Created</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 truncate">{ formatDay(client.created) }</dd>
					</div>
				</dl>
			</div>
			<pre className="text-[12.25px] my-6">{ JSON.stringify(client, null, 3) }</pre>
		</div>
	);
}
