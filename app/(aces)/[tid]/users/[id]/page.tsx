"use server"
import BackTo from "@/components/back-to";
import { getSingle } from "@/lib/fetcher";
import ModalUpdate from "./components/modal-update";

export default async function PageWithId({ params }: WithIdProps) {
	const user = await getSingle("user", params.id) as User;

	return (
		<div className="aces-user">
			<BackTo label="Users" href={ `/${params.tid}/users` } />
			<div className="px-4 sm:px-0 mt-12">
				<h3 className="text-base font-semibold leading-7 text-gray-900">User Information</h3>
				<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details.</p>
			</div>
			<div className="mt-6 border-t border-gray-100">
				<dl className="divide-y divide-gray-100">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-between">
							<span className="truncate mr-1">
								{ user.fullname }
							</span>
							<ModalUpdate 
								user={{ fullname: user.fullname }} 
								title="Full name" 
								inputProps={{
									autoComplete: "fullname",
									placeholder: "janesmith andreas",
									name: "fullname"
								}}
							/>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">Username</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-between">
							<span className="truncate mr-1">
								{ user.username }
							</span>
							<ModalUpdate 
								user={{ username: user.username }} 
								title="username" 
								inputProps={{
									autoComplete: "username",
									placeholder: "janesmith",
									name: "username"
								}}
							/>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex justify-between">
							<span className="truncate mr-1">
								{ user.email }
							</span>
							<ModalUpdate 
								user={{ email: user.email }} 
								title="Email"
								inputProps={{
									autoComplete: "email",
									placeholder: "janesmith@mail.co.id",
									name: "email"
								}} 
							/>
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">Organization</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 truncate">{ user.org_name }</dd>
					</div>
				</dl>
			</div>
			{/* <pre className="text-[12.25px] my-6">{ JSON.stringify(user, null, 3) }</pre> */ }
		</div>
	);
}
