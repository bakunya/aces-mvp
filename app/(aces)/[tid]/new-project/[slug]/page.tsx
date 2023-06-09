import plans from "@/lib/plans";
import { redirect } from "next/navigation";
import Form from "./components/form";

export default async function Page({ params }: { params: { slug: string, tid: string } }) {
	const plan = plans.find(v => v.id === params.slug)
	if (!plan) return redirect(`/${params.tid}/new-project`)

	return (
		<div className="aces-new-project">
			<h1 className="text-2xl text-slate-700 font-bold mb-6">{ plan.name }</h1>
			<Form type={params.slug} tid={params.tid} />
		</div>
	);
}
