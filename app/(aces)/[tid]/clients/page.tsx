import SubHeader from "@/components/sub-header";
import { getUserInfo } from "@/lib/cookies";
import { getMany } from "@/lib/fetcher";
import formatDay from "@/lib/formatDay";
import Client from "@/types/Client";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }: TenantProps) {
	const user = await getUserInfo();
	const clients = await getMany("client");

	// This page is only for partner
	if (user?.type != "partner") notFound();

	return (
		<div className="aces-clients">
			<SubHeader
				title="Clients"
				href={`/${params.tid}/clients/create`}	
				linkLabel="Create new client"
			/>
			<table className="w-full mt-12 table-auto">
				<thead>
					<tr>
						<th className="p-3 text-left">#</th>
						<th className="p-3 text-left">Organization</th>
						<th className="p-3 text-left">Created</th>
					</tr>
				</thead>
				<tbody>
					{ clients.map((v: Client, i: number) => (
						<tr key={ i }>
							<td className="p-3 text-left capitalize">
								{ i + 1 }
							</td>
							<td className="p-3 text-left capitalize">
								<Link href={ `/${params.tid}/clients/${v.id}` } className="border-b border-black">
									{ v.org_name }
								</Link>
							</td>
							<td className="p-3 text-left capitalize">
								{ formatDay(v.created) }
							</td>
						</tr>
					)) }
				</tbody>
			</table>
			<pre className="text-[12.25px] my-6">{ JSON.stringify(clients, null, 3) }</pre>
		</div>
	);
}
