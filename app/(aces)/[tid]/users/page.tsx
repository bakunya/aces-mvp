import { getMany } from "@/lib/fetcher";
import isTenantAdmin from "@/lib/isTenantAdmin";
import Link from "next/link";
import { match } from 'ts-pattern'
import ListBox from "./components/list-box";
import { getUserInfo } from "@/lib/cookies";
import SubHeader from "@/components/sub-header";

export default async function Page({ params }: TenantProps) {
	const users = await getMany("user")
	const currUser = await getUserInfo()

	return (
		<div className="aces-users">
			<SubHeader
				title="Users"
				href={`/${params.tid}/users/create`}	
				linkLabel="Create new user"
			/>
			<table className="w-full mt-12 table-auto mb-20">
				<thead>
					<tr>
						<th className="p-3 text-left">#</th>
						<th className="p-3 text-left">Nama</th>
						<th className="p-3 text-left">Email</th>
						<th className="p-3 text-left">Status</th>
					</tr>
				</thead>
				<tbody>
					{ users.map((v: User, i: number) => (
						<tr>
							<td className="p-3 text-left capitalize">{ i + 1 }</td>
							<td className="p-3 text-left capitalize">
								{ match(v.uid === currUser?.uid)
									.with(true, _ => (
										<Link href={ `/${params.tid}/users/${v.uid}` } className="border-b border-black">
											{ v.fullname }
										</Link>
									))
									.with(false, _ => v.fullname)
									.exhaustive() }
							</td>
							<td className="p-3 text-left">
								<a href={ `mailto:${v.email}` } className="border-b border-black">{ v.email }</a>
							</td>
							<td className="p-3 text-left capitalize relative">
								{ match([v.status, isTenantAdmin(v.uid, v.tid)] as const)
									.with(['suspend', true], ['active', true], v => <ListBox status={ v[0] as "active" | "suspend" } />)
									.with(["suspend", false], ["active", false], v => v[0])
									.otherwise(v => v) }
							</td>
						</tr>
					)) }
				</tbody>
			</table>
			<pre className="text-[12.25px] my-6">{ JSON.stringify(users, null, 3) }</pre>
		</div>
	);
}
