import plans from "@/lib/plans";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { slug: string, tid: string } }) {
	const plan = plans.find(v => v.id === params.slug)
	if (!plan) return redirect(`/${params.tid}/new-project`)

	return (
		<div className="aces-new-project">
			<h1 className="text-2xl text-slate-700 font-bold mb-6">{ plan.name }</h1>
			<form>
				<input
					autoFocus
					id="price"
					type="text"
					name="price"
					className="text-md w-full rounded-md border-0 p-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
					placeholder="Project Name"
				/>
				<button className="ml-auto mt-5 px-12 py-3 text-md block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
			</form>
		</div>
	);
}
